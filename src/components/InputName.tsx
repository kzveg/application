import React, { useState, Dispatch } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { useTypedSelector } from "../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { PhtotAction } from "../types/photo"
import { setFilter } from "../actions/actions"




const InputName = () => {

    // const photoData = useTypedSelector(state => state.photo.data)

    const [input, setInput] = useState('')
    // const [stateData, setStateData] = useState(photoData)
    const dispatch = useDispatch()

    function handlyChange(event: any) {
        setInput(event.target.value);
    }



    const getFilterData = () => {
        dispatch(setFilter(input));
        setInput('')
    }


    return (
        <InputGroup className="mb-3" onChange={handlyChange} >
            <Button onClick={getFilterData} variant="outline-success" id="button-addon1" >
                search
            </Button>
            <FormControl
                value={input}
                placeholder="enter photo name"
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
            />
        </InputGroup>
    )
}


export default InputName;