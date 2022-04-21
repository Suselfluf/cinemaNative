import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './modules/root'
import { filmsReducer } from '../../'

export const store = createStore(rootReducer, applyMiddleware(thunk))
