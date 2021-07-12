import React from 'react';
import { Select, Spin } from 'antd';

import { useSelector, useDispatch } from 'react-redux';

import consts from 'utils/commonConsts';

export default (props) => {
    const { allowClear, mode, onBlur, onChange, value, dataSelector, updateAction } = props;
    const dispatch = useDispatch();
    const { data, loadingState } = useSelector(dataSelector);

    let isEmpty   = data.length === 0;
    let isLoading = loadingState === consts.loadingState.LOADING_STARTED;
    let isErrored = loadingState === consts.loadingState.LOADING_ERRORED;

    const onFocus = () => {
        if (isEmpty || isErrored) {
            dispatch(updateAction());
        }
    };

    return (
        <Select
            mode={mode}
            allowClear={allowClear}
            notFoundContent={isLoading ? <Spin size="small" /> : null}
            onFocus={onFocus}
            style={{ width: "100%" }}
            onBlur={onBlur}
            onChange={onChange}
            defaultValue={value}
            options={data} />
    );
};