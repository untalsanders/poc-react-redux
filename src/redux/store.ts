import { combineReducers, configureStore } from '@reduxjs/toolkit'
import quotesReducer from '../features/quotes/infrastructure/slices/quotesSlice'

const rootReducer = combineReducers({ quotes: quotesReducer })

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
