import React from 'react'
import { Button } from 'react-native-paper'
import { useTheme } from '../../theme'

const ButtonMD = ({ handlePress, text, active }) => {
  const { Colors } = useTheme()

  return (
    <Button color={Colors.black} mode="contained" onPress={() => handlePress()}>
      {text}
    </Button>
  )
}

export default ButtonMD
