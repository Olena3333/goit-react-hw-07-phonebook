import persistReducer from 'redux-persist/es/persistReducer';
import { sliceFilter } from './sliseFilter';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';

const { combineReducers, configureStore } = require('@reduxjs/toolkit');
const { sliceContacts } = require('./sliceContacts');

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: sliceContacts.reducer,
  filter: sliceFilter.reducer,
});

const persistReducerContacts = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistReducerContacts,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistR = persistStore(store);

export default store;
