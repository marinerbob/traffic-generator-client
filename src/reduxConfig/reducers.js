import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

import hostsPage from 'pages/hostsPage/redux/reducers';
import usersPage from 'pages/usersPage/redux/reducers';
import tasksPage from 'pages/tasksPage/redux/reducers';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    hostsPage,
    usersPage,
    tasksPage
});

export default createRootReducer;