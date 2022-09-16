import 'react-i18next'

import { resources } from '../../localization/resources'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof resources['en']
  }
}
