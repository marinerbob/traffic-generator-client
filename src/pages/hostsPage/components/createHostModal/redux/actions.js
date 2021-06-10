import { createAction } from '@reduxjs/toolkit';
import { TOGGLE_CREATE_HOST_MODAL, 
    CREATE_HOST_STARTED, 
    CREATE_HOST_FINISHED } from './actionTypes';

import consts from './constants';

import hostsAPI from 'src/fakeAPI/hosts';

import { fetchHosts } from 'pages/hostsPage/components/hostsTable/redux/actions';

export const toggleCreateHostModal = createAction(TOGGLE_CREATE_HOST_MODAL);

const __createHostStarted = createAction(CREATE_HOST_STARTED);
const __createHostFinished = createAction(CREATE_HOST_FINISHED);

const api = hostsAPI();

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