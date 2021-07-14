import React from 'react';

import AsyncSelect from 'components/connectedSelect/asyncSelect.jsx';

import { fetchTitles } from './redux/actions'; 
import { getTitlesSelectState } from './redux/selectors';

export default React.forwardRef((props, ref) => {
    const selectProps = {
        style: { width: '100%' },
        placeholder: 'Выберите должность',
        showSearch: false,
        ...props
    };

    return (<AsyncSelect
                selectRef={ref}
                selectProps={selectProps}
                selector={getTitlesSelectState}
                updateAction={fetchTitles}
    />)
});