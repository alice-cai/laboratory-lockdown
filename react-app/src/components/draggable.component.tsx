import React, { Children } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import classnames from 'classnames'
import { makeStyles, Typography, Box, Icon } from '@material-ui/core';
// import DraggablePaperComponent from './draggable-paper.component'

const useStyles = makeStyles(({ spacing }) => ({
  dialog: {
    padding: 0,
    borderRadius: '5px',
    // maxHeight: '75vh',
    // pointerEvents: "none",
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
}

const DraggableDialog: React.FC<Props> = ({ children, className, open, onClose }) => {
  const classes = useStyles()
  // const [open, setOpen] = React.useState(false)
  const [openImage, setOpenImage] = React.useState(false)

  // const handleClickOpen = () => {
  //   setOpen(true);
  // }

  // const handleClose = () => {
  //   setOpen(false)
  // }

  return (
    // <div className={className}>
    //   <Button variant="outlined" color="primary" onClick={handleClickOpen}>
    //     Open terminal
    //   </Button>
      <Dialog
        open={open}
        onClose={onClose}
        PaperComponent={DraggablePaperComponent}
        aria-labelledby="draggable-dialog-title"
        className={classes.dialog}
        // disableBackdropClick
        // disableEscapeKeyDown
        // hideBackdrop
        maxWidth='lg'
      >
        <DialogTitle style={{ cursor: 'move' }} className={classes.dialogTitle} id="draggable-dialog-title">
          {/* <Box display='flex' justifyContent='flex-start' flexDirection='row'>
            <Icon fontSize='small'>cancel</Icon>
          </Box> */}
          <Typography variant='body1' align='center' className={classes.smallText}>terminal - alice_test</Typography>
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
          {children}
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={() => setOpenImage(true)} color="primary">
            image
          </Button>
        </DialogActions> */}
      </Dialog>
    // </div>
  )
}

export default DraggableDialog
