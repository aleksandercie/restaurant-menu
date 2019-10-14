import React, {useRef, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navigation.module.scss';
import {TweenMax, Power3} from 'gsap';

const Navigation = () => {
    let navItem = useRef(null);

    useEffect(() => {
        TweenMax.to(
            navItem,
            2,
            {
                opacity: 1,
                top: 0,
                ease: Power3.easeInOut,
            }
        )
        }, [])
    return (
        <ul className={styles.wrapper} ref={el => {
            navItem = el
        }}>
            <li className={styles.navItem}>
                <NavLink exact className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/">About</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/appetizers">Appetizers</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/entrees">Entrees</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/desserts">Desserts</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to="/contact">Contact</NavLink>
            </li>
        </ul>
    )
}
export default Navigation