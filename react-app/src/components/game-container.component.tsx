import React, { useState, useEffect } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { connect } from 'react-redux'
import CommandLineComponent from './command-line.component'
import ImageDisplayComponent from './image-display.component'
import { initDefaultCommands } from '../store/commands/actions'
import GameIntroComponent from './game-intro.component'
import GameEndComponent from './game-end.component'
import { TerminalHistoryEntry } from '../store/terminal-history/types'
import { addTerminalHistoryEntries } from '../store/terminal-history/actions'
import { AppState } from '..'
import { useAudio } from './audio-player'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    backgroundColor: '#01220f',
    padding: spacing(4),
    minHeight: '100vh',
  },
}))

type MappedState = ReturnType<typeof mapStateToProps>
type MappedDispatch = ReturnType<typeof mapDispatchToProps>

const GameContainer: React.FC<MappedState & MappedDispatch> = ({ powerSourcesOff, initDefaultCommands, addToHistory }) => {
  const classes = useStyles()
  const [displayGame, setDisplayGame] = useState(false)
  const playClickSound = useAudio('/audio?file_name=click.mp3')
  const playAccessGrantedSound = useAudio('/audio?file_name=mission_complete.m4a')

  useEffect(() => {
    if (powerSourcesOff) {
      playAccessGrantedSound()
      setDisplayGame(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [powerSourcesOff])

  useEffect(() => {
    initDefaultCommands()
    addToHistory([{ type: 'output', value: ['Type "ssh r_fisher sterilize" to proceed.'] }])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const displayTerminal = () => {
    playClickSound()
    setDisplayGame(true)
  }

  let GameComponent = <GameIntroComponent onButtonClick={displayTerminal} />
  if (displayGame) {
    GameComponent = <CommandLineComponent />
  } else if (powerSourcesOff) {
    GameComponent = <GameEndComponent onButtonClick={displayTerminal} />
  }

  return (
    <Box display='flex' justifyContent='center' alignItems='center' className={classes.root}>
      <div>
        { GameComponent }
      </div>
      <ImageDisplayComponent />
    </Box>
  )
}

const mapStateToProps = ({ powerSource }: AppState) => ({
  powerSourcesOff: !powerSource.powerSource1On && !powerSource.powerSource2On,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  initDefaultCommands: () => dispatch(initDefaultCommands()),
  addToHistory: (newEntries: TerminalHistoryEntry[]) => dispatch(addTerminalHistoryEntries(newEntries)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
