'server-only'

import { i18n, Locale } from '../../i18n-config'

const dictionaries = {
  en: () => import('./locales/en.json').then((module) => module.default),
  ru: () => import('./locales/ru.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale = i18n.defaultLocale) =>
  dictionaries[locale as keyof typeof dictionaries]()