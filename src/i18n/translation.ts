import i18n from '@/i18n'

const supportedLocales = (locale: string) => ['en', 'uk'].includes(locale)

export const getBaseLocale = () =>
  localStorage.getItem('user-locale') || i18n.global.locale.value

export const changeLocale = (code: string) => {
  i18n.global.locale.value = code
  document.documentElement.setAttribute('lang', code)
  localStorage.setItem('user-locale', code)
}

export const routeMiddleware = (to: any, _from: any, next: any) => {
  const paramLocale: string = to.params.locale

  if (!supportedLocales(paramLocale)) {
    return next(getBaseLocale())
  }

  changeLocale(paramLocale)

  return next()
}
