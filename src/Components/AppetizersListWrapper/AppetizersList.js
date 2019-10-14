import React, {useRef, useEffect} from 'react';
import styles from './AppetizersList.module.scss';
import {TweenMax, Back} from 'gsap';


const AppetizesList = ({name, price, ingridients, image}) => {
    let productItem = useRef(null);

    useEffect(() => {
        TweenMax.to(
            productItem,
            2,
            {
                opacity: 1,
                top: 20,
                ease: Back.easeInOut,
            }
        )
        }, [])
    return (
        <div className={styles.wrapper} ref={el => {
            productItem = el
        }} >
            <div className={styles.wrapperInfo}>
                <div className={styles.imageBox}>
                    <img className={styles.image} src={image} alt={name}/>
                </div>
                <div className={styles.infoBox}>
                    <p className={styles.name}>{name}</p>
                    <p>{ingridients}</p>
                    <p className={styles.price}>{price}</p>
                </div>
            </div>
            <hr className={styles.separator}/>
        </div>
        
    )
    
}

export default AppetizesList;