import { Dispatch } from "react";
import { ItemData } from "../types/photo";


export const GET_FIRST_DATA = 'GET_FIRST_DATA'
export const GET_FILTER_DATA = 'GET_FILTER_DATA'
export const FILTER_DATA = 'FILTER_DATA'


export const getData = () => (dispatch: Dispatch<any>) => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(response => response.json())
        .then(data => {
            const filter = data.map(function (el: ItemData) {
                return el.albumId
            });
            dispatch({ type: 'GET_FIRST_DATA', payload: { data, filter } })
        }
        );
}



export const setFilter = (item: string) => (dispatch: Dispatch<any>) => {
    dispatch({ type: 'SET_FILTER', payload: item })
};

export const showAlbom = (item: number) => (dispatch: Dispatch<any>) => {
    dispatch({ type: 'SET_ALBOM', payload: item })
};

export const pageData = (item: Object[]) => (dispatch: Dispatch<any>) => {
    dispatch({ type: 'SET_PAGE', payload: item })
};