/* eslint-disable react/prop-types */
import { useState } from "react"

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length <= 1) {
            return;
        }

        setCategories(categories => [...categories, inputValue])
        setInputValue('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} name="category" onChange={handleChange} placeholder="Busca por categoria..." />
            </form>
        </div>
    )
}
