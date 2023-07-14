import { combineReducers } from 'redux'

import filterReducer from './filterReducer'
import tabsReducer from './tabsReducer'
import ticketsReducer from './ticketsReducer'

const rootReducer = combineReducers({
  filters: filterReducer,
  tabs: tabsReducer,
  tickets: ticketsReducer,
})

export default rootReducer
