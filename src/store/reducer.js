import { initialState } from './initialState';

// Read data from previous session
const persistedState = localStorage.getItem('demo-lab-store')
    ? JSON.parse(localStorage.getItem('demo-lab-store'))
    : initialState;

/**
 * Even though this reducer only has one action I decided to proceed using it. 
 * Inevitably more cases would be added, eg: delete, update, etc.
 */
export const workStationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOK_WORKSTATION':
            return {
                ...state,
                reservations: [
                    ...state.reservations,
                    action.payload
                ]
            }
        default:
            return state
    }
}