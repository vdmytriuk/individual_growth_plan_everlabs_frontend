import {FC, useState, startTransition, ChangeEvent} from 'react';

const StartTransition: FC = () => {
    const [input, setInput] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const searchItems = (query: string) => {
        const items = ["Apple", "Banana", "Cherry"];

        return items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);

        startTransition(() => {
            setSearchQuery(value);
        });
    };

    const results = searchItems(searchQuery);

    return (
        <div>
            <h2>startTransition Example</h2>

            <input
                type="text"
                value={input}
                onChange={handleChange}
            />

            <ul>
                {results.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default StartTransition;
