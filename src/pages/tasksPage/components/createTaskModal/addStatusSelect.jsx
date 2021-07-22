import React from 'react';

import AsyncSelect from 'components/connectedSelect/asyncSelect.jsx';

import { fetchStatuses } from './redux/actions'; 
import { getStatusesSelectState } from './redux/selectors';

export default React.forwardRef((props, ref) => {
    const selectProps = {
        placeholder: 'Выберите статус задачи',
        ...props
    };

    return (<AsyncSelect
                selectRef={ref}
                selectProps={selectProps}
                selector={getStatusesSelectState}
                updateAction={fetchStatuses}
    />)
});