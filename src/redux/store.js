import bouquetReducer from './slices/bouquet'
import { configureStore } from '@reduxjs/toolkit'

// Дальнейшие импорты нужны для redux-persist
import storage from 'redux-persist/lib/storage'
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'

// Базовые настройки store и redux-persist
// redux-persist нужен чтобы при перезагрузке страницы не обновлялся state

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, bouquetReducer)

const reducer  = {
    bouquet: persistedReducer
}

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
})

export const persistor = persistStore(store)