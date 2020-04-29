import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Paper from '@material-ui/core/Paper'
import Draggable from 'react-draggable'
import classnames from 'classnames'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(({ spacing }) => ({
  dialog: {
    padding: 0,
    borderRadius: '5px',
    '& .MuiDialogContent-root': {
      padding: 0,
    },
  },
  dialogTitle: {
    padding: spacing(0.5),
    backgroundColor: '#E8E8E8',
  },
  margin: {
    margin: spacing(1),
  },
  label: {
    marginRight: spacing(1),
  },
  smallText: {
    fontSize: '12px',
  }
}))

function DraggablePaperComponent(props: any) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

interface Props {
  open: boolean
  onClose: () => void
  children?: React.ReactNode
  className?: string
  title?: string
}

const DraggableDialog: React.FC<Props> = ({ children, className, open, onClose, title = '' }) => {
  const classes = useStyles()

  return (
      <Dialog
        open={open}
        onClose={onClose}
        PaperComponent={DraggablePaperComponent}
        aria-labelledby="draggable-dialog-title"
        className={classnames(classes.dialog, className)}
        maxWidth='lg'
      >
        <DialogTitle style={{ cursor: 'move' }} className={classes.dialogTitle} id="draggable-dialog-title">
          <Typography variant='body1' align='center' className={classes.smallText}>{title}</Typography>
        </DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
  )
}

export default DraggableDialog
