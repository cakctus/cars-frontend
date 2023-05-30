export const emailReplace = (str: string): string => {
  if (str.length < 5) {
    return str // If string length is less than 5, no replacement needed
  }

  const replacedChars = str.substring(0, 2) + "*".repeat(3) + str.substring(5)
  return replacedChars
}
