import React from 'react';

import { Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';

import { startTaskDelete, confirmTaskDelete, rejectTaskDelete } from './redux/actions';
import { getTaskName } from './redux/selectors';

const { confirm } = Modal; 

export default (props) => {
    const { taskId } = props;
    const dispatch = useDispatch();

    const taskName = useSelector(getTaskName(taskId));

    const onClick = () => {
        dispatch(startTaskDelete(taskId));

        confirm({
            title: `Удаление задачи ${taskName}`,
            content: `Вы действительно хотите удалить задачу ${taskName}?`,
            okText: 'Да',
            onOk() {
                dispatch(confirmTaskDelete());
            },
            cancelText: 'Нет',
            onCancel() {
                dispatch(rejectTaskDelete());
            }
        });

    };

    return <DeleteOutlined 
                className="button-icon delete"
                onClick={onClick}
                            />;
}