import { SET_PAGE, SET_ALBOM, SET_FILTER, GET_FIRST_DATA } from "../reducers/photoReducer"


export interface PhotoState {
    data: any[];
    filter: number[];
    currentFilter: string;
    albomId: number | null;
    page: ItemData[];
}

type GetFirstDataType = {
    data: PhotoState[]
    filter: number[]
}


export type PhtotAction = SetPageType | SetAlbomType | SetFilterType | SetFirstDataType

export interface ItemData {
    albumId: number;
    id: number;
    thumbnailUrl: string;
    title: string;
    url: string;
}

type SetPageType = {
    type: typeof SET_PAGE
    payload: ItemData[]
}

type SetAlbomType = {
    type: typeof SET_ALBOM
    payload: number
}

type SetFilterType = {
    type: typeof SET_FILTER
    payload: string
}

type SetFirstDataType = {
    type: typeof GET_FIRST_DATA
    payload: GetFirstDataType
}




