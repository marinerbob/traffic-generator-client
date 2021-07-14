import { combineReducers } from 'redux';

import usersTable from 'pages/usersPage/components/usersTable/redux/reducers';
import createUserModal from 'pages/usersPage/components/createUserModal/redux/reducers';

export default combineReducers({
    usersTable,
    createUserModal
});