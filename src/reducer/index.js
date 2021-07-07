import { combineReducers } from 'redux'
import { artistsData, artistData, ablumsData, tracksData } from './artistReducer'

export default combineReducers({
    artistsData,
    artistData,
    ablumsData,
    tracksData
})