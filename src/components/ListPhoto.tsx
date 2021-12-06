import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { ItemData } from '../types/photo'
import Card from 'react-bootstrap/Card'


const ListPhoto: React.FC = () => {

    const photoData: ItemData[] = useTypedSelector(state => state.photo.data)
    const currentFilter: string = useTypedSelector(state => state.photo.currentFilter)
    const albomFilter: number | null = useTypedSelector(state => state.photo.albomId)
    const pageData: ItemData[] = useTypedSelector(state => state.photo.page)
    const page1: ItemData[] = photoData.filter((el: ItemData) => el.id <= 5)
    let photo
    const [cardData, setCardData] = useState<ItemData[]>(photoData);
    console.log(pageData);


    useEffect(() => {
        setCardData(pageData);
    }, [pageData])

    useEffect(() => {
        setCardData(page1);
    }, [photoData])

    useEffect(() => {
        const value: ItemData[] = photoData.filter(function (el: ItemData) {
            return el.title === currentFilter
        });
        if (value.length > 0) {
            setCardData(value);
        }
    }, [currentFilter])


    useEffect(() => {
        const value2: ItemData[] = photoData.filter(function (el: ItemData) {
            return el.albumId === albomFilter
        })
        if (albomFilter) {
            setCardData(value2)
        }
    }, [albomFilter])



    if (photoData) {
        photo = cardData.map(function (el: ItemData) {
            return <li >
                <Card style={{ width: '15rem' }} className='card'>
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


    return (
        <div>
            <div >
                <ul >{photo}</ul>
            </div>

        </div>

    )

}



export default ListPhoto;