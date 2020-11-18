/* eslint-disable import/prefer-default-export */
import { useState, useDebugValue } from 'react';

export const useStateWithLabel = (name, initialValue) => {
    const [value, setValue] = useState(initialValue);
    useDebugValue(`${name}: ${value}`);
    return [value, setValue];
};

export const checkEmail = (email = false) => {
    // don't remember from where i copied this code, but this works.
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
};

export const isLogged = () => {
    return JSON.parse(localStorage.getItem('LogAppUser')) || false;
};
