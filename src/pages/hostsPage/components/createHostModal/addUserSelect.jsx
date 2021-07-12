import React from 'react';

import AsyncSelect from 'components/connectedSelect/asyncSelect.jsx';

import { fetchUsersForSelect } from './redux/actions'; 
import { getUsersSelectState } from './redux/selectors';

export default React.forwardRef((props, ref) => {
    return (<AsyncSelect
                allowClear
                mode="multiple"
                ref={ref}
                dataSelector={getUsersSelectState}
                updateAction={fetchUsersForSelect}
                {...props}
    />)
});