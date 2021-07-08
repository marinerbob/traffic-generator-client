import { createSelector } from 'reselect';

import { getTasksPage } from 'pages/tasksPage/redux/selectors';

import { getObjKeys, getObjValues } from 'utils/reduxUtils';

export const getTasksTable = state => getTasksPage(state).tasksTable;

export const getTasks = state => getTasksTable(state).data;
export const getTasksIds = createSelector(getTasks, tasks => getObjKeys(tasks));
export const getTasksValues = createSelector(getTasks, tasks => getObjValues(tasks));
export const getTasksLength = createSelector(getTasksValues, tasks => tasks.length);

export const getTask = id => state => getTasks(state)[id];
export const getTaskName = id => state => getTask(id)(state).name;

export const getLoadingState = state => getTasksTable(state).loadingState;

export const getDeletedTaskId = state => getTasksTable(state).deletedTaskId;