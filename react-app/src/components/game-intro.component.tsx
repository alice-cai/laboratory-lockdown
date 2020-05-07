import React from 'react'
import { makeStyles, Button } from '@material-ui/core'
import classnames from 'classnames'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    backgroundColor: 'black',
    color: 'white',
    height: '35rem',
    width: '50rem',
    borderRadius: '7px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing(10),
  },
  title: {
    fontFamily: 'Roboto Mono',
    fontSize: '1.6em',
    fontWeight: 600,
    textAlign: 'center',
    userSelect: 'none',
    marginTop: 0,
  },
  text: {
    fontFamily: 'Roboto Mono',
    fontSize: '1.3em',
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
  },
  lightGreen: {
    color: '#1ec700',
  },
}))

interface Props {
  onButtonClick?: () => void,
}

const GameIntroComponent: React.FC<Props> = ({ onButtonClick }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <h4 className={classes.title}>LABORATORY LOCKDOWN</h4>
        <p className={classnames(classes.text, classes.lightGreen)}>
          Welcome, Agent #24601.
        </p>
        <p className={classes.text}>
          It has been discovered that the <span className={classes.lightGreen}>Corona Institute of Virology </span>
          has been genetically engineering deadly viruses for use as biological weapons.
        </p>
        <p className={classes.text}>
          Your mission is to <span className={classes.lightGreen}>hack into their computer system </span> and
          <span className={classes.lightGreen}> shut down their laboratory power source</span>. This would disable
          their security system and allow us to infiltrate the facility.
        </p>
        <p className={classes.text}>
          Fortunately for you, we were able to obtain the login credentials of Ryan Fisher, a lower level employee.
          To access their computer, type <span className={classes.lightGreen}>ssh r_fisher</span>. The password is
          <span className={classes.lightGreen}> giraffes123</span>.
        </p>
        <p className={classes.text}>
          The rest is up to you. Good luck!
        </p>
        <Button variant="outlined" color="primary" className={classes.button} onClick={onButtonClick}>
          START
        </Button>
      </div>
    </div>
  )
}

export default GameIntroComponent
