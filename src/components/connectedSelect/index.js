import React from 'react';

import { Select } from 'antd';

import { useSelector } from 'react-redux';

const { Option } = Select;

export default React.forwardRef((props, ref) => {
    const { placeholder, value, onBlur, onChange, dataSelector, propKey, propText, selectProps } = props;
    const options = dataSelector ? useSelector(dataSelector) : [];
    
    return (<Select
        mode="multiple"
        className="form-input"
        allowClear
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        defaultValue={value}
        style={{ width: '100%' }}
        {...selectProps}
        >
      {options.map(op => (
          <Option value={op[propKey]} key={op[propKey]} >{op[propText]}</Option>
      ))}
    </Select>);
});
