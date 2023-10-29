import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpert = () => {
    const [categories, setCategories] = useState(['one', 'two']);
    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* input para buscar los gifts */}
            <AddCategory setCategories={setCategories} categories={categories} />

            {/* listado de gift */}
            <ul>
                {
                    categories.map((category) => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ul>
        </>

    )
}

export default GifExpert;