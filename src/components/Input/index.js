import React from 'react'
import { TextInput as MDTextInput } from 'react-native-paper'

const Input = ({ label, fieldName, mode = 'outlined', formik, ...props }) => {
  return (
    <MDTextInput
      label={label}
      value={formik.values[fieldName]}
      onBlur={formik.handleBlur(fieldName)}
      onChangeText={formik.handleChange(fieldName)}
      mode={mode}
      {...props}
    />
  )
}

export default Input
