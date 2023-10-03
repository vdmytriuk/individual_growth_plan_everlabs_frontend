// Union Types
const printUnionType = (value: string | number) => {
    console.log(`Union Type Value: ${value}`);
};

printUnionType("hello");
printUnionType(42);

// Intersection Types
type Walkable = {
    walk: () => void;
};

type Runnable = {
    run: () => void;
};

type Athletic = Walkable & Runnable;

const athlete: Athletic = {
    walk: () => console.log("Walking"),
    run: () => console.log("Running")
};
