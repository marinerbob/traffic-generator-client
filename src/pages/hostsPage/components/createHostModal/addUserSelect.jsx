import React from 'react';

import AsyncSelect from 'components/connectedSelect/asyncSelect.jsx';

import { fetchUsersForSelect } from './redux/actions'; 
import { getUsersSelectState } from './redux/selectors';

export default React.forwardRef((props, ref) => {
    const selectProps = {
        allowClear: true,
        mode: 'multiple',
        style: { width: '100%' },
        placeholder: 'Выберите подключаемых пользователей из списка',
        ...props
    };

    return (<AsyncSelect
                selectRef={ref}
                selectProps={selectProps}
                selector={getUsersSelectState}
                updateAction={fetchUsersForSelect}
    />)
});