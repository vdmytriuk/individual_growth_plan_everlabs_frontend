import { FC, useState } from 'react';

interface IAutoBatchingProps {

}

const simulateFetch = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
};

const AutoBatching: FC<IAutoBatchingProps> = () => {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);

        simulateFetch().then(() => {
            setCount(prevCount => prevCount + 1);
            setIsLoading(false);
        });
    };

    return (
        <div>
            <h2>Auto Batching Example</h2>

            <button onClick={handleClick}>
                Increment Count
            </button>

            <p>Count: {count}</p>

            {isLoading && <p>Loading...</p>}
        </div>
    );
};

export default AutoBatching;