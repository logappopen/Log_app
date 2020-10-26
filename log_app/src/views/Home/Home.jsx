import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Main from '../Main/Main';

class HomePage extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <div className="container__header">{<Header />}</div>
                    <div className="container__section">{<Main />}</div>
                    <div className="containe__footer"></div>
                </div>
            </Router>
        );
    }
}

export default HomePage;
