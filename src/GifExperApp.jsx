import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories]);
    }

    return( 
    <>
        <h1>Buscador de Gifs</h1>

        <AddCategory 
        onNewCategory={value => onAddCategory(value)} 
        
        />

    
            {categories.map(category => {
                return(
                <GifGrid 
                    key={category}
                    category={category}    
                ></GifGrid>
                );
            })}
       
    </>
    )
}