import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from './redux/actions';
import { getUsersValues, getLoadingState, getUsersLength } from './redux/selectors';
import consts from 'utils/commonConsts';

import DataTable from 'components/dataTable/dataTable.jsx';

const columns = [
  {
    title: "Имя",
    dataIndex: "fullName",
    key: "fullName"
  },
  {
    title: "Логин",
    key: "login",
    dataIndex: "login"
  },
  {
    title: "Должность",
    key: "doljn",
    dataIndex: "doljn"
  },
  {
    title: "Местоположение",
    key: "organizationName",
    dataIndex: "organizationName"
  },
  {
    title: "Отдел",
    key: "departmentName",
    dataIndex: "departmentName"
  }
];

const pageSize = 5;
const rowKey = "id";

export default () => {
  const dispatch = useDispatch();
  
  const users = useSelector(getUsersValues);
  const usersLength = useSelector(getUsersLength);

  const loadingState = useSelector(getLoadingState);
  const isLoading = loadingState === consts.loadingState.LOADING_STARTED;
  const skeletonSize = usersLength > 0 && usersLength <= pageSize ? usersLength + 1 : pageSize;

  if (isLoading) {
    dispatch(fetchUsers());
  }

  return <DataTable rowKey={rowKey}
            isLoading={isLoading}
            dataSource={users}
            columns={columns}
            pageSize={pageSize}
            skeletonSize={skeletonSize} />
}