import { PhtotAction, PhotoState } from '../types/photo'


export const GET_FIRST_DATA = 'GET_FIRST_DATA'
export const SET_FILTER = 'SET_FILTER'
export const SET_ALBOM = 'SET_ALBOM'
export const SET_PAGE = 'SET_PAGE'




const initialState: PhotoState = {
    data: [],
    filter: [],
    currentFilter: '',
    albomId: null,
    page: []
}

export const photoReducer = (state: PhotoState = initialState, action: PhtotAction): PhotoState => {
    switch (action.type) {
        case GET_FIRST_DATA:
            return {
                data: action.payload.data,
                filter: action.payload.filter,
                currentFilter: '',
                albomId: null,
                page: []
            }
        case SET_FILTER:
            return {
                ...state,
                currentFilter: action.payload,
                albomId: null
            }
        case SET_ALBOM:
            return {
                ...state,
                albomId: action.payload
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.payload
            }
        default: return state
    }
}