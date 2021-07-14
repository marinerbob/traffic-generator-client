import { createAction } from '@reduxjs/toolkit';

import usersAPI from 'src/fakeAPI/users';
import { getOrganizations, getTitles, getDepartments } from 'src/fakeAPI/other';

import { fetchUsers } from 'pages/usersPage/components/usersTable/redux/actions';

import consts from './constants';
import commonConsts from 'utils/commonConsts';

import { fetchSelectDataStart, fetchSelectDataFinish } from 'components/connectedSelect/redux/actions.js';
import { toggleModalVisibility } from 'components/connectedModal/redux/actions';

import { CREATE_USER_STARTED, CREATE_USER_FINISHED } from './actionTypes';

const mapToSelect = data => data.map(el => ({ label: el.name, value: el.id }));

const __createUserStarted = createAction(CREATE_USER_STARTED);
const __createUserFinished = createAction(CREATE_USER_FINISHED);

const api = usersAPI();

export const toggleCreateUserModal = toggleModalVisibility({ modalId: consts.CREATE_USER_MODAL_NAME });

export const createUser = formData => dispatch => {
    dispatch(__createUserStarted());

    api.addUser(formData).then(() => {
        dispatch(__createHostFinished({
            hostAddingStatus: consts.CREATE_HOST_FINISHED
        }));
        dispatch(toggleCreateUserModal);
        dispatch(fetchUsers());
    })
    .catch(err => {
        dispatch(__createUserFinished({
            hostAddingStatus: consts.CREATE_USER_ERRORED
        }));
    })
};

const __fetchOrgsSelectDataStart = fetchSelectDataStart(consts.ORGS_SELECT_NAME);
const __fetchOrgsSelectDataFinish = fetchSelectDataFinish(consts.ORGS_SELECT_NAME);

const __fetchDepsSelectDataStart = fetchSelectDataStart(consts.DEPS_SELECT_NAME);
const __fetchDepsSelectDataFinish = fetchSelectDataFinish(consts.DEPS_SELECT_NAME);

const __fetchTitlesSelectDataStart = fetchSelectDataStart(consts.TITLES_SELECT_NAME);
const __fetchTitlesSelectDataFinish = fetchSelectDataFinish(consts.TITLES_SELECT_NAME);

export const fetchOrgs = () => dispatch => {
    dispatch(__fetchOrgsSelectDataStart());

    getOrganizations().then(data => {
        dispatch(__fetchOrgsSelectDataFinish({
            data: mapToSelect(data),
            loadingState: commonConsts.loadingState.LOADING_FINISHED
        }));
    })
    .catch(err => {
        dispatch(__fetchOrgsSelectDataFinish({
            data: [],
            loadingState: commonConsts.loadingState.LOADING_ERRORED
        }));
    });
};

export const fetchDeps = () => dispatch => {
    dispatch(__fetchDepsSelectDataStart());

    getDepartments().then(data => {
        dispatch(__fetchDepsSelectDataFinish({
            data: mapToSelect(data),
            loadingState: commonConsts.loadingState.LOADING_FINISHED
        }));
    })
    .catch(err => {
        dispatch(__fetchDepsSelectDataStart({
            data: [],
            loadingState: commonConsts.loadingState.LOADING_ERRORED
        }));
    });
};

export const fetchTitles = () => dispatch => {
    dispatch(__fetchTitlesSelectDataStart());

    getTitles().then(data => {
        dispatch(__fetchTitlesSelectDataFinish({
            data: mapToSelect(data),
            loadingState: commonConsts.loadingState.LOADING_FINISHED
        }));
    })
    .catch(err => {
        dispatch(__fetchTitlesSelectDataFinish({
            data: [],
            loadingState: commonConsts.loadingState.LOADING_ERRORED
        }));
    });
};