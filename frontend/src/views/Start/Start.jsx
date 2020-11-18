import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Start.module.scss';
import { isLogged } from '../../helpers/helpers';

const list = [
    { name: 'logowanie', path: '/login', exact: true },
    { name: 'rejestracja', path: '/registration' },
    { name: 'szybki start', path: '/free_start' },
];

const StartPage = () => {
    const menu = list.map((item) => {
        if ((item.name === 'logowanie' || item.name === 'rejestracja') && isLogged()) {
            return null;
        }
        return (
            <li key={item.name}>
                <NavLink to={item.path} exact={item.exact ? item.exact : false}>
                    {item.name}
                </NavLink>
            </li>
        );
    });

    return (
        <>
            <div className={styles.wrapper}>
                <nav className={styles.nav}>
                    <ul className={styles.link}>{menu}</ul>
                </nav>
            </div>
        </>
    );
};

export default StartPage;
