import {
    BugComponent,
    MouseTracker,
    CustomHookExample,
    HocExampleComponent,
    ErrorBoundariesExample,
} from "@components";

const App = () => {
    return (
        <>
            <h3>Render props pattern example</h3>

            <MouseTracker
                render={({x, y}) => (
                    <h1>
                        The mouse position is ({x}, {y})
                    </h1>
                )}
            />



            <h3>Higher-order component pattern example</h3>

            <HocExampleComponent isLoading={true} data={['Item1', 'Item2']} />



            <h3>Custom hook example</h3>

            <CustomHookExample/>


            <h3>Error boundaries example</h3>

            <ErrorBoundariesExample>
                <BugComponent/>
            </ErrorBoundariesExample>
        </>
    );
};

export default App;