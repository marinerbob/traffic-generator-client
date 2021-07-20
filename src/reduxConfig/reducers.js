import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

import modals from 'components/connectedModal/redux/reducers';

import hostsPage from 'pages/hostsPage/redux/reducers';
import usersPage from 'pages/usersPage/redux/reducers';
import tasksPage from 'pages/tasksPage/redux/reducers';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    modals,
    hostsPage,
    usersPage,
    tasksPage
});

export default createRootReducer;