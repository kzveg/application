import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getData } from '../actions/actions'
import { useTypedSelector } from "../hooks/useTypeSelector";
import { ItemData } from '../types/photo'
import Card from 'react-bootstrap/Card'
import Pagination from 'react-bootstrap/Pagination';



const ListPhoto: React.FC = () => {

    let photo
    const photoData = useTypedSelector(state => state.photo.data)
    const currentFilter = useTypedSelector(state => state.photo.currentFilter)
    const albomFilter = useTypedSelector(state => state.photo.albomId)
    const dispatch = useDispatch()

    const [cardData, setCardData] = useState(photoData);

    const page1: any[] = photoData.filter((el: ItemData) => el.id <= 5)
    const page2: any[] = photoData.filter((el: ItemData) => el.id >= 6 && el.id <= 10)
    const page3: any[] = photoData.filter((el: ItemData) => el.id >= 11 && el.id <= 15)
    const page4: any[] = photoData.filter((el: ItemData) => el.id >= 16 && el.id <= 20)
    const page5: any[] = photoData.filter((el: ItemData) => el.id >= 21 && el.id <= 25)
    const page6: any[] = photoData.filter((el: ItemData) => el.id >= 26 && el.id <= 30)
    const page7: any[] = photoData.filter((el: ItemData) => el.id >= 31 && el.id <= 35)
    const page8: any[] = photoData.filter((el: ItemData) => el.id >= 36 && el.id <= 40)
    const page9: any[] = photoData.filter((el: ItemData) => el.id >= 41 && el.id <= 45)
    const page10: any[] = photoData.filter((el: ItemData) => el.id >= 46 && el.id <= 50)
    const pages: any[] = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10]

    useEffect(() => {
        dispatch(getData())
    }, [])

    useEffect(() => {
        const value = photoData.filter(function (el: ItemData) {
            return el.title === currentFilter
        });
        if (value.length > 0) { setCardData(value); }
    }, [currentFilter, photoData])

    useEffect(() => {
        setCardData(pages[0]);
    }, [photoData])

    useEffect(() => {
        const value2 = photoData.filter(function (el: ItemData) {
            return el.albumId === albomFilter
        })
        if (albomFilter) {
            setCardData(value2)
        }
    }, [albomFilter])

    const selectPage = (el: number) => {
        console.log(el);
        setCardData(pages[el - 1])
    }


    if (photoData) {
        photo = cardData.map(function (el: ItemData) {
            return <li >
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={el.url} />
                    <Card.Body>
                        <Card.Text>
                            {el.title}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </li>
        })
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
            <div >
                <ul >{photo}</ul>
            </div>
            <div>
                {paginationBasic}
            </div>
        </div>

    )

}



export default ListPhoto;