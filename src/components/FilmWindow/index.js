import React from 'react'
import { useSelector } from 'react-redux'
import { Text, SafeAreaView, View } from 'react-native'

const FilmWindow = ({ props }) => {
  const films = useSelector((state) => state.filmsReducer.films)

  const list = () => {
    return films.map((film) => {
      return (
        <View key={film.key} style={{ margin: 10 }}>
          <Text>{film.title}</Text>
          <Text>{film.year}</Text>
          <Text>{film.type}</Text>
        </View>
      )
    })
  }

  return <SafeAreaView>{list()}</SafeAreaView>
}

export default FilmWindow
