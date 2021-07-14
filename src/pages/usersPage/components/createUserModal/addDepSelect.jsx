import React from 'react';

import AsyncSelect from 'components/connectedSelect/asyncSelect.jsx';

import { fetchDeps } from './redux/actions'; 
import { getDepsSelectState } from './redux/selectors';

export default React.forwardRef((props, ref) => {
    const selectProps = {
        style: { width: '100%' },
        placeholder: 'Выберите отдел',
        showSearch: false,
        ...props
    };

    return (<AsyncSelect
                selectRef={ref}
                selectProps={selectProps}
                selector={getDepsSelectState}
                updateAction={fetchDeps}
    />)
});