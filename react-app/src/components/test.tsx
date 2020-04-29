import React, { useState, useEffect, useRef } from 'react'
import { Box, makeStyles, Typography, Icon, Dialog, DialogTitle, DialogContent } from '@material-ui/core'
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
import { setCurrentUser } from '../store/current-user/actions'
import CommandLineComponent from './command-line.component'
import DraggablePaperComponent from './draggable-paper.component'
import Draggable from 'react-draggable'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    textAlign: 'left',
    padding: spacing(4),
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
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

interface Props {
  test?: string
}

const Test: React.FC<MappedDispatch & MappedState & Props> = ({ test = '', setUser, terminalHistory, addToHistory, clearHistory }) => {
  const classes = useStyles()
  const commandPrompt = 'alice@test $'
  // const [history, setHistory] = useState<List<TerminalHistoryEntry>>(List())
  const [inputValue, setInputValue] = useState<string>('')
  const [commands, setCommands] = useState<string[]>([])
  const [files, setFiles] = useState<{ [key in string]: string[] }>({})
  const terminalRootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('/commands')
      .then(response => {
        // setFiles(response.formData)
        console.log(response.json())
      })
      .catch(error => console.log('error'))

    fetch('/files')
      .then(response => response.text())
      .then(response => {
        setFiles(JSON.parse(response))
        console.log(response)
      })
      .catch(error => console.log('error'))
    setUser('alice@test')
  }, [])

  console.log('does this work omdfgggggg??????@@@@!!!?????$$$$$$$')

  const [openImage, setOpenImage] = useState(false)

  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <div className={classes.terminal}>
        <CommandLineComponent callback={() => setOpenImage(true)} />
      </div>
      <DraggableDialog open={openImage} onClose={() => setOpenImage(false)}>
        {/* TODO: replace with an image and connect to redux lmao */}
        <img src='/favicon.ico' />
      </DraggableDialog>
      {/* <Dialog
        open={openImage}
        onClose={() => setOpenImage(false)}
        PaperComponent={DraggablePaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          <Typography variant='body1' align='center' >image</Typography>
        </DialogTitle>
        <DialogContent><div style={{ height: '10em', width: '10em', backgroundColor: 'pink' }}></div></DialogContent>
      </Dialog> */}
    </Box>
  )
}

const mapStateToProps = ({ terminalHistory }: AppState) => ({
  terminalHistory,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  addToHistory: (newEntries: TerminalHistoryEntry[]) => dispatch(addTerminalHistoryEntries(newEntries)),
  clearHistory: () => dispatch(clearTerminalHistory()),
  setUser: (user: string) => dispatch(setCurrentUser(user))
})

// export default Test
export default connect(mapStateToProps, mapDispatchToProps)(Test)
