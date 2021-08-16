import React from 'react';

import { Form } from 'antd';

import { Controller } from 'react-hook-form';

export default ({ name,
    label,
    control,
    error,
    render,
    mergeProps = {},
    itemProps = {} }) => {
    
    return (
        <Form.Item name={name} 
        label={label}
        help={error && error.message}
        validateStatus={error && 'error'}
        {...itemProps}>
        <Controller 
            name={name}
            control={control}
            render={({ field }) => (<>
                    {render({...field, ...mergeProps})}
                </>)}
        />
    </Form.Item>
    );
}
