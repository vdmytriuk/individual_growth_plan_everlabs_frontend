import React, { FC, useState, useDeferredValue, useMemo } from 'react';

interface ListItem {
    id: string;
    name: string;
}

interface ListComponentProps {
    item: ListItem;
}

const ListComponent: FC<ListComponentProps> = ({ item }) => {
    return <div>{item.name}</div>;
};

const UseDeferredValueExample: FC = () => {
    const [name, setName] = useState('');
    const deferredName = useDeferredValue(name);

    const largeList: ListItem[] = useMemo(() => {
        const list = [];
        for (let i = 0; i < 10000; i++) {
            list.push({ id: i.toString(), name: `Item ${i}` });
        }
        return list;
    }, []);

    const filteredList = useMemo(() => {
        return largeList.filter((item) => item.name.includes(deferredName));
    }, [deferredName]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <>
            <h2>useDeferredValue Example</h2>

            <input type="text" value={name} onChange={handleChange} />

            {filteredList.map((item) => (
                <ListComponent key={item.id} item={item} />
            ))}
        </>
    );
};

export default UseDeferredValueExample;
