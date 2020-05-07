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
import { useAudio } from './audio-player'
import { USERS, User } from '../store/current-user/types'
import { turnOffPowerSourceByUser } from '../store/power-source/actions'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    textAlign: 'left',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '7px',
    height: '45rem',
    width: '60rem',
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
  marginBottom: {
    marginBottom: spacing(0.2),
  },
}))

type MappedDispatch = ReturnType<typeof mapDispatchToProps>
type MappedState = ReturnType<typeof mapStateToProps>

const CommandLineComponent: React.FC<MappedDispatch & MappedState> = ({
  currentUser,
  terminalHistory,
  commands,
  files,
  addToHistory,
  clearHistory,
  displayImage,
  sshToNewUser,
  turnOffPowerSourceByUser,
}) => {
  const classes = useStyles()
  const [commandHistory, setCommandHistory] = useState<Stack<string>>(Stack())
  const [commandHistoryIndex, setCommandHistoryIndex] = useState<number>(-1) // index of the command history item being autofilled
  const [inputValue, setInputValue] = useState<string>('')
  const terminalRootRef = useRef<HTMLDivElement>(null)

  // I hate this but I can't fuckin figure out how else to do this. I can't call hooks anywhere other than directly
  // in a React component so I can't put it in a callback or useEffect
  const playClickSound = useAudio('/audio?file_name=click.mp3')
  const playAccessGrantedSound = useAudio('/audio?file_name=access_granted.m4a')
  const playRyanFisherWelcome = useAudio('/audio?file_name=r_fisher.mp3')
  const playJennaForrestWelcome = useAudio('/audio?file_name=j_forrest.mp3')
  const playVincentChapmanWelcome = useAudio('/audio?file_name=v_chapman.mp3')
  const playNaomiReyesWelcome = useAudio('/audio?file_name=n_reyes.mp3')
  const playDianaHarrisWelcome = useAudio('/audio?file_name=d_harris.mp3')
  const playEricFreedmanWelcome = useAudio('/audio?file_name=e_freedman.mp3')
  const playRoselynBarreraWelcome = useAudio('/audio?file_name=r_barrera.mp3')
  const playYulianaHinesWelcome = useAudio('/audio?file_name=y_hines.mp3')
  const playAudreyEmersonWelcome = useAudio('/audio?file_name=a_emerson.mp3')

  useEffect(() => {
    if (!currentUser || !USERS.includes(currentUser)) {
      return
    }
    playAccessGrantedSound()
    const soundMap: { [key in User]: () => void } = {
      r_fisher: playRyanFisherWelcome,
      j_forrest: playJennaForrestWelcome,
      v_chapman: playVincentChapmanWelcome,
      n_reyes: playNaomiReyesWelcome,
      d_harris: playDianaHarrisWelcome,
      e_freedman: playEricFreedmanWelcome,
      r_barrera: playRoselynBarreraWelcome,
      y_hines: playYulianaHinesWelcome,
      a_emerson: playAudreyEmersonWelcome,
    }
    setTimeout(() => soundMap[currentUser](), 500)
  }, [currentUser])

  const onTerminalInputKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      playClickSound()
      
      setCommandHistory(commandHistory.push(inputValue))
      setCommandHistoryIndex(-1)

      if (inputValue === 'clear') {
        setCommandHistory(Stack())
        setCommandHistoryIndex(-1)
        clearHistory()
      } else {
        processCommand(inputValue, currentUser, commands, files, displayImage, addToHistory, clearHistory, sshToNewUser, turnOffPowerSourceByUser)
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
      playClickSound()
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
              <Box display='flex' justifyContent='flex-start' alignItems='flex-start' flexDirection='row' className={classes.marginBottom}>
                <Typography align='left' className={classes.commandPrompt} noWrap>{`${currentUser} $`}</Typography>
                <Typography align='left'>{entry.value}</Typography>
              </Box>
            )}
            {entry.type === 'output' && (
              <Box display='flex' justifyContent='flex-start' alignItems='flex-start' flexDirection='column' className={classes.marginBottom}>
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
  sshToNewUser: (user: User) => dispatch(switchUser(user)),
  turnOffPowerSourceByUser: (user: User) => dispatch(turnOffPowerSourceByUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommandLineComponent)
