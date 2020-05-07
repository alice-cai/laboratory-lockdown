import { useState, useEffect } from 'react'

// Code taken from: https://stackoverflow.com/questions/47686345/playing-sound-in-reactjs
export const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing, audio])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
  }, [audio])

  return toggle
}
