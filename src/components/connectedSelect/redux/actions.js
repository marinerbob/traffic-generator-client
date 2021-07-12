import { createAction } from '@reduxjs/toolkit';

import { FETCH_DATA_START, FETCH_DATA_FINISH } from './actionTypes';

export const fetchSelectDataStart = selectName => createAction(`${selectName}${FETCH_DATA_START}`);
export const fetchSelectDataFinish = selectName => createAction(`${selectName}${FETCH_DATA_FINISH}`);