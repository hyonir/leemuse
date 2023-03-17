import {
    LAYOUT,
    MENU_BEHAVIOUR,
    NAV_COLOR,
    MENU_PLACEMENT,
    RADIUS,
    THEME_COLOR
} from './constants';
import { DefaultSetting, Props } from '../ts/interfaces';

export const API_NO_AUTH_URL = 'https://accounts.spotify.com';
export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
export const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export const PROPS: Props = {
    title: 'LeeMuse'
};

export const DEFAULT_PATHS = {
    APP: '/',
    AUTH: '/auth'
};

export const DEFAULT_SETTINGS: DefaultSetting = {
    MENU_PLACEMENT: MENU_PLACEMENT.Vertical,
    MENU_BEHAVIOUR: MENU_BEHAVIOUR.Pinned,
    LAYOUT: LAYOUT.Boxed,
    RADIUS: RADIUS.Rounded,
    COLOR: THEME_COLOR.LightBlue,
    NAV_COLOR: NAV_COLOR.Dark,
    USE_SIDEBAR: false,
};