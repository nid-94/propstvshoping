import React from 'react'
import Item from './Item'
import {Products} from "./Products"
const ItemList = () => {
    
    return (
        <div>
            <h1>TV list</h1>
            <div id="cardy" >
                {Products.map(((el,i)=>
            <Item name={el.name} price={el.price} image={el.image} key={i} />
                ))}
            </div>
            
        </div>
    )
}


export default ItemList
