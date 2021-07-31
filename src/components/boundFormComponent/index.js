import React from 'react';

import { Form, Alert } from 'antd';

import { Controller } from 'react-hook-form';


export default ({ name, label, control, children, error }) => {
    return (
        <Form.Item name={name} label={label}>
            <Controller 
                name={name}
                control={control}
                render={({ field }) => (<>
                        {React.cloneElement(children, {...field, className:  `${children.props.className}${error ? ' form-input_errored' : ''}`})}
                        {error && <Alert type="error" message={error.message} />}
                    </>)}
            />
        </Form.Item>
    );
};
