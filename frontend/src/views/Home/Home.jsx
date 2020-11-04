import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './Home.module.scss';
import StoreProvider from '../../store/StoreProvider';

import Header from '../../components/Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <Router>
            <div className={styles.container}>
                <StoreProvider>
                    <div className={styles.header}>
                        <Header />
                    </div>
                    <div className={styles.section}>
                        <Main />
                    </div>
                    <div className={styles.footer}>
                        <Footer />
                    </div>
                </StoreProvider>
            </div>
        </Router>
    );
};

export default Home;
