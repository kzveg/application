import Pagination from 'react-bootstrap/Pagination';
import { useTypedSelector } from "../hooks/useTypeSelector";
import { ItemData } from '../types/photo';
import { pageData, getData } from '../actions/actions'
import { useDispatch } from "react-redux";
import { useEffect } from "react";



const PagePagination: React.FC = () => {

    const photoData: ItemData[] = useTypedSelector(state => state.photo.data)

    const page1: Object[] = photoData.filter((el: ItemData) => el.id <= 5)
    const page2: Object[] = photoData.filter((el: ItemData) => el.id >= 6 && el.id <= 10)
    const page3: Object[] = photoData.filter((el: ItemData) => el.id >= 11 && el.id <= 15)
    const page4: Object[] = photoData.filter((el: ItemData) => el.id >= 16 && el.id <= 20)
    const page5: Object[] = photoData.filter((el: ItemData) => el.id >= 21 && el.id <= 25)
    const page6: Object[] = photoData.filter((el: ItemData) => el.id >= 26 && el.id <= 30)
    const page7: Object[] = photoData.filter((el: ItemData) => el.id >= 31 && el.id <= 35)
    const page8: Object[] = photoData.filter((el: ItemData) => el.id >= 36 && el.id <= 40)
    const page9: Object[] = photoData.filter((el: ItemData) => el.id >= 41 && el.id <= 45)
    const page10: Object[] = photoData.filter((el: ItemData) => el.id >= 46 && el.id <= 50)
    const pages: any[] = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10]

    useEffect(() => {
        dispatch(getData())
    }, [])

    const dispatch = useDispatch()

    const selectPage = (el: number): void => {
        dispatch(pageData(pages[el - 1]));
    }

    let items = [];
    for (let number = 1; number <= pages.length; number++) {
        items.push(
            <Pagination.Item key={number} onClick={() => selectPage(number)} >
                {number}
            </Pagination.Item >,
        );
    }

    const paginationBasic = (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    );


    return (
        <div>
            <div>
                {paginationBasic}
            </div>
        </div>
    )
}


export default PagePagination;