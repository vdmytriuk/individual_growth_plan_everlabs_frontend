import { FC, useState, useTransition } from 'react';

const fetchData = async (query: string) => {
    return new Promise<string[]>((resolve) => {
        setTimeout(() => {
            resolve([`${query}1`, `${query}2`, `${query}3`]);
        }, 1000);
    });
};

interface IUseTransitionProps {

}

const UseTransition: FC<IUseTransitionProps> = () => {
    const [query, setQuery] = useState<string>('');
    const [data, setData] = useState<string[]>([]);
    const [isPending, startTransition] = useTransition();

    const handleSearch = () => {
        startTransition(() => {
            (async () => {
                const newData = await fetchData(query);
                setData(newData);
            })();
        });
    };

    return (
        <div>
            <h2>useTransition Example</h2>

            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <button onClick={handleSearch}>
                Search
            </button>

            {isPending ? <p>Loading...</p> : null}

            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default UseTransition;