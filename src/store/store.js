import { configureStore } from '@reduxjs/toolkit';
import { workStationReducer } from './reducer';

export const store = configureStore({ reducer: workStationReducer })

store.subscribe(() => {
    localStorage.setItem('demo-lab-store', JSON.stringify(store.getState()))
})
