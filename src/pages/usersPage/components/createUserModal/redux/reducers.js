import { combineReducers } from "redux";

import createSelectReducer from 'components/connectedSelect/redux/reducers.js';


const selects = combineReducers({
    departmentsSelect: createSelectReducer('createUserModal/departments'),
    organizationsSelect: createSelectReducer('createUserModal/organizations'),
    titlesSelect: createSelectReducer('createUserModal/titles')
});

export default combineReducers({
    selects
});

