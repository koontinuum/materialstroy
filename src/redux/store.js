import { configureStore } from '@reduxjs/toolkit'
import search from './slices/SearchSLice'
import reducer from './slices/CartSlice'

//const reducers = combineReducers(
//	reducer
//)

export const store = configureStore({
	reducer: {
 		search,
       reducer,
	},
})

