import React from 'react';

import AsyncSelect from 'components/connectedSelect/asyncSelect.jsx';

import { fetchHostsToSelect } from './redux/actions'; 
import { getHostsSelectState } from './redux/selectors';

export default React.forwardRef((props, ref) => {

    return (<AsyncSelect
                selectRef={ref}
                selectProps={props}
                selector={getHostsSelectState}
                updateAction={fetchHostsToSelect}
    />)
});