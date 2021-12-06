import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { useDispatch } from "react-redux";
import { setFilter } from "../actions/actions"



const InputName: React.FC = () => {

    const [input, setInput] = useState<string>('')
    const dispatch = useDispatch()

    const handlyChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
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