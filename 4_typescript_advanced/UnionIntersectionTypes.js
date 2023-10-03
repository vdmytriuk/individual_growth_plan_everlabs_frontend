// Union Types
var printUnionType = function (value) {
    console.log("Union Type Value: ".concat(value));
};
printUnionType("hello");
printUnionType(42);
var athlete = {
    walk: function () { return console.log("Walking"); },
    run: function () { return console.log("Running"); }
};
