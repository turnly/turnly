import { useTranslation as useI18n } from 'react-i18next'

import { i18n } from './setup'

export const changeLanguage = (lang: string) => i18n.changeLanguage(lang)

export const changeMessage = (params: {
  lang: string
  key: string
  value: string
}) => {
  return i18n.addResource(params.lang, 'translation', params.key, params.value)
}

export const useTranslation = () => {
  const { t: translate } = useI18n()

  return {
    translate,
    changeLanguage,
    changeMessage,
  }
}
