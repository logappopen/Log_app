import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const list = [
    { name: 'start', path: '/', exact: true },
    { name: 'kontakt', path: '/contact' },
    { name: 'pomoc', path: '/help' },
]

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    // const [pages, setPages] = useState(true);
    const menu = list.map((item) => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>
                {item.name}
            </NavLink>
        </li>
    ))
    // const sendToPage = (event) => {
    //     if (event.target.id === 'js-data-contact') {
    //         console.log('kontakt');
    //     }
    //     if (event.target.id === 'js-data-help') {
    //         console.log('help');
    //     }
    // };

    const handleHamburgerClick = (e) => {
        e.preventDefault()
        setIsOpenMenu(!isOpenMenu)
    }

    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    {/* <h1 className={styles.title}>Aplikacja_name</h1> */}
                </div>

                <nav className={styles.nav}>
                    <div
                        className={styles.hamburger}
                        onClick={handleHamburgerClick}
                    >
                        <div
                            className={`${styles.bar1} ${
                                isOpenMenu ? styles.bar1Change : ''
                            }`}
                        ></div>
                        <div
                            className={`${styles.bar2} ${
                                isOpenMenu ? styles.bar2Change : ''
                            }`}
                        ></div>
                        <div
                            className={`${styles.bar3} ${
                                isOpenMenu ? styles.bar3Change : ''
                            }`}
                        ></div>
                    </div>
                    <ul
                        className={`${styles.menu} ${
                            isOpenMenu ? styles.menuShow : ''
                        }`}
                        onClick={handleHamburgerClick}
                    >
                        {menu}
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Header
