import { combineReducers } from 'redux'

import genres from './genres'
import entities from './entities'
import search from './search'

export default combineReducers({
    entities,
    search,
    genres
})