import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import EncryptedStorage from 'react-native-encrypted-storage';
import rootReducer from '../reducers/rootReducer';

// Create encrypted storage engine
const encryptedStorage = {
  setItem: async (key, value) => {
    await EncryptedStorage.setItem(key, value);
    return Promise.resolve();
  },
  getItem: async (key) => {
    const value = await EncryptedStorage.getItem(key);
    return Promise.resolve(value);
  },
  removeItem: async (key) => {
    await EncryptedStorage.removeItem(key);
    return Promise.resolve();
  },
};

// Persist config
const persistConfig = {
  key: 'root',
  storage: encryptedStorage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
