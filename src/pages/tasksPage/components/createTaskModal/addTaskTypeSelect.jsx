import React from 'react';

import AsyncSelect from 'components/connectedSelect/asyncSelect.jsx';

import { fetchTaskTypes } from './redux/actions'; 
import { getTaskTypesSelectState } from './redux/selectors';

export default React.forwardRef((props, ref) => {
    const selectProps = {
        style: { width: '100%' },
        placeholder: 'Выберите тип задачи',
        ...props
    };

    return (<AsyncSelect
                selectRef={ref}
                selectProps={selectProps}
                selector={getTaskTypesSelectState}
                updateAction={fetchTaskTypes}
    />)
});