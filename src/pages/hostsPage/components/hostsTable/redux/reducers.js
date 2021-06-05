import { FETCH_DATA_START, FETCH_DATA_FINISH } from './actionTypes';
import consts from './constants';

const defaultState = {
    loadingState: consts.loadingState.LOADING_STARTED,
    data: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_DATA_START: {
                return {
                    ...state,
                    loadingState: consts.loadingState.LOADING_STARTED
                };
        }
        case FETCH_DATA_FINISH : {
            return {
                ...state,
                data: action.payload.data,
                loadingState: action.payload.loadingState
            };
        }
        default:
            return state;
    }
};
