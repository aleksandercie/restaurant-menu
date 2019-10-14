import React from 'react';
import DessertsList from './DessertsList';
import {desserts} from '../../data/desserts';

const DessertsListWrapper = () => {
    return(
        <ul>
            {desserts.map((item) => (
                <DessertsList 
                    key={item.name}
                    name={item.name}
                    price={item.price}
                    ingridients={item.ingridients}
                    image={item.image}
                />
            ))}
      
        </ul>
    )
}

export default DessertsListWrapper