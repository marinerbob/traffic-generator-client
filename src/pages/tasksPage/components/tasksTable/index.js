import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchTasks } from './redux/actions';
import { getTasksValues, getLoadingState, getTasksLength } from './redux/selectors';
import consts from 'utils/commonConsts';

import DataTable from 'components/dataTable/dataTable.jsx';

import DeleteTaskButton from './deleteBtn.jsx';
import { Switch } from "antd";

const columns = [
  {
    title: "Название задачи",
    dataIndex: "name",
    key: "name"
  },
  {
    title: 'Статус активности задачи',
    width: 150,
    render: () => (<Switch defaultChecked />)
  },
  {
    dataIndex: 'id',
    key: 'id',
    render: id => (<><DeleteTaskButton taskId={id}/></>),
    width: 70
  }
];

const pageSize = 8;
const rowKey = "id";

export default () => {
  const dispatch = useDispatch();
  
  const tasks = useSelector(getTasksValues);
  const tasksLength = useSelector(getTasksLength);

  const loadingState = useSelector(getLoadingState);
  const isLoading = loadingState === consts.loadingState.LOADING_STARTED;
  const skeletonSize = tasksLength > 0 && tasksLength <= pageSize ? tasksLength + 1 : pageSize;

  if (isLoading) {
    dispatch(fetchTasks());
  }

  return <DataTable rowKey={rowKey}
            isLoading={isLoading}
            dataSource={tasks}
            columns={columns}
            pageSize={pageSize}
            skeletonSize={skeletonSize} />
}