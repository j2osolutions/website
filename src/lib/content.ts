import es from '../i18n/es.json';
import en from '../i18n/en.json';

export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];
export type SiteContent = typeof es;

const contentByLocale: Record<Locale, SiteContent> = {
  es,
  en,
};

export function getContent(locale: Locale): SiteContent {
  return contentByLocale[locale];
}
