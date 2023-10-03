import {FC} from "react";

const BugComponent: FC = () => {
    throw new Error("Bug!");
};

export default BugComponent;
