import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { StoreContext } from '../../store/StoreProvider';
import LoginInfo from '../LoginInfo/LoginInfo';

const Header = () => {
    const { routerLinks, isOpenMenu, setIsOpenMenu } = useContext(StoreContext);

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
                <nav className={styles.nav}>
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
