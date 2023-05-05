import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import storage  from 'redux-persist/lib/storage';

import search from './slices/SearchSLice'
import reducer from './slices/CartSlice'

const persistConfig = {
	key: 'root',
	storage,
}
const rootReducer = combineReducers({
	search,
	reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer
})



export default store;
export const persistor =persistStore(store);