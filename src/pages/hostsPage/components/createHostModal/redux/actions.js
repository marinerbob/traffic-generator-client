import { createAction } from '@reduxjs/toolkit';
import { TOGGLE_CREATE_HOST_MODAL, 
    CREATE_HOST_STARTED, 
    CREATE_HOST_FINISHED } from './actionTypes';

import consts from './constants';
import commonConsts from 'utils/commonConsts';

import hostsAPI from 'src/fakeAPI/hosts';
import usersAPI from 'src/fakeAPI/users';

import { fetchHosts } from 'pages/hostsPage/components/hostsTable/redux/actions';

import { fetchSelectDataStart, fetchSelectDataFinish } from 'components/connectedSelect/redux/actions.js'; 

export const toggleCreateHostModal = createAction(TOGGLE_CREATE_HOST_MODAL);

const __createHostStarted = createAction(CREATE_HOST_STARTED);
const __createHostFinished = createAction(CREATE_HOST_FINISHED);

const api = hostsAPI();
const usersApi = usersAPI();

export const createHost = formData => dispatch => {
    dispatch(__createHostStarted());

    api.addHost(formData).then(() => {
        dispatch(__createHostFinished({
            hostAddingStatus: consts.CREATE_HOST_FINISHED
        }));
        dispatch(fetchHosts());
    })
    .catch(err => {
        dispatch(__createHostFinished({
            hostAddingStatus: consts.CREATE_HOST_ERRORED
        }));
    });
};

const __fetchUsersSelectDataStart = fetchSelectDataStart('usersSelect');
const __fetchUsersSelectDataFinish = fetchSelectDataFinish('usersSelect');

export const fetchUsersForSelect = () => dispatch => {
    dispatch(__fetchUsersSelectDataStart());

    usersApi.getUsersForSelect().then(data => {
        dispatch(__fetchUsersSelectDataFinish({
            data,
            loadingState: commonConsts.loadingState.LOADING_FINISHED
        }));
    })
    .catch(err => {
        dispatch(__fetchUsersSelectDataFinish({
            data: [],
            loadingState: commonConsts.loadingState.LOADING_ERRORED
        }));
    })
}