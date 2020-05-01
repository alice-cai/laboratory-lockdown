import React, { useState, useEffect, useRef } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { AppState } from '..'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { connect } from 'react-redux'
import { setCurrentUser } from '../store/current-user/actions'
import CommandLineComponent from './command-line.component'
import ImageDisplayComponent from './image-display.component'
import { setCommands } from '../store/commands/actions'
import { Command } from '../store/commands/types'
import { setFiles } from '../store/files/actions'
import { FileState } from '../store/files/types'

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
type MappedState = ReturnType<typeof mapStateToProps>

const Test: React.FC<MappedDispatch & MappedState> = ({ setUser, setCommands, setFiles }) => {
  const classes = useStyles()

  // TODO: refactor to use redux-thunk
  useEffect(() => {
    // fetch('/password?user_name=r_fisher')
    //   .then(response => response.text())
    //   .then(response => {
    //     console.log(`password: ${response}`)
    //   })
    //   .catch(error => console.log('error'))

    fetch('/commands?user_name=r_fisher')
      .then(response => response.text())
      .then(response => {
        console.log(`commands: ${response}`)
        setCommands(JSON.parse(response))
      })
      .catch(error => console.log('error'))

    fetch('/files?user_name=r_fisher')
      .then(response => response.text())
      .then(response => {
        setFiles(JSON.parse(response) as FileState)
        console.log(response)
      })
      .catch(error => console.log('error'))
    setUser('a_cai@corona')
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

const mapStateToProps = ({ terminalHistory }: AppState) => ({
  // terminalHistory,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  setUser: (user: string) => dispatch(setCurrentUser(user)),
  setCommands: (commands: {[key in Command]: string}) => dispatch(setCommands(commands)),
  setFiles: (files: FileState) => dispatch(setFiles(files)),
})

// export default Test
export default connect(mapStateToProps, mapDispatchToProps)(Test)
