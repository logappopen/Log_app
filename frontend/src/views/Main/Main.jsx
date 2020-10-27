import React from 'react';
import { Switch, Route } from 'react-router-dom';

import StartPage from '../Start/Start';
import ContactPage from '../Contact/Contact';
import HelpPage from '../Help/Help';
import LoginPage from '../Login/Login';
import RegistrationPage from '../Registration/Registration';
import FreeStartPage from '../FreeStart/FreeStart';
import LostPasswordPage from '../LostPassword/LostPassword';
import ErrorPage from '../Error/Error';

const Main = (props) => {
    return (
        <Switch>
            <Route path="/" exact component={StartPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/help" component={HelpPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/registration" component={RegistrationPage} />
            <Route path="/free_start" component={FreeStartPage} />
            <Route path="/lost_password" component={LostPasswordPage} />
            <Route path="/empty" component={ErrorPage} />
        </Switch>
    );
};

export default Main;
