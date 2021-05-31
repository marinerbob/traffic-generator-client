import { combineReducers } from 'redux';

import hostsPage from 'pages/hostsPage/redux/reducers';
import usersPage from 'pages/usersPage/redux/reducers';
import tasksPage from 'pages/tasksPage/redux/reducers';

export default combineReducers({
    hostsPage,
    usersPage,
    tasksPage
});