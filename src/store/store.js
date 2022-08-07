import { configureStore } from '@reduxjs/toolkit'
import { workStationReducer } from './reducer'

export const store = configureStore({ reducer: workStationReducer })