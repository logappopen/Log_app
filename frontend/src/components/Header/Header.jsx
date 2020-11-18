import React, { useContext, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import useStateWithLabel from '../../helpers/UseStateWhitLabel';
import { StoreContext } from '../../store/StoreProvider';
import LoginInfo from '../LoginInfo/LoginInfo';

const Header = () => {
    const { routerLinks, isOpenMenu, setIsOpenMenu, setUserData, userData } = useContext(
        StoreContext,
    );

    // eslint-disable-next-line no-unused-vars
    const [clickedOutsideMenu, setClickedOutsideMenu] = useStateWithLabel('clickedOutside', false);

    const myRef = useRef();

    const handleClickOutsideMenu = (e) => {
        if (!myRef.current.contains(e.target)) {
            setClickedOutsideMenu(true);
            setIsOpenMenu(false);
        }
    };

    useEffect(() => {
        const isLogged = () => {
            return JSON.parse(localStorage.getItem('LogAppUser')) || false;
        };

        if (isLogged() && !userData.isLogged) {
            const data = JSON.parse(localStorage.getItem('LogAppUser'));

            setUserData({
                username: data.username,
                email: data.email,
                isLogged: data.isLogged,
                token: data.token,
            });
        }

        document.addEventListener('mousedown', handleClickOutsideMenu);
        return () => document.removeEventListener('mousedown', handleClickOutsideMenu);
    });

    const menu = routerLinks.map((item) => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>
                {item.name}
            </NavLink>
        </li>
    ));

    const handleHamburgerClick = (e) => {
        e.preventDefault();
        setIsOpenMenu(!isOpenMenu);
        setClickedOutsideMenu(false);
    };
    const handleCloseMenu = (e) => {
        e.preventDefault();
        setIsOpenMenu(false);
    };

    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo} />
                <LoginInfo />
                <nav className={styles.nav} ref={myRef}>
                    <div className={styles.hamburger} onClick={handleHamburgerClick}>
                        <div className={`${styles.bar1} ${isOpenMenu ? styles.bar1Change : ''}`} />
                        <div className={`${styles.bar2} ${isOpenMenu ? styles.bar2Change : ''}`} />
                        <div className={`${styles.bar3} ${isOpenMenu ? styles.bar3Change : ''}`} />
                    </div>
                    <ul
                        className={`${styles.menu} ${isOpenMenu ? styles.menuShow : ''}`}
                        onClick={handleCloseMenu}
                    >
                        {menu}
                    </ul>
                </nav>
            </div>
        </>
    );
};
export default Header;
