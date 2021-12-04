import Dropdown from 'react-bootstrap/Dropdown'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from "../hooks/useTypeSelector";
import DropdownButton from 'react-bootstrap/DropdownButton'
import { showAlbom } from "../actions/actions"



const SearchAlboms = () => {

    let idData;
    const albomId: number[] = useTypedSelector(state => state.photo.filter)
    const dispatch = useDispatch()
    const uniqueId = albomId.filter((v, i, a) => a.indexOf(v) === i);
    const takeAlbom = (el: number) => {
        dispatch(showAlbom(el));
    }

    if (albomId) {
        uniqueId.forEach(function (el: number) {
            idData = <Dropdown.Item as="button" onClick={() => takeAlbom(el)} > {el} </Dropdown.Item>
        })
    }


    return (
        <div>
            <DropdownButton id="dropdown-item-button" title="Select photos by alboms">
                <Dropdown.ItemText>Alboms</Dropdown.ItemText>
                {idData}
            </DropdownButton>
        </div>
    )
}


export default SearchAlboms;