import LocalizedStrings from 'react-native-localization';
import * as ScreenConstantsEN from './screens-view-en.json';
import * as ScreenConstantsHN from './screens-view-hi.json';

const ScreenConstants = new LocalizedStrings({
  en: ScreenConstantsEN,
  hi: ScreenConstantsHN,
});

export default ScreenConstants;
