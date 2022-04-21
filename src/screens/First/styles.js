import { StyleSheet } from 'react-native'
import { useTheme } from '../../theme'
import { range } from 'lodash'

const styles = () => {
  const { Colors, Layout, Font } = useTheme()

  return StyleSheet.create({
    container: {
      ...Layout.fill,
      ...Layout.column,
      backgroundColor: Colors.white
    },
    text: {
      ...Layout.textCenter,
      ...Font('regular', 'large', Colors.black)
    },
    subText: {
      ...Layout.textCenter,
      ...Font('regular', 'regular', Colors.black),
      marginTop: 10
    },
    image: {
      height: 450,
      width: '100%'
    }
  })
}

export default styles
