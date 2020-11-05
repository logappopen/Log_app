import React, { useContext } from 'react';

import { StoreContext } from '../../../store/StoreProvider';

const LoadInfo = () => {
    const { loadData } = useContext(StoreContext);

    return (
        <div>
            <p>{loadData ? `Wybrany pojazd:${loadData}` : null}</p>
        </div>
    );
};

export default LoadInfo;
