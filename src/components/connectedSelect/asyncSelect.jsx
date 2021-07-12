import React from 'react';
import { Select, Spin } from 'antd';

import { useSelector, useDispatch } from 'react-redux';

import consts from 'utils/commonConsts';

export default ({ selector, updateAction, selectProps, selectRef }) => {
    const dispatch = useDispatch();
    const { data, loadingState } = useSelector(selector);

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
            ref={selectRef}
            notFoundContent={isLoading ? <Spin size="small" /> : null}
            onFocus={onFocus}
            options={data}
            {...selectProps} />
    );
};