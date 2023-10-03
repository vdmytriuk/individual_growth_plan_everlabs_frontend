// keyof
type Person = { name: string; age: number };

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key];

const person: Person = { name: "John", age: 30 };

console.log(getProperty(person, "name"));

// typeof
const someNumber = 42;
type SomeNumberType = typeof someNumber;

const printType = (value: SomeNumberType) => {
    console.log(`Typeof Value: ${value}`);
};

printType(someNumber);
