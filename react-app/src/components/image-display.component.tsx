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
    maxHeight: '40em',
    maxWidth: '50em',
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

  if (!currentImage) {
    return null
  }

  return (
    <DraggableDialog title={`Image - ${currentImage}`} open={openImage} onClose={onClose}>
      <img src={`/image?file_name=${currentImage}`} className={classes.image} alt={currentImage} />
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
