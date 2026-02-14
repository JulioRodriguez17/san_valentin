export type Translation = {
  label: string
  lang: string
}

export const PRIMARY_BASE_TEXT = 'Si, si quiero'

export const PRIMARY_TRANSLATIONS: Translation[] = [
  { label: 'Sim, eu quero', lang: 'pt' },
  { label: 'Ja, ich will', lang: 'de' },
  { label: 'Yes, I do', lang: 'en' },
  { label: 'Si, lo voglio', lang: 'it' },
  { label: 'Ita, volo', lang: 'la' },
  { label: '是的, 我愿意', lang: 'zh' },
  { label: 'Да, я хочу', lang: 'ru' },
  { label: '네, 원해요', lang: 'ko' },
  { label: 'Si, si quiero', lang: 'es' },
]

export const HEART_COUNT = 42
export const REPEL_RADIUS = 1800
export const MAX_OFFSET = 26
