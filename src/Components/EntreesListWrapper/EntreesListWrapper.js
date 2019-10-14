import React from 'react';
import EntreesList from './EntreesList';
import {entrees} from '../../data/entrees';

const EntreesListWrapper = () => {
    return(
        <ul>
            {entrees.map((item) => (
                <EntreesList 
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

export default EntreesListWrapper