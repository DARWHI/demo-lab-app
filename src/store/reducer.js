import {initialState} from './initialState';

export const workStationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOK_WORKSTATION':
    console.log({ 
        ...state, 
        reservations: [
            ...state.reservations,
            action.payload
        ]
   })
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