import React, { useState } from 'react';
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {

    //Declarations
    const [inputValue, setInputValue] = useState("");

    //Handle
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(categs => [inputValue,...categs]);
            setInputValue("");
        }
    }

    //Return
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
}

