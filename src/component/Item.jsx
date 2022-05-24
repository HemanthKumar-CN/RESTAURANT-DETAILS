import React from 'react'
import { Data } from '../data'
import Each from './each';
import New_restaurant from './restaurant_input';



const Item = () => {
    const [itemList, setItemList]=React.useState(Data);

    
    
  return (
    <div>
        <New_restaurant/>

        <h1>Restaurant</h1>
        {
            itemList.map(item => {
               return ( <Each key={item.id}  item={item}/>)
            })
        }
        </div>
  )
}

export default Item