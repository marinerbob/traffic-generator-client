import React from 'react';

import { Table } from "antd";

import SkeletonTable from './skeletonTable';

export default props => {
    const { isLoading, pageSize, skeletonSize, columns } = props;
    return isLoading ? <SkeletonTable columns={columns} rowCount={skeletonSize}/> : (
    <Table pagination={{ pageSize: pageSize }} {...props} />);
};