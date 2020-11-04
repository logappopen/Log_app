import React, { createContext } from 'react';
import useStateWithLabel from '../helpers/UseStateWhitLabel';

import Message from '../components/Message/Message';

const VECHICLES_DATA = [
    { name: 'BUS', dim: [420, 220, 220] },
    { name: 'SOLO', dim: [1200, 250, 250] },
    { name: 'NACZEPA', dim: [1360, 250, 275] },
];

const LOADS_DATA = [];
export const StoreContext = createContext(null);

const StoreProvider = (props) => {
    // Vehicles
    const [vechicleData, setVechicleData] = useStateWithLabel('vechicleData', null);
    const [takeVechicle, setTakeVechicle] = useStateWithLabel('takeVechicle', false);

    // Load

    const [loadData, setLoadData] = useStateWithLabel('loadData', null);
    const [takeLoad, setTakeLoad] = useStateWithLabel('takeLoad', false);

    // Menu
    const [isOpenMenu, setIsOpenMenu] = useStateWithLabel('isOpenMenu', false);

    // User data
    const [userData, setUserData] = useStateWithLabel('userData', {
        username: null,
        email: null,
        isLogged: false,
        token: null,
    });

    // Message
    const [isVisibleMessage, setIsVisibleMessage] = useStateWithLabel('isVisibleMessage', false);
    const [messageText, setMessageText] = useStateWithLabel('messageText', '');
    const [isMessageAlert, setIsMessageAlert] = useStateWithLabel('isMessageAlert', false);

    // Router links
    const routerLinks = [
        { name: 'start', path: '/', exact: true },
        { name: 'kontakt', path: '/contact' },
        { name: 'pomoc', path: '/help' },
    ];

    const takeVechicleData = () => {
        if (takeVechicle === false) {
            return;
        }
        const datas = VECHICLES_DATA.map((data) => {
            if (data.name === takeVechicle) {
                return ` ${data.name} / dł: ${data.dim[0] / 100}m / szer: ${
                    data.dim[1] / 100
                }m / wys: ${data.dim[2] / 100}m`;
            }
        });
        setVechicleData(datas);
        setTakeVechicle(true);
    };

    const showMessage = (text, isAlert) => {
        setMessageText(text);
        setIsMessageAlert(isAlert);
        setIsVisibleMessage(true);

        setTimeout(() => {
            setIsVisibleMessage(false);
        }, 5000);
    };

    return (
        <StoreContext.Provider
            value={{
                vechicleData,
                takeVechicleData,
                takeVechicle,
                setTakeVechicle,
                loadData,
                setLoadData,
                takeLoad,
                setTakeLoad,
                userData,
                setUserData,
                showMessage,
                routerLinks,
                setIsOpenMenu,
                isOpenMenu,
            }}
        >
            {isVisibleMessage ? <Message message={messageText} alert={isMessageAlert} /> : ''}
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
