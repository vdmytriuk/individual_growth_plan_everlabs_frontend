import { FC, ReactNode, useState, MouseEvent as ReactMouseEvent } from 'react';

interface IMousePosition {
    x: number;
    y: number;
}

interface IMouseTrackerProps {
    render: (data: IMousePosition) => ReactNode;
}

const MouseTracker: FC<IMouseTrackerProps> = ({ render }) => {
    const [position, setPosition] = useState<IMousePosition>({ x: 0, y: 0 });

    const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
        setPosition({
            x: event.clientX,
            y: event.clientY
        });
    };

    return (
        <div style={{ height: '30vh', backgroundColor: "gray" }} onMouseMove={handleMouseMove}>
            {render(position)}
        </div>
    );
};

export default MouseTracker;
