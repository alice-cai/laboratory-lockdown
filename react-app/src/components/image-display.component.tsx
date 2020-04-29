import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import React, { useState, useEffect } from 'react'
import DraggableDialog from './draggable.component'
import { ThunkDispatch } from 'redux-thunk'
import { AppState } from '..'
import { setCurrentImage } from '../store/current-image/actions'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  image: {
    height: '50em',
    width: '50em',
  },
}))

type MappedDispatch = ReturnType<typeof mapDispatchToProps>
type MappedState = ReturnType<typeof mapStateToProps>

const ImageDisplayComponent: React.FC<MappedDispatch & MappedState> = ({ currentImage, clearImage }) => {
  const classes = useStyles()
  const [openImage, setOpenImage] = useState(false)
  
  useEffect(() => {
    if (currentImage) {
      setOpenImage(true)
    }
  }, [currentImage])

  const onClose = () => {
    clearImage()
    setOpenImage(false)
  }

  return (
    <DraggableDialog title='image' open={openImage} onClose={onClose}>
      <img src={`/${currentImage}`} className={classes.image} />
    </DraggableDialog>
  )
}

const mapStateToProps = ({ currentImage }: AppState) => ({
  currentImage
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  clearImage: () => dispatch(setCurrentImage('')),
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageDisplayComponent)
