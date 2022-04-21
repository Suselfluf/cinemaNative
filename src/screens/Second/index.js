import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import {
  Text,
  SafeAreaView,
  View,
  ScrollView,
  ActivityIndicator
} from 'react-native'
import styles from './styles'

import { useFormik } from 'formik'

import { getFilms } from '../../store/modules/films/actions'
import { useDispatch, useSelector } from 'react-redux'
import {
  TextInput,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph
} from 'react-native-paper'
import FilmWindow from '../../components/FilmWindow'

import SelectDropdown from 'react-native-select-dropdown'

const Second = (props) => {
  const dispatch = useDispatch()
  const [params, setParams] = useState(false)
  const cancelSource = React.useRef(null)
  const [isLoading, setLoading] = useState(true)
  const CancelToken = axios.CancelToken
  const filmsSelector = useSelector((state) => state.filmsReducer.films) //По какой то причине изначально становится андевайнед

  const searchTitle = props.route.params.searchTitle
  // const [searchTitle, setSearchLine] = useState(props.route.params.searchTitle)

  const options = ['movie', 'series', 'episode']

  const formik = useFormik({
    initialValues: {
      search: props.route.params ? props.route.params.searchTitle : '',
      year: '',
      type: 'movie'
    },
    enableReinitialize: true
  })

  useEffect(() => {
    setParams(false)
    setLoading(true)
    if (cancelSource.current) {
      cancelSource.current.cancel()
    }
    cancelSource.current = CancelToken.source()
    dispatch(
      getFilms(
        {
          search: searchTitle,
          year: formik.values.year,
          type: formik.values.type,
          params: cancelSource.current.token
        },
        (e) => {
          setLoading(false)
        },
        (error) => {
          console.log(error)
        }
      )
    )
    // console.log(filmsSelector)
  }, [searchTitle, formik.values.year, formik.values.type])

  const list = () => {
    if (filmsSelector != null) {
      if (filmsSelector.response === 'False') {
        return <Text style={styles().text}>There is no such films</Text>
      } else if (filmsSelector.response === 'True') {
        return filmsSelector.search.map((film, key) => {
          let imageUrl = film.poster
          if (imageUrl === 'N/A')
            imageUrl = '../../components/images/imgNotFound.png'
          return (
            <Card
              mode="elevated"
              style={styles().cardWrapper}
              key={film.imdbId}
            >
              <Card.Content>
                <Title>{film.title}</Title>
                <Paragraph>{film.type}</Paragraph>
                <Paragraph>{film.year}</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: `${imageUrl}` }} />
            </Card>
          )
        })
      }
    }
  }

  return (
    <SafeAreaView style={styles().container}>
      <SafeAreaView style={styles().container}>
        <ScrollView>
          <SafeAreaView style={styles().buttonsContainer}>
            <SafeAreaView>
              {!params ? (
                <Button
                  mode="Outlined"
                  onPress={() =>
                    props.navigation.navigate('First', {
                      clearPars: true
                    })
                  }
                >
                  Exit
                </Button>
              ) : (
                <Button
                  mode="Outlined"
                  onPress={() => props.navigation.navigate('First')}
                >
                  Exit
                </Button>
              )}
            </SafeAreaView>

            <Button
              mode="Outlined"
              onPress={(e) => {
                formik.resetForm()
                props.route.params.searchTitle = ''
                setParams(true)
              }}
            >
              Clear filters
            </Button>
          </SafeAreaView>

          <SafeAreaView style={styles().filtersContainer}>
            <TextInput
              style={styles().inputText}
              label="Year"
              value={formik.values.year}
              onChangeText={formik.handleChange('year')} //Make user to input only digits
              keyboardType="numeric"
            />

            <SelectDropdown
              buttonStyle={styles().options}
              value={formik.values.type}
              data={options}
              onSelect={formik.handleChange('type')}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return formik.values.type
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
            />
          </SafeAreaView>
          {isLoading ? (
            <View>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            <SafeAreaView style={styles().filmsWrapper}>{list()}</SafeAreaView>
          )}
        </ScrollView>
      </SafeAreaView>
      {/* {console.log(filmsSelector)} */}
      {/* {films != null ? <Text>Yes</Text> : <Text>No</Text>} */}
      {/* {films ? <FilmWindow></FilmWindow> : <Text>No</Text>} */}
    </SafeAreaView>
  )
}

export default Second
