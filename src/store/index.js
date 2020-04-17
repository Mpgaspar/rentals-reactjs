import { createStore } from 'redux'

const INITIAL_STATE = {
    data: [
        'House 01',
        'Apartament 01',
        'House 02',
    ]
}

function properties(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_PROPERTY':
          return {...state, data: [...state.data, action.title] }
        default:
          return state        
    }
}

const store = createStore(properties)

export default store

