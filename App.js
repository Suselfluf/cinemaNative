import React from 'react'
import { store } from './src/store/store'
import { Provider } from 'react-redux'
import AppRouter from './src/router/AppRouter'
import { Provider as PaperProvider } from 'react-native-paper'

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <AppRouter />
      </PaperProvider>
    </Provider>
  )
}

export default App
