import I18n from 'react-native-i18n';

import en from './en';
import cn from './cn';

I18n.missingTranslationPrefix = 'EE: ';
I18n.missingTranslation = () => {
  return 'no';
};
I18n.fallbacks = true;
I18n.defaultLocale = 'cn';
I18n.translations = {
  en,
  cn,
};

export default I18n;
