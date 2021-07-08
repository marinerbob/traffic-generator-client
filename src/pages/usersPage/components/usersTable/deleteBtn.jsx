import React from 'react';

import { Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';

import { startUserDelete, confirmUserDelete, rejectUserDelete } from './redux/actions';
import { getUserName } from './redux/selectors';

const { confirm } = Modal; 

export default (props) => {
    const { userId } = props;
    const dispatch = useDispatch();

    const userName = useSelector(getUserName(userId));

    const onClick = () => {
        dispatch(startUserDelete(userId));

        confirm({
            title: `Удаление пользователя ${userName}`,
            content: `Вы действительно хотите удалить пользователя '${userName}' ?`,
            okText: 'Да',
            onOk() {
                dispatch(confirmUserDelete());
            },
            cancelText: 'Нет',
            onCancel() {
                dispatch(rejectUserDelete());
            }
        });

    };

    return <DeleteOutlined 
                className="button-icon delete"
                onClick={onClick}
                            />;
}