import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifts } from "../hooks/useFetchGifts";


export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifts(category);
  
  return (
    <>
    <h3>{category}</h3>
        {
          isLoading ? <h2>Cargando...</h2> : null
        }
        <div className="card-grid">

        {
          images.map((image) => (
            <GifItem key={image.id}
            // image={image}
            // title={image.title}
            // url={image.url}
            {...image}/> //envia todos los elementos con sus propiedades
          ))
        }
        </div>
    </>
  )
}
