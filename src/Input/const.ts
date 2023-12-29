import { join, split } from "lodash-es"

export const convertThousandSeparator = (number: any) => {
  if (!number && number !== 0) return number
  let str = split(number, ".")
  str[0] = str[0]
    .toString()
    .replace(/[^0-9]/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  if (String(number).indexOf(".") > -1) {
    return join(str, ".")
  } else {
    return str[0]
  }
}

export const makePhoneNumber = (value: string) => {
  if (!value) return value
  const currentValue = value.replace(/[^\d]/g, "")
  const cvLength = currentValue.length

  if (cvLength < 4) return currentValue
  if (cvLength < 7)
    return `${currentValue.slice(0, 3)}-${currentValue.slice(3)}`
  if (cvLength < 10)
    return `${currentValue.slice(0, 2)}-${currentValue.slice(
      2,
      5
    )}-${currentValue.slice(5, 9)}`
  if (cvLength < 11)
    return `${currentValue.slice(0, 3)}-${currentValue.slice(
      3,
      6
    )}-${currentValue.slice(6, 10)}`
  return `${currentValue.slice(0, 3)}-${currentValue.slice(
    3,
    7
  )}-${currentValue.slice(7, 11)}`
}

export const makeBusinessNumber = (value: string) => {
  if (!value) return value
  const currentValue = value.replace(/[^\d]/g, "")
  const cvLength = currentValue.length

  if (cvLength < 4) {
    return currentValue
  } else if (cvLength < 7) {
    return `${currentValue.slice(0, 3)}-${currentValue.slice(3)}`
  } else {
    return `${currentValue.slice(0, 3)}-${currentValue.slice(
      3,
      5
    )}-${currentValue.slice(5, 10)}`
  }
}
