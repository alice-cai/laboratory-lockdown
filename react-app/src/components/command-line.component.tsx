import React, { useState, useEffect, useRef } from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import CommandPrompt from './command-prompt.component'
import { processCommand } from '../utils/commands'
import { TerminalHistoryEntry } from '../store/terminal-history/types.js'
import { AppState } from '..'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { connect } from 'react-redux'
import { addTerminalHistoryEntries, clearTerminalHistory } from '../store/terminal-history/actions'
import { setCurrentImage } from '../store/current-image/actions'
import { Stack } from 'immutable'
import { getAutocompleteFileName } from '../utils/autocomplete'
import { switchUser } from '../store/current-user/actions'

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
  commandPrompt: {
    marginRight: spacing(1),
    color: '#1ec700',
  },
  terminalInput: {
    color: '#1ec700',
  },
}))

type MappedDispatch = ReturnType<typeof mapDispatchToProps>
type MappedState = ReturnType<typeof mapStateToProps>

const CommandLineComponent: React.FC<MappedDispatch & MappedState> = ({
  // TODO: reorganize params
  currentUser,
  terminalHistory,
  addToHistory,
  clearHistory,
  displayImage,
  commands,
  files,
  sshToNewUser,
}) => {
  const classes = useStyles()
  const [commandHistory, setCommandHistory] = useState<Stack<string>>(Stack())
  const [commandHistoryIndex, setCommandHistoryIndex] = useState<number>(-1) // index of the command history item being autofilled
  const [inputValue, setInputValue] = useState<string>('')
  const terminalRootRef = useRef<HTMLDivElement>(null)

  const onTerminalInputKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setCommandHistory(commandHistory.push(inputValue))
      setCommandHistoryIndex(-1)

      if (inputValue === 'clear') {
        setCommandHistory(Stack())
        setCommandHistoryIndex(-1)
        clearHistory()
      } else {
        processCommand(inputValue, commands, files, displayImage, addToHistory, clearHistory, sshToNewUser)
      }
      setInputValue('')
    } else if (event.key === 'ArrowUp') {
      if (commandHistoryIndex === commandHistory.size - 1) {
        return
      }
      setCommandHistoryIndex(commandHistoryIndex + 1)
      setInputValue(commandHistory.get(commandHistoryIndex + 1) || '')
    } else if (event.key === 'ArrowDown') {
      if (commandHistoryIndex === -1) {
        return
      } else if (commandHistoryIndex === 0) {
        setInputValue('')
        return
      }
      setCommandHistoryIndex(commandHistoryIndex - 1)
      setInputValue(commandHistory.get(commandHistoryIndex - 1) || '')
    } else if (event.key === 'Tab') {
      event.preventDefault()
      debugger;
      const autocompletedCommand = getAutocompleteFileName(files, inputValue)
      if (autocompletedCommand) {
        setInputValue(autocompletedCommand)
      }
    } else {
      setCommandHistoryIndex(-1)
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
            {entry.type === 'command' && (
              <>
                <Typography align='left' className={classes.commandPrompt} noWrap>{`${currentUser} $`}</Typography>
                <Typography align='left'>{entry.value}</Typography>
              </>
            )}
            {entry.type === 'output' && (
              <Box display='flex' justifyContent='flex-start' alignItems='flex-start' flexDirection='column'>
                {entry.value.map((line: string) => {
                  return line === "\n" ? <br /> : <Typography align='left'>{line}</Typography>
                })}
              </Box>
            )}
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

const mapStateToProps = ({ terminalHistory, currentUser, commands, files }: AppState) => ({
  terminalHistory,
  currentUser,
  commands,
  files,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  addToHistory: (newEntries: TerminalHistoryEntry[]) => dispatch(addTerminalHistoryEntries(newEntries)),
  clearHistory: () => dispatch(clearTerminalHistory()),
  displayImage: (imageFileName: string) => dispatch(setCurrentImage(imageFileName)),
  sshToNewUser: (user: string) => dispatch(switchUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommandLineComponent)
