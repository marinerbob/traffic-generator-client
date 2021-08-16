import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchTasks } from './redux/actions';
import { getTasksValues, getLoadingState, getTasksLength } from './redux/selectors';
import consts from 'utils/commonConsts';

import DataTable from 'components/dataTable/dataTable.jsx';

import DeleteTaskButton from './deleteBtn.jsx';
import { Switch, Tag } from "antd";

const columns = [
  {
    title: 'Название задачи',
    dataIndex: 'name',
    key: 'name',
    width: 250,
    fixed: 'left'
  },
  {
    title: 'Задача активна',
    dataIndex: 'isActive',
    key: 'isActive',
    width: 150,
    fixed: 'left',
    align: 'center',
    render: isActive => (<Switch disabled checked={isActive} />)
  },
  {
    title: 'Тип задачи',
    dataIndex: 'taskType',
    key: 'taskTypeId',
    width: 200,
    align: 'center',
    render: taskType => (<Tag color="cyan">{taskType}</Tag>)
  },
  {
    title: 'Хост-отправитель',
    dataIndex: 'sender',
    key: 'senderId',
    width: 200
  },
  {
    title: 'Хост-получатель',
    dataIndex: 'receiver',
    key: 'receiverId',
    width: 200
  },
  {
    title: 'Задача повторяема',
    dataIndex: 'isRepeatable',
    key: 'isRepeatable',
    width: 150,
    align: 'center',
    render: isRep => (<Switch disabled checked={isRep} />)
  },
  {
    title: 'Для Unix машин',
    dataIndex: 'isUnix',
    key: 'isUnix',
    width: 150,
    align: 'center',
    render: isUnix => (<Switch disabled checked={isUnix} />)
  },
  {
    title: 'Повторений',
    dataIndex: 'repeats',
    key: 'repeats',
    width: 100
  },
  {
    title: 'Пауза перед стартом',
    dataIndex: 'delay',
    key: 'delay',
    width: 150
  },
  {
    title: 'Время запуска задачи',
    dataIndex: 'startTime',
    key: 'startTime',
    width: 150
  },
  {
    title: 'Пользователь-отправитель',
    dataIndex: 'userLogin',
    key: 'userId',
    width: 200
  },
  {
    dataIndex: 'id',
    key: 'id',
    width: 70,
    fixed: 'right',
    align: 'center',
    render: id => (<><DeleteTaskButton taskId={id}/></>),
  }
];

const pageSize = 5;
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
            skeletonSize={skeletonSize}
            isScrollable={true}
            scroll={{ x: 1500 }} />
}