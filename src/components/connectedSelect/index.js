import React from 'react';

import { Select } from 'antd';

import { useSelector } from 'react-redux';

const { Option } = Select;

export default React.forwardRef(({ dataSelector, propKey, propText, selectProps }, ref) => {
    const options = dataSelector ? useSelector(dataSelector) : [];
    
    return (<Select
        mode="multiple"
        allowClear
        placeholder="Выберите пользователей из списка"
        ref={ref}
        style={{ width: '100%' }}
        {...selectProps}
        >
      {options.map(op => (
          <Option value={op[propKey]} key={op[propKey]} >{op[propText]}</Option>
      ))}
    </Select>);
});
