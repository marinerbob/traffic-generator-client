import React from 'react';

import { Table } from "antd";

import SkeletonTable from './skeletonTable';

import './dataTable.scss';

export default props => {
    const { isLoading, pageSize, skeletonSize, columns, isScrollable } = props;

    const scroll = isScrollable ? { x: 1500 } : {};

    return isLoading ? <SkeletonTable columns={columns} rowCount={skeletonSize} scroll={scroll} /> : (
    <Table className="generator-data-table" pagination={{ pageSize: pageSize }} {...props} />);
};