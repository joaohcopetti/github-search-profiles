import { createI18n, useI18n } from 'vue-i18n'
import enUS from '@/locales/en-US.json'
import ptBR from '@/locales/pt-BR.json'

export type MessageSchema = typeof ptBR

export const i18n = createI18n<[MessageSchema], 'en-US' | 'pt-BR'>({
  legacy: false,
  locale: 'en-US',
  messages: {
    'en-US': enUS,
    'pt-BR': ptBR,
  },
})

export function useTypedI18n() {
  return useI18n<{ message: MessageSchema }>()
}
