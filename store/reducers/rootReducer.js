import { combineReducers } from '@reduxjs/toolkit'
import articles from './Article'

/**
 * Root Reducer
 */
const rootReducer = combineReducers({ articles })

export default rootReducer
