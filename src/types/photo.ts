
export interface PhotoState {
    data: Array<any>;
    filter: Array<number>;
    currentFilter: string;
    albomId: number | null;
    page: Object[];
}

export interface PhtotAction {
    type: string,
    payload?: any
}

export interface ItemData {
    albumId: number;
    id: number;
    thumbnailUrl: string;
    title: string;
    url: string;
}



