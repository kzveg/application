import { PhtotAction, PhotoState } from '../types/photo'


const initialState: PhotoState = {
    data: [],
    filter: [],
    currentFilter: '',
    albomId: null
}

export const photoReducer = (state = initialState, action: PhtotAction): PhotoState => {
    switch (action.type) {
        case 'GET_FIRST_DATA':
            return {
                data: action.payload.data,
                filter: action.payload.filter,
                currentFilter: '',
                albomId: null
            }
        case 'SET_FILTER':
            return {
                ...state,
                currentFilter: action.payload,
                albomId: null
            }
        case 'SET_ALBOM':
            return {
                ...state,
                albomId: action.payload
            }
        default: return state
    }
}