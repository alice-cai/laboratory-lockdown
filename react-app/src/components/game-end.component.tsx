import React from 'react'
import { makeStyles, Button } from '@material-ui/core'
import classnames from 'classnames'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    backgroundColor: 'black',
    color: 'white',
    height: '30rem',
    width: '45rem',
    borderRadius: '7px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing(15),
  },
  title: {
    fontFamily: 'Roboto Mono',
    fontSize: '1.9em',
    fontWeight: 600,
    textAlign: 'center',
    userSelect: 'none',
    marginTop: 0,
  },
  text: {
    fontFamily: 'Roboto Mono',
    fontSize: '1.5em',
    fontWeight: 500,
    textAlign: 'left',
    color: 'white',
    userSelect: 'none',
    marginBlockStart: '30px',
    marginBlockEnd: '30px',
  },
  button: {
    fontFamily: 'Roboto Mono',
    fontSize: '1.3em',
    fontWeight: 500,
    marginTop: spacing(1),
  },
  lightGreen: {
    color: '#1ec700',
  },
}))

interface Props {
  onButtonClick?: () => void,
}

const GameEndComponent: React.FC<Props> = ({ onButtonClick }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <h4 className={classes.title}>MISSION COMPLETE</h4>
        <p className={classnames(classes.text, classes.lightGreen)}>
          Congratulations, Agent #24601.
        </p>
        <p className={classes.text}>
          You have successfully completed your mission. Thanks to you, we were able to infiltrate the lab and put
          a stop to their unethical testing practices.
        </p>
        <p className={classes.text}>
          Great work!
        </p>
        <Button variant="outlined" color="primary" className={classes.button} onClick={onButtonClick}>
          BACK TO TERMINAL
        </Button>
      </div>
    </div>
  )
}

export default GameEndComponent
