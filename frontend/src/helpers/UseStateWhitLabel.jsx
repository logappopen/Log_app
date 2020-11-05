import { useState, useDebugValue } from 'react';

const useStateWithLabel = (name, initialValue) => {
    const [value, setValue] = useState(initialValue);
    useDebugValue(`${name}: ${value}`);
    return [value, setValue];
};
export default useStateWithLabel;
