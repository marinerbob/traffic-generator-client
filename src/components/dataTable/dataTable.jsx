import React from 'react';

import { Table } from "antd";

import SkeletonTable from './skeletonTable';

export default props => {
    const { isLoading, pageSize, columns } = props;
    return isLoading ? <SkeletonTable columns={columns} rowCount={pageSize}/> : (
    <Table pagination={{ pageSize: pageSize }} {...props} />);
};