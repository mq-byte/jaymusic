import SoundPlayer from 'react-native-sound-player'

try {
  // play the file tone.mp3
  // SoundPlayer.playSoundFile('tone', 'mp3')
  // or play from url
  SoundPlayer.playUrl('http://img.yidianling.com/file/2016/07/77xdvc0du8vieg4z.mp3')
} catch (e) {
  console.log(`cannot play the sound file`, e)
}

