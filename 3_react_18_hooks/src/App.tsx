import {
    AutoBatching,
    UseDeferredValueExample,
    StartTransition,
    UseTransitionExample
} from "@components";

const App = () => {
    return (
        <>
            <AutoBatching/>

            <StartTransition/>

            <UseDeferredValueExample/>

            <UseTransitionExample/>
        </>
    );
};

export default App;