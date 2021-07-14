import React from 'react';

import AsyncSelect from 'components/connectedSelect/asyncSelect.jsx';

import { fetchOrgs } from './redux/actions'; 
import { getOrgsSelectState } from './redux/selectors';

export default React.forwardRef((props, ref) => {
    const selectProps = {
        style: { width: '100%' },
        placeholder: 'Выберите подразделение',
        showSearch: false,
        ...props
    };

    return (<AsyncSelect
                selectRef={ref}
                selectProps={selectProps}
                selector={getOrgsSelectState}
                updateAction={fetchOrgs}
    />)
});