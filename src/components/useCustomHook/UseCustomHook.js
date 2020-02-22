import {useState} from 'react';

const UseCustomHook = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    return { count, setCount, increment};
}

export default UseCustomHook;