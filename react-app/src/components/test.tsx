import React, { useState, useEffect } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { connect } from 'react-redux'
import CommandLineComponent from './command-line.component'
import ImageDisplayComponent from './image-display.component'
import { setCommands } from '../store/commands/actions'
import { Command } from '../store/commands/types'

const useStyles = makeStyles(({ spacing }) => ({
  terminal: {
    padding: 0,
    borderRadius: '5px',
    '& .MuiDialogContent-root': {
      padding: 0,
    },
  },
}))

type MappedDispatch = ReturnType<typeof mapDispatchToProps>

const Test: React.FC<MappedDispatch> = ({ setCommands2 }) => {
  const classes = useStyles()

  useEffect(() => {
    // TODO: move this logic somewhere else
    fetch('/commands?user_name=no_user')
      .then(response => response.text())
      .then(response => {
        console.log(response)
        setCommands2(JSON.parse(response))
      })
      .catch((error) => console.error(`error fetching default commands: ${error}`))
  }, [])

  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <div className={classes.terminal}>
        <CommandLineComponent />
      </div>
      <ImageDisplayComponent />
    </Box>
  )
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  setCommands2: (commands: {[key in Command]: string}) => dispatch(setCommands(commands)),
})

export default connect(null, mapDispatchToProps)(Test)
