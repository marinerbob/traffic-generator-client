import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import createRootReducer from './reducers';

export const history = createBrowserHistory();

export default configureStore({
  reducer: createRootReducer(history)
});
