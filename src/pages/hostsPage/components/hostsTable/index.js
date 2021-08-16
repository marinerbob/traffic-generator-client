import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchHosts } from './redux/actions';
import { getHostsValues, getLoadingState, getHostsLength } from './redux/selectors';
import consts from 'utils/commonConsts';

import DataTable from 'components/dataTable/dataTable.jsx';
import { Tag } from 'antd';

const columns = [
  {
    title: "IP-адрес",
    dataIndex: "ipaddr",
    key: "ipaddr",
    render: ip => (<>{ip}</>)
  },
  {
    title: "Имя",
    key: "name",
    dataIndex: "name"
  },
  // {
  //   title: 'Пользователи',
  //   key: 'availableUsers',
  //   dataIndex: 'availableUsers',
  //   render: users => (<>
  //     {users.map(user => (<Tag key={user.id} color="blue">{user.login}</Tag>))}
  //   </>)
  // },
];

const pageSize = 5;
const rowKey = "id";

export default () => {
  const dispatch = useDispatch();
  
  const hosts = useSelector(getHostsValues);
  const hostsLength = useSelector(getHostsLength);

  const loadingState = useSelector(getLoadingState);
  const isLoading = loadingState === consts.loadingState.LOADING_STARTED;
  const skeletonSize = hostsLength > 0 && hostsLength <= pageSize ? hostsLength + 1 : pageSize;

  if (isLoading) {
    dispatch(fetchHosts());
  }

  return <DataTable rowKey={rowKey}
            isLoading={isLoading}
            dataSource={hosts}
            columns={columns}
            pageSize={pageSize}
            skeletonSize={skeletonSize} />
}