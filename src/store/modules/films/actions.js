import { makeRequest, createRequestStatuses } from '../../utils/redux-utils'
import { _getFilms } from '../../../api/http/films'

export const SET_FILMS = createRequestStatuses('SET_FILMS')
export const getFilms = (data, callbackSuccess, callbackError) =>
  makeRequest(SET_FILMS, _getFilms, data, callbackSuccess, callbackError)
