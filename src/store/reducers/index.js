import { combineReducers } from 'redux'
import deviceReducer from './deviceReducer'

export default combineReducers({
  devices: deviceReducer,
  device: deviceReducer,
  sortBy: deviceReducer,
})