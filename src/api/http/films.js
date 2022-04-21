import axios from '../index'
// import axios from 'axios'
import { KEY } from '../../store/constants/axiousdata'

export const _getFilms = (data) => {
  if (!data.search) data.search = 'war'
  if (!data.type) data.type = ''
  if (!data.year) data.year = ''
  return axios.get(
    `https://www.omdbapi.com/?s=${data.search}&y=${data.year}&type=${data.type}&apikey=${KEY}`,
    data
  )
}
