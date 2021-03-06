import { TerminalHistoryEntry, TerminalHistoryActionTypes } from "../store/terminal-history/types"
import { CurrentImageActionTypes } from "../store/current-image/types"
import { Command } from '../store/commands/types'
import { FileState } from "../store/files/types"
import { User } from "../store/current-user/types"

export const processCommand = (
  terminalInput: string,
  currentUser: User | '',
  commands: {[key in Command]: string} | {},
  files: FileState,
  displayImage: (imageFileName: string) => CurrentImageActionTypes,
  addToHistory: (newEntries: TerminalHistoryEntry[]) => TerminalHistoryActionTypes,
  clearHistory: () => TerminalHistoryActionTypes,
  sshToNewUser: (user: User) => void,
  turnOffPowerSourceByUser: (user: User) => void,
) => {
  const inputStrings = terminalInput.split(' ') // rename
  const command = inputStrings[0]
  const args = inputStrings.slice(1)

  const updatedTerminalHistory: TerminalHistoryEntry[] = []
  updatedTerminalHistory.push({ type: 'command', value: terminalInput || '' })

  if (!command) {
    addToHistory(updatedTerminalHistory)
    return
  }

  const appendToTerminalOutput = (output: string | string[]) => {
    if (typeof output === 'string') {
      output = [output]
    }

    const newEntry: TerminalHistoryEntry = {
      type: 'output',
      value: output,
    }
    updatedTerminalHistory.push(newEntry)
  }

  // Performs logic handling when user attempts to ssh to another terminal.
  const handleSsh = (userName: string, enteredPassword: string) => {
    let actualPassword = ''

    // dev note: all this logic has to be done in then() because of non blocking io model
    fetch(`/password?user_name=${userName}`)
      .then(response => response.text())
      .then(response => {
        actualPassword = response
        let message: string = ''

        if (actualPassword) {
          if (enteredPassword === actualPassword) {
            sshToNewUser(userName as User)
            clearHistory()
            addToHistory([{
              type: 'output',
              value: [`Switched to user ${userName}.`],
            }])
            return
          } else {
            message = 'Access denied. Invalid credentials.'
          }
        } else {
          message = `Error: User '${userName}' not found.`
        }
        appendToTerminalOutput(message)
        addToHistory(updatedTerminalHistory)
        return
      })
      .catch((error) => console.error(`Error fetching password for user ${userName}: ${error}`))
  }

  const switchOffPower = () => {
    if (currentUser) {
      turnOffPowerSourceByUser(currentUser)
      appendToTerminalOutput('Power has been switched off.')
    } else {
      appendToTerminalOutput('Not logged in.')
    }
    addToHistory(updatedTerminalHistory)
    return
  }

  // Check if user is trying to run an executable file.
  if (command.startsWith('./')) {
    const executableFile = command.substring(2)
    if (!Object.keys(files).includes(executableFile)) {
      appendToTerminalOutput(`./${executableFile}: No such file or directory`)
      addToHistory(updatedTerminalHistory)
      return
    }
    if (files[executableFile].file_type !== 'executable') {
      appendToTerminalOutput(`./${executableFile}: Permission denied. This is not an executable file.`)
      addToHistory(updatedTerminalHistory)
      return
    }
    if (executableFile === 'power.exe') {
      switchOffPower()
      return
    }
  }

  // Command isn't in the list of available commands for this user.
  if (!Object.keys(commands).includes(command)) {
    appendToTerminalOutput(`${command}: command not found. Use 'help' to list available commands.`)
    addToHistory(updatedTerminalHistory)
    return
  }

  // Main command switch.
  switch (command) {
    case 'ls':
      const fileNames = Object.keys(files)
      if (!fileNames.length) {
        appendToTerminalOutput('No files found.')
      } else {
        const sortedFileNames = fileNames.sort((f1, f2) => f1.localeCompare(f2))
        appendToTerminalOutput(sortedFileNames)
      }
      addToHistory(updatedTerminalHistory)
      return
    case 'cat':
      const fileName = args[0]
      if (!fileName) {
        appendToTerminalOutput('Missing argument to command "cat". Usage: cat <file name>')
        addToHistory(updatedTerminalHistory)
        return
      }
      if (!Object.keys(files).includes(fileName)) {
        appendToTerminalOutput(`cat: ${fileName}: No such file or directory`)
        addToHistory(updatedTerminalHistory)
        return
      }

      if (files[fileName].file_type === 'text') {
        appendToTerminalOutput(files[fileName].content)
      } else if (files[fileName].file_type === 'image') {
        appendToTerminalOutput('Image displayed in separate window.')
        displayImage(fileName)
      } else if (files[fileName].file_type === 'executable') {
        appendToTerminalOutput('Invalid file type. To run executable files, type "./file_name".')
      }
      addToHistory(updatedTerminalHistory)
      return
    case 'map':
      appendToTerminalOutput('Map displayed in separate window.')
      displayImage('map.png')
      addToHistory(updatedTerminalHistory)
      return
    case 'ssh':
      const userName = args[0]
      const enteredPassword = args[1]

      if (!enteredPassword) {
        appendToTerminalOutput('Missing argument to command "ssh". Usage: ssh <user name> <user password>')
        addToHistory(updatedTerminalHistory)
        return
      }
      handleSsh(userName, enteredPassword)
      return
    case 'help':
      Object.entries(commands).forEach(([commandName, description]) => {
        appendToTerminalOutput(`${commandName}: ${description}`)
      })
      addToHistory(updatedTerminalHistory)
      return
    default:
      appendToTerminalOutput(`${command}: command not found. Use 'help' to list available commands.`)
      addToHistory(updatedTerminalHistory)
  }
}
