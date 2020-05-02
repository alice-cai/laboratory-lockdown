import React, { useState, useEffect } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { connect } from 'react-redux'
import CommandLineComponent from './command-line.component'
import ImageDisplayComponent from './image-display.component'
import { setCommands } from '../store/commands/actions'
import { Command } from '../store/commands/types'
import GameIntroComponent from './game-intro.component'
import { TerminalHistoryEntry } from '../store/terminal-history/types'
import { addTerminalHistoryEntries } from '../store/terminal-history/actions'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    backgroundColor: '#01220f',
    padding: spacing(8),
  },
}))

type MappedDispatch = ReturnType<typeof mapDispatchToProps>

const Test: React.FC<MappedDispatch> = ({ setCommands, addToHistory }) => {
  const classes = useStyles()
  const [startGame, setStartGame] = useState(false)

  useEffect(() => {

    fetch('/commands?user_name=no_user')
      .then(response => response.text())
      .then(response => {
        console.log(response)
        setCommands(JSON.parse(response))
      })
      .catch((error) => console.error(`error fetching default commands: ${error}`))
    addToHistory([{
      type: 'output',
      value: ['Type "ssh r_fisher giraffes123" to proceed.']
    }])
  }, [])

  return (
    <Box display='flex' justifyContent='center' alignItems='center' className={classes.root}>
      <div>
        {startGame ? <CommandLineComponent /> : <GameIntroComponent onButtonClick={() => setStartGame(true)} />}
      </div>
      <ImageDisplayComponent />
    </Box>
  )
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  setCommands: (commands: {[key in Command]: string}) => dispatch(setCommands(commands)),
  addToHistory: (newEntries: TerminalHistoryEntry[]) => dispatch(addTerminalHistoryEntries(newEntries)),
})

export default connect(null, mapDispatchToProps)(Test)
