import {FC} from "react";

import {useLocalStorage} from "../hooks";

const CustomHookExample: FC = () => {
    const [name, setName] = useLocalStorage<string>('username', 'Valik');

    return (
        <div>
            <p>{name}</p>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
}

export default CustomHookExample;
