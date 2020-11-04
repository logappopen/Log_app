import React, { createContext } from 'react';
import useStateWithLabel from '../helpers/UseStateWhitLabel';

const VECHICLES_DATA = [
    { name: 'BUS', dim: [420, 220, 220] },
    { name: 'SOLO', dim: [1200, 250, 250] },
    { name: 'NACZEPA', dim: [1360, 250, 275] },
];
export const StoreContext = createContext(null);

const StoreProvider = (props) => {
    const [vechicleData, setVechicleData] = useStateWithLabel('vechicleData', null);
    const [takeVechicle, setTakeVechicle] = useStateWithLabel('takeVechicle', false);

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

    return (
        <StoreContext.Provider
            value={{ vechicleData, takeVechicleData, takeVechicle, setTakeVechicle }}
        >
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
