import { createAction } from "@reduxjs/toolkit";

import { TOGGLE_MODAL } from "./actionTypes";

export const toggleModalVisibility = createAction(TOGGLE_MODAL);