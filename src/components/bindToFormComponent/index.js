import React from 'react';

import { Form, Alert } from 'antd';

import { Controller } from 'react-hook-form';


export default ({ name, label, control, children, error, noStyle }) => {
    return (
        <Form.Item name={name} label={label} noStyle={noStyle}>
            <Controller 
                name={name}
                control={control}
                render={({ field }) => (<>
                        {React.cloneElement(children, {...field, ...children.props, className:  `${children.props.className}${error ? ' form-input_errored' : ''}`})}
                        {error && <Alert type="error" message={error.message} />}
                    </>)}
            />
        </Form.Item>
    );
};
