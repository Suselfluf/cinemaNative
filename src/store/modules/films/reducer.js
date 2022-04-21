import { createReducer } from '@reduxjs/toolkit'
import { SET_FILMS } from './actions'
import { SUCCESS, FAILURE } from '../../constants/statuses'

const initialState = {
  films: null,
  pendingInProgress: true,
  isPending: false
}

export const filmsReducer = createReducer(initialState, {
  [SET_FILMS[SUCCESS]]: (state, action) => {
    state.films = action.payload.data
    state.pendingInProgress = false
  },

  [SET_FILMS[FAILURE]]: (state, action) => {
    state.films = null
    state.pendingInProgress = false
  }
})
