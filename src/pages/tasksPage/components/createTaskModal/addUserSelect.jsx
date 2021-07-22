import React from 'react';

import AsyncSelect from 'components/connectedSelect/asyncSelect.jsx';

import { fetchUsers } from './redux/actions'; 
import { getUsersSelectState } from './redux/selectors';

export default React.forwardRef((props, ref) => {
    const selectProps = {
        style: { width: '100%' },
        ...props
    };

    return (<AsyncSelect
                selectRef={ref}
                selectProps={selectProps}
                selector={getUsersSelectState}
                updateAction={fetchUsers}
    />)
});