import {FC} from "react";

import {withLoader} from "../HOC";

interface IHocExampleComponentProps {
    data: string[];
}

const HocExampleComponent: FC<IHocExampleComponentProps> = ({ data }) => (
    <ul>
        {data.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
);

export default withLoader(HocExampleComponent);