import React from "react";
import store from "reduxConfig/store.js";
import { Provider } from "react-redux";

export default ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};