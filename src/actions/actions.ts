import { Dispatch } from "react";
import { ItemData } from "../types/photo";
import { PhtotAction } from "../types/photo"




export const getData = () => (dispatch: Dispatch<PhtotAction>) => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(response => response.json())
        .then(data => {
            const filter: number[] = data.map(function (el: ItemData) {
                return el.albumId
            });
            dispatch({ type: 'GET_FIRST_DATA', payload: { data, filter } })
        }
        );
}




export const setFilter = (item: string) => (dispatch: Dispatch<PhtotAction>) => {
    dispatch({ type: 'SET_FILTER', payload: item })
};

export const showAlbom = (item: number) => (dispatch: Dispatch<PhtotAction>) => {
    dispatch({ type: 'SET_ALBOM', payload: item })
};

export const pageData = (item: ItemData[]) => (dispatch: Dispatch<PhtotAction>) => {
    dispatch({ type: 'SET_PAGE', payload: item })
};