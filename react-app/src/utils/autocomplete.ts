import { FileState } from "../store/files/types";

const findCommonPrefix = (strings: string[]) => {
  strings.sort((s1, s2) => s1.length - s2.length)
  let prefix = strings[0]

  strings.slice(1).forEach((string) => {
    while (!string.startsWith(prefix)) {
      prefix = prefix.substring(0, prefix.length - 1)
    }
  })
  return prefix
}

export const getAutocompleteFileName = (files: FileState, currentTerminalInput: string): string => {
  const inputStrings = currentTerminalInput.split(' ')
  const lastInput = inputStrings.slice(-1).pop()
  
  if (lastInput) {
    const autocompleteMatches: string[] = []
    Object.keys(files).forEach((fileName) => fileName.startsWith(lastInput) ? autocompleteMatches.push(fileName) : null)

    let autocompletedFileName = ''
    if (autocompleteMatches.length > 1) {
      autocompletedFileName = findCommonPrefix(autocompleteMatches)
    } else if (autocompleteMatches.length === 1) {
      autocompletedFileName = autocompleteMatches[0]
    }

    if (autocompletedFileName) {
      const commandWithoutLastWord = inputStrings.slice(0, inputStrings.length - 1)
      commandWithoutLastWord.push(autocompletedFileName)
      return commandWithoutLastWord.join(' ')
    }
  }
  return ''
}
