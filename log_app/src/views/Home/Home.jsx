import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './Home.module.scss';

import Header from '../../components/Header/Header';
import Main from '../Main/Main';

class HomePage extends Component {
    render() {
        return (
            <Router>
                <div className={styles.container}>
                    <div className={styles['container__header']}>
                        {<Header />}
                    </div>
                    <div className={styles['container__section']}>
                        {<Main />}
                    </div>
                    <div className={styles['containe__footer']}></div>
                </div>
            </Router>
        );
    }
}

export default HomePage;
