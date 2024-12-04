import { createSlice } from '@reduxjs/toolkit'
import { Quote } from '../../domain/models/Quote'

const initialState: Quote[] = []

export const quotesSlice = createSlice({
    name: 'quotesSlice',
    initialState,
    reducers: {
        getQuotes: (_state, action) => action.payload,
    },
})

export const { getQuotes } = quotesSlice.actions
export default quotesSlice.reducer
