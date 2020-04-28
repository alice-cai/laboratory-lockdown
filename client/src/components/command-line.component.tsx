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

const CommandLineComponent: React.FC<MappedDispatch & MappedState & Props> = ({ test = '', currentUser, terminalHistory, addToHistory, clearHistory, callback }) => {
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
      const command = inputValue.split(' ')[0]
      const temp: TerminalHistoryEntry[] = []
      if (command === 'cat') { // testing file format
        temp.push({ type: 'command', value: inputValue || '' })
        temp.push({ type: 'output', value: files['announcement.txt'] })
        // setHistory(history.concat(temp))
        addToHistory(temp)
        setInputValue('')
        return
      } else if (command === 'image') {
        callback()
      }
      temp.push({ type: 'command', value: inputValue || '' })
      if (command) {
        temp.push({ type: 'output', value: [`${command}: command not found. Use 'help' to list available commands.`] })
      }
      // setHistory(history.concat(temp))
      addToHistory(temp)
      setInputValue('')
    }
  }

  const scrollToBottom = () => {
    if (terminalRootRef.current) {
      console.log('scrolling with ref')
      terminalRootRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }
  useEffect(scrollToBottom, [terminalHistory])

  return (
    <div
      className={classes.root}
      // ref={terminalRootRef}
    >
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

const mapStateToProps = ({ terminalHistory, currentUser }: AppState) => ({
  terminalHistory,
  currentUser,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  addToHistory: (newEntries: TerminalHistoryEntry[]) => dispatch(addTerminalHistoryEntries(newEntries)),
  clearHistory: () => dispatch(clearTerminalHistory()),
})

// export default Test
export default connect(mapStateToProps, mapDispatchToProps)(CommandLineComponent)
