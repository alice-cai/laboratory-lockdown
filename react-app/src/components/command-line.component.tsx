import React, { useState, useEffect, useRef } from 'react'
import { Box, makeStyles, Typography, Icon } from '@material-ui/core'
import { List } from 'immutable'
import CommandPrompt from './command-prompt.component'
import { processCommand } from '../utils/commands'
import DraggableDialog from './draggable.component'
import { TerminalHistoryEntry } from '../store/terminal-history/types.js'
import { AppState } from '..'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { connect } from 'react-redux'
import { addTerminalHistoryEntries, clearTerminalHistory } from '../store/terminal-history/actions'
import { setCurrentImage } from '../store/current-image/actions'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    textAlign: 'left',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '5px',
    height: '55em',
    width: '70em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    overflowY: 'scroll',
  },
  terminal: {
    padding: spacing(4),
  },
  margin: {
    margin: spacing(1),
  },
  label: { // command prompt
    marginRight: spacing(1),
    color: '#1ec700',
  },
  terminalInput: {
    color: '#1ec700',
  },
}))

type MappedDispatch = ReturnType<typeof mapDispatchToProps>
type MappedState = ReturnType<typeof mapStateToProps>

interface Props {
  test?: string
  callback?: any
}

const CommandLineComponent: React.FC<MappedDispatch & MappedState & Props> = ({
  test = '',
  currentUser,
  terminalHistory,
  addToHistory,
  clearHistory,
  displayMap,
  commands,
  commandList,
  callback,
}) => {
  const classes = useStyles()
  // const [history, setHistory] = useState<List<TerminalHistoryEntry>>(List())
  const [inputValue, setInputValue] = useState<string>('')
  // const [commands, setCommands] = useState<string[]>([])
  const [files, setFiles] = useState<{ [key in string]: string[] }>({})
  const terminalRootRef = useRef<HTMLDivElement>(null)

  // TODO: clean up this fucking logic
  const onTerminalInputKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (inputValue === 'clear') {
        // setHistory(List())
        clearHistory()
        setInputValue('')
        return
      }
      const input = inputValue.split(' ') // rename
      const command = input[0]
      const temp: TerminalHistoryEntry[] = []

      if (!commandList.includes(command)) {
        temp.push({ type: 'command', value: inputValue || '' })
        temp.push({ type: 'output', value: [`${command}: command not found. Use 'help' to list available commands.`] })
        addToHistory(temp)
        setInputValue('')
        return
      }

      // TODO: move this to a util file?? possibly???
      temp.push({ type: 'command', value: inputValue || '' })
      if (command === 'cat') { // testing file format
        // temp.push({ type: 'output', value: files['announcement.txt'] })
        temp.push({ type: 'output', value: ['No files available.'] })
        // setHistory(history.concat(temp))
        addToHistory(temp)
        setInputValue('')
        return
      } else if (command === 'map') {
        temp.push({ type: 'output', value: ['Map displayed in separate window.'] })
        displayMap()
        addToHistory(temp)
        setInputValue('')
      } else if (command === 'ssh') {
        const user = input[1]
        const enteredPassword = input[2]

        if (!enteredPassword) {
          temp.push({ type: 'output', value: ['Usage: ssh <user name> <user password>'] })
          addToHistory(temp)
          setInputValue('')
          return
        }

        let actualPassword = ''

        // had to paste all of this in the 'then' thing because non blocking io model
        fetch(`/password?user_name=${user}`)
          .then(response => response.text())
          .then(response => {
            actualPassword = response
            if (actualPassword) {
              if (enteredPassword === actualPassword) {
                temp.push({ type: 'output', value: ['hell yea'] })
              } else {
                temp.push({ type: 'output', value: ['Incorrect password.'] })
              }
            } else {
              temp.push({ type: 'output', value: ['User doesn\'t exist.'] })
            }
            addToHistory(temp)
            setInputValue('')
            return
          })
          .catch(error => console.log('error fetching password'))
      } else if (command === 'help') {
        Object.entries(commands).forEach(([commandName, description]) => {
          temp.push({ type: 'output', value: [`${commandName}: ${description}`] })
        })
        addToHistory(temp)
        setInputValue('')
      } else {
        if (command) {
          temp.push({ type: 'output', value: [`${command}: command not found. Use 'help' to list available commands.`] })
        }
        addToHistory(temp)
        setInputValue('')
      }
    }
  }

  const scrollToBottom = () => {
    if (terminalRootRef.current) {
      terminalRootRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }
  useEffect(scrollToBottom, [terminalHistory])

  return (
    <div className={classes.root}>
      <div className={classes.terminal} ref={terminalRootRef}>
        {terminalHistory.map((entry) => (
          <Box
            display='flex'
            justifyContent='flex-start'
            alignItems='center'
            flexDirection='row'
            flexWrap='nowrap'
          >
            {entry.type === 'command' && (<>
              <Typography align='left' className={classes.label} noWrap>{`${currentUser} $`}</Typography>
              <Typography align='left'>{entry.value}</Typography></>)}
            {entry.type === 'output' && (<Box display='flex' justifyContent='flex-start' alignItems='flex-start' flexDirection='column'>
              {entry.value.map((line: string) => {
                return line === "\n" ? <br /> : <Typography align='left'>{line}</Typography>
              })}
            </Box>)}
          </Box>
        ))}

        <CommandPrompt
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value)
          }}
          onKeyDown={onTerminalInputKeyDown}
          className={classes.terminalInput}
        />
      </div>
    </div>
  )
}

const mapStateToProps = ({ terminalHistory, currentUser, commands }: AppState) => ({
  terminalHistory,
  currentUser,
  commands,
  commandList: Object.keys(commands),
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  addToHistory: (newEntries: TerminalHistoryEntry[]) => dispatch(addTerminalHistoryEntries(newEntries)),
  clearHistory: () => dispatch(clearTerminalHistory()),
  displayMap: () => dispatch(setCurrentImage('map')),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommandLineComponent)
