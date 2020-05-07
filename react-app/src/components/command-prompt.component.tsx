import React from 'react'
import { Box, InputBase, makeStyles, Typography } from '@material-ui/core'
import classnames from 'classnames'
import { AppState } from '..'
import { connect } from 'react-redux'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    width: '100%',
  },
  inputRoot: {
    width: '100%',
  },
  input: {
    color: 'white',
    padding: 0,

    backgroundColour: 'red',
    '& .MuiInputBase-input': {
      padding: 0,
      width: '100%',
    },
    '& .MuiInputBase-root': {
      width: '100%',
    },
  },
  commandPrompt: {
    marginRight: spacing(1),
  },
}))

type MappedState = ReturnType<typeof mapStateToProps>

interface Props {
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  onKeyDown: (e: React.KeyboardEvent) => void
  className?: string
}

const CommandPrompt: React.FC<MappedState & Props> = ({
  currentUser,
  value,
  onChange,
  onKeyDown,
  className = '',
}) => {
  const classes = useStyles()
  const commandPromptLabel = `${currentUser} $`

  return (
    <Box
      display='flex'
      justifyContent='flex-start'
      alignItems='center'
      flexDirection='row'
      flexWrap='nowrap'
      className={classnames(classes.root, className)}
    >
    <Box>
      <Typography className={classes.commandPrompt} noWrap>{commandPromptLabel}</Typography>
    </Box>
    <InputBase
      className={classes.input}
      value={value}
      onChange={onChange}
      inputProps={{ 'aria-label': 'naked' }}
      onKeyDown={onKeyDown}
      fullWidth
      classes={{ root: classes.inputRoot }}
    />
  </Box>
  )
}

const mapStateToProps = ({ currentUser }: AppState) => ({
  currentUser,
})

export default connect(mapStateToProps)(CommandPrompt)
