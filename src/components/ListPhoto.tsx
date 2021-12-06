import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { ItemData } from '../types/photo'
import Card from 'react-bootstrap/Card'


const ListPhoto: React.FC = () => {

    let photo
    const photoData = useTypedSelector(state => state.photo.data)
    const currentFilter = useTypedSelector(state => state.photo.currentFilter)
    const albomFilter = useTypedSelector(state => state.photo.albomId)
    const pageData = useTypedSelector(state => state.photo.page)
    const page1: any[] = photoData.filter((el: ItemData) => el.id <= 5)

    const [cardData, setCardData] = useState(photoData);


    useEffect(() => {
        setCardData(pageData);
    }, [pageData])

    useEffect(() => {
        setCardData(page1);
    }, [photoData])

    useEffect(() => {
        const value = photoData.filter(function (el: ItemData) {
            return el.title === currentFilter
        });
        if (value.length > 0) {
            setCardData(value);
        }
    }, [currentFilter])


    useEffect(() => {
        const value2 = photoData.filter(function (el: ItemData) {
            return el.albumId === albomFilter
        })
        if (albomFilter) {
            setCardData(value2)
        }
    }, [albomFilter])



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


    return (
        <div>
            <div >
                <ul >{photo}</ul>
            </div>

        </div>

    )

}



export default ListPhoto;