import React, {useRef, useEffect} from 'react';
import styles from './AboutView.module.scss';
import TavernImage from '../../image/tavern.jpg';
import insidePhoto from '../../image/inside2.jpg';
import {TweenMax, Power3} from 'gsap';

const AboutView = () => {
    let imgItem = useRef(null);
    let introItem = useRef(null);
    let mainImgItem = useRef(null);

    useEffect(() => {
        TweenMax.to(
            imgItem,
            2,
            {
                opacity: 1,
                left: 0,
                ease: Power3.easeInOut,
                delay: 0.5
            }
        )
        TweenMax.to(
            introItem,
            2,
            {
                opacity: 1,
                left: 0,
                ease: Power3.easeInOut,
                delay: 0.5
            }
            
        )
        TweenMax.to(
            mainImgItem,
            1.5,
            {
                opacity: 1,
                top: 0,
                ease: Power3.easeInOut,
                delay: 1
            }
            
        )
        }, []);
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperBox}>
            <img className={styles.image} src={insidePhoto} alt="interior" ref={el => {
            imgItem = el
        }}/>
            <div className={styles.intro} ref={el => {
            introItem = el
        }}>
                <p className={styles.title}>Lorem ipsum dolor</p>
                <p className={styles.introInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique et. Vivamus arcu felis bibendum ut. </p>
            </div>
            
            </div>
            <div className={styles.history} ref={el => {
            mainImgItem = el
        }}>
            <hr className={styles.separator}/>
            <p className={styles.title}>Lorem ipsum dolor</p>
            <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique et. Vivamus arcu felis bibendum ut. Amet massa vitae tortor condimentum lacinia quis vel eros. Magna sit amet purus gravida quis blandit turpis. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Dui faucibus in ornare quam viverra orci sagittis eu. Nam libero justo laoreet sit amet cursus sit.
            </p>

            <img className={styles.mainImage} src={TavernImage} alt="restaurant"/>
            <hr className={styles.separator}/>
            <p className={styles.title}>Lorem ipsum dolor</p>
            <p className={styles.info}>
            Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Ipsum consequat nisl vel pretium lectus. Arcu cursus euismod quis viverra nibh. Aliquam sem fringilla ut morbi tincidunt augue. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Nullam non nisi est sit amet.           Facilisis volutpat est velit egestas dui id ornare arcu. Quis ipsum suspendisse ultrices gravida. Tellus elementum sagittis vitae et leo duis ut diam quam. Mauris cursus mattis molestie a iaculis at. 
            </p>
            </div>
        </div>
    )
}

export default AboutView;
