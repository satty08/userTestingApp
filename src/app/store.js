import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key:'root',
  storage
}

const PersistedReducer = persistReducer(persistConfig,userReducer);

export const store = configureStore({
  reducer: PersistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export const persistor = persistStore(store);