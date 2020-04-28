export const processCommand = (command: string, files: {[key in string]: string}): boolean => {
  switch (command) {
    case 'help':
      return true
    case 'ssh':
      return true
    case 'ls':
      return true
    case 'cat':
      return true // have a file interface
    default:
      return false
  }
}