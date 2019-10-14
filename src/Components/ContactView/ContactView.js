import React, {useRef, useEffect} from 'react';
import styles from './ContactView.module.scss';
import Image from '../../image/waiter.jpg';
import {TweenMax, Power3} from 'gsap';

const ContactView = () => {
    let imgItem = useRef(null);
    let infoItem = useRef(null);

    useEffect(() => {
        TweenMax.to(
            imgItem,
            2,
            {
                opacity: 1,
                top: 0,
                ease: Power3.easeInOut,
            }
        )
        TweenMax.to(
            infoItem,
            2,
            {
                opacity: 1,
                bottom: 0,
                ease: Power3.easeInOut,
            }
        )
        }, [])
    return (
        <div className={styles.wrapper}>
          
           
                <img className={styles.image} src={Image} alt="contact-img" ref={el => {
            imgItem = el
        }}/>

                <div className={styles.info} ref={el => {
            infoItem = el
        }}>
                <p className={styles.banner}>Buon appetito</p>
                    <p>telefon: +23 201 202 283</p>
                    <p>email: finoallafine@gmail.com</p>
                    <p>facebook: <a href="">fino alla fine</a></p>
                    <p>instagram: <a href="">@finoallafine</a></p>
                    <p>adress: Poland, 00-000 Warsaw</p>
            
            </div>
        </div>
    )
}

export default ContactView;