import { combineReducers } from 'redux';

import tasksTable from 'pages/tasksPage/components/tasksTable/redux/reducers';
import createTaskModal from 'pages/tasksPage/components/createTaskModal/redux/reducers';

export default combineReducers({
    tasksTable,
    createTaskModal
});