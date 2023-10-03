// Define a function to demonstrate conditional type IsBoolean
var isBooleanFunc = function (value) {
    if (typeof value === "boolean") {
        return "yes";
    }
    return "no";
};
var result = isBooleanFunc(true);
console.log(result); // Output should be "yes"
// Define a function to demonstrate conditional type ArrayElement
var arrayElementFunc = function (array) {
    return array[0];
};
var elementType = arrayElementFunc(["string"]);
console.log(elementType); // Output should be "string"
