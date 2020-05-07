import React, { useState, useEffect } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { connect } from 'react-redux'
import CommandLineComponent from './command-line.component'
import ImageDisplayComponent from './image-display.component'
import { initDefaultCommands } from '../store/commands/actions'
import GameIntroComponent from './game-intro.component'
import { TerminalHistoryEntry } from '../store/terminal-history/types'
import { addTerminalHistoryEntries } from '../store/terminal-history/actions'
import { AppState } from '..'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    backgroundColor: '#01220f',
    padding: spacing(8),
  },
}))

type MappedState = ReturnType<typeof mapStateToProps>
type MappedDispatch = ReturnType<typeof mapDispatchToProps>

const Test: React.FC<MappedState & MappedDispatch> = ({ powerSourcesOff, initDefaultCommands, addToHistory }) => {
  const classes = useStyles()
  const [startGame, setStartGame] = useState(false)

  useEffect(() => {
    initDefaultCommands()
    addToHistory([{ type: 'output', value: ['Type "ssh r_fisher giraffes123" to proceed.'] }])
  }, [])

  let GameComponent = <GameIntroComponent onButtonClick={() => setStartGame(true)} />
  if (startGame) {
    GameComponent = <CommandLineComponent />
  }
  if (powerSourcesOff) {
    GameComponent = (<div>end</div>)
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

export default connect(mapStateToProps, mapDispatchToProps)(Test)
