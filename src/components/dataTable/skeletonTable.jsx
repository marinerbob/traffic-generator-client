import React from 'react'
import { Table, Skeleton } from 'antd';

const SkeletonTable = ({ columns, rowCount, scroll }) => {
  return (
    <Table
      rowKey="key"
      pagination={false}
      scroll={scroll}
      dataSource={[...Array(rowCount)].map((_, index) => ({
        key: `key${index}`,
      }))}
      columns={columns.map((column) => {
        return {
          ...column,
          render: function renderPlaceholder() {
            return (
              <Skeleton
                key={column.dataIndex}
                title={true}
                paragraph={false}
              />
            );
          },
        };
      })}
    />
  );
};

export default SkeletonTable;