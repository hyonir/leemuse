import { DEFAULT_SETTINGS } from '../configs/configs';
import { DIMENSION, MENU_BEHAVIOUR, MENU_PLACEMENT } from '../configs/constants';

export const languages = [
    { code: 'KO', locale: 'ko-KR', direction: 'ltr' },
    { code: 'EN', locale: 'en-US', direction: 'ltr' },
    { code: 'ES', locale: 'es-ES', direction: 'ltr' },
    { code: 'DE', locale: 'de-DE', direction: 'ltr' },
];
const navigatorLang = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.language;
const findOrDefault = (key: string) => {
    return languages.find((x) => x.locale === key || x.code === key) || languages[0];
};

class SettingStore {
    color = DEFAULT_SETTINGS.COLOR;
    layout = DEFAULT_SETTINGS.LAYOUT;
    radius = DEFAULT_SETTINGS.RADIUS;
    navColor = DEFAULT_SETTINGS.NAV_COLOR;
    placementHtmlData = MENU_PLACEMENT.Vertical;
    dimensionHtmlData = DIMENSION.Desktop;
    behaviourHtmlData = MENU_BEHAVIOUR.Pinned;
    currentLang = findOrDefault(navigatorLang);
}

const settingStore = new SettingStore()

export { settingStore }