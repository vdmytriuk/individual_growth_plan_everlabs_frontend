import {FC, ComponentType} from 'react';

interface IWithLoaderProps {
    isLoading: boolean;
}

const withLoader = <P extends object>(
    WrappedComponent: ComponentType<P>
): FC<P & IWithLoaderProps> => ({ isLoading, ...props }) => {
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <WrappedComponent {...(props as P)} />;
};

export default withLoader;
