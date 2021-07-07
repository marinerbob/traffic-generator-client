import React from 'react';

import { Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';

import { startHostDelete, confirmHostDelete, rejectHostDelete } from './redux/actions';
import { getHostName } from './redux/selectors';

const { confirm } = Modal; 

export default (props) => {
    const { hostId } = props;
    const dispatch = useDispatch();

    const hostName = useSelector(getHostName(hostId));

    const onClick = () => {
        dispatch(startHostDelete(hostId));

        confirm({
            title: `Удаление хоста ${hostName}`,
            content: `Вы действительно хотите удалить хост ${hostName}?`,
            okText: 'Да',
            onOk() {
                dispatch(confirmHostDelete());
            },
            cancelText: 'Нет',
            onCancel() {
                dispatch(rejectHostDelete());
            }
        });

    };

    return <DeleteOutlined 
                className="button-icon delete"
                onClick={onClick}
                            />;
}