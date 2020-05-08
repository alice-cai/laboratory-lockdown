import React from 'react'
import Draggable from 'react-draggable'
import classnames from 'classnames'
import {
  makeStyles,
  Typography,
  IconButton,
  Icon,
  Dialog,
  DialogContent,
  DialogTitle,
  Paper,
  Grid,
} from '@material-ui/core'

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
    cursor: 'move',
  },
  title: {
    fontSize: '12px',
    lineHeight: 'normal',
    marginTop: '2px',
  },
  closeButton: {
    padding: 0,
    marginTop: '-14px',
    marginRight: '3px',
  },

  smallHeight: {
    height: '1em',
  },
  smallFont: {
    fontSize: '1em',
  },
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
        disableBackdropClick
        maxWidth='lg'
      >
        <DialogTitle className={classes.dialogTitle} id="draggable-dialog-title">
          <Grid container className={classes.smallHeight}>
            <Grid item xs={1} className={classes.smallHeight}></Grid>
            <Grid item xs={10} className={classes.smallHeight}>
              <Typography variant='body1' align='center' className={classes.title}>{title}</Typography>
            </Grid>
            <Grid item xs={1} container justify='flex-end' alignItems='center' wrap='nowrap' className={classes.smallHeight}>
              <Grid item className={classes.smallHeight}>
                <IconButton onClick={onClose} size='small' className={classes.closeButton}>
                  <Icon className={classes.smallFont} >close_icon</Icon>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        {/* <DialogActions className={classes.grey}>
          <Button variant="contained" color="primary" onClick={onClose}>Close</Button>
        </DialogActions> */}
      </Dialog>
  )
}

export default DraggableDialog
