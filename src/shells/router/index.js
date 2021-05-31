import React from 'react';

import { history } from 'reduxConfig/store.js';
import { ConnectedRouter } from 'connected-react-router';

export default ({ children }) => (
    <ConnectedRouter history={history}>
        {children}
    </ConnectedRouter>
);