import { createReducer } from '@reduxjs/toolkit';

import { TOGGLE_MODAL } from './actionTypes';

import { toggleProp } from 'utils/reduxUtils';

const defaultState = {
    modalsVisibility: {}
};

export default createReducer(defaultState, builder => {
    builder.addCase(TOGGLE_MODAL, (state, action) => {
        const { modalId } = action.payload;
        const { modalsVisibility } = state;

        state.modalsVisibility = toggleProp(modalsVisibility, modalId);
    })
});