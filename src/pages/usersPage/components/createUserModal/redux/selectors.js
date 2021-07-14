import { createSelector } from "reselect";

import { getModalVisibility } from 'reduxConfig/selectors';

import { getUsersPage } from 'pages/usersPage/redux/selectors';
import { getSelectData, getSelectLoadingState } from 'components/connectedSelect/redux/selectors';

import consts from './constants';