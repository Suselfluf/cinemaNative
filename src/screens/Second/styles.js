import { StyleSheet } from 'react-native'
import { useTheme } from '../../theme'
import { range } from 'lodash'

const styles = () => {
  const { Colors, Layout, Font } = useTheme()

  return StyleSheet.create({
    container: {
      ...Layout.fill,
      ...Layout.column,
      backgroundColor: Colors.grey
    },
    buttonsContainer: {
      ...Layout.rowVCenter,
      ...Layout.scrollSpaceAround,
      marginBottom: 15
    },
    filtersContainer: {
      ...Layout.rowVCenter,
      ...Layout.scrollSpaceAround,
      backgroundColor: Colors.grey
    },
    filmsWrapper: {
      margin: 15
    },
    cardWrapper: {
      marginTop: 10,
      marginBottom: 10
    },
    text: {
      ...Layout.textCenter,
      ...Font('regular', 'large', Colors.black)
    },
    inputText: {
      width: 100,
      height: 45,
      backgroundColor: Colors.white
    },
    options: {
      backgroundColor: Colors.white
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
