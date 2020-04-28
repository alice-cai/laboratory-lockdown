import React from 'react';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => ({
  paper: {
    pointerEvents: 'auto',
  },
}))

function DraggablePaperComponent(props: any) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default DraggablePaperComponent
