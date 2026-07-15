export const formatNumber = (
  num: number,
  options?: Intl.NumberFormatOptions,
) => {
  const formatter = new Intl.NumberFormat(navigator.language, options)

  return formatter.format(num)
}
