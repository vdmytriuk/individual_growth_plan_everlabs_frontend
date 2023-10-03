var getProperty = function (obj, key) { return obj[key]; };
var person = { name: "John", age: 30 };
console.log(getProperty(person, "name"));
// typeof
var someNumber = 42;
var printType = function (value) {
    console.log("Typeof Value: ".concat(value));
};
printType(someNumber);
