import React, {useRef, useEffect} from 'react';
import styles from './Title.module.scss';
import {TweenMax, Power3} from 'gsap';



const Title = () => {
    let titleItem = useRef(null);

    useEffect(() => {
        TweenMax.to(
            titleItem,
            1.5,
            {
                opacity: 1,
                top: 0,
                ease: Power3.easeInOut,
            }
        )
        }, [])
    return (
        <h1 
        ref={el => {
            titleItem = el
        }}
        className={styles.title}>Fino Alla Fine</h1>
    )   
}

export default Title