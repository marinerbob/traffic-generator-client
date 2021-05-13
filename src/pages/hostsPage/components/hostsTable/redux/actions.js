import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_DATA_START, FETCH_DATA_FINISH } from './actionTypes';

import fakeAPI from 'src/fakeAPI/fakeAPI.js';

const __fetchDataFinished = createAction(FETCH_DATA_FINISH);

export const fetchHosts = createAsyncThunk(
    FETCH_DATA_START,
    async ({}, thunkAPI) => {
        const response = await fakeAPI().getHosts();
        thunkAPI.dispatch(__fetchDataFinished());
        return response;
    }
);

