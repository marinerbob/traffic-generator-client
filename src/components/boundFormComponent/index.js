import React from 'react';

import { Form, Alert } from 'antd';

import { Controller } from 'react-hook-form';


export default (props) => {
    return (
        <Form.Item name={props.name} label={props.label}>
            <Controller 
                name={props.name}
                control={props.control}
                render={({ field }) => (<>
                    
                    </>)}
            />
        </Form.Item>
    );
};
