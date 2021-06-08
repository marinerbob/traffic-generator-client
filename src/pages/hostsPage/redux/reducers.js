import { combineReducers } from 'redux';

import hostsTable from 'pages/hostsPage/components/hostsTable/redux/reducers';
import createHostModal from 'pages/hostsPage/components/createHostModal/redux/reducers';

export default combineReducers({
    hostsTable,
    createHostModal
});