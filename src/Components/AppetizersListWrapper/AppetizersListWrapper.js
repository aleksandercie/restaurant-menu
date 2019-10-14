import React from 'react';
import AppetizersList from './AppetizersList';
import {appetizers} from '../../data/appetizers';

const AppetizersListWrapper = () => {
    return(
        <ul>
            {appetizers.map((item) => (
                <AppetizersList 
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

export default AppetizersListWrapper