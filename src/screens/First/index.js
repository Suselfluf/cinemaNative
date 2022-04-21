import React, { useEffect } from 'react'
import { Text, SafeAreaView, Image } from 'react-native'
import styles from './styles'
import { Formik, useFormik } from 'formik'

import Input from '../../components/Input'
import Button from '../../components/Button'

const First = (props, { navigation }) => {
  // const searchTitle = props.route.params.searchTitle

  useEffect(() => {
    console.log(props)
    if (props.route.params) {
      formik.resetForm()
    }
  }, [props])

  const formik = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: (values) => {
      props.navigation.navigate('Second', { searchTitle: formik.values.search })
    }
  })

  return (
    <SafeAreaView style={styles().container}>
      <Text style={styles().text}>Movie searcher</Text>

      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <Input label="Search" fieldName="search" formik={formik} />
        <Button handlePress={formik.handleSubmit} text="Search" />
      </SafeAreaView>
    </SafeAreaView>
  )
}

export default First
