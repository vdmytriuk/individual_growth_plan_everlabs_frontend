// Define a function to demonstrate conditional type IsBoolean
const isBooleanFunc = <T>(value: T) => {
    type Result = T extends boolean ? "yes" : "no";

    if (typeof value === "boolean") {
        return "yes" as Result;
    }

    return "no" as Result;
};

const result = isBooleanFunc(true);

console.log(result);  // Output should be "yes"



// Define a function to demonstrate conditional type ArrayElement
const arrayElementFunc = <T>(array: T[]) => {
    type Element = T extends (infer U)[] ? U : never;

    return array[0] as Element;
};

const elementType = arrayElementFunc(["string"]);

console.log(elementType);  // Output should be "string"
