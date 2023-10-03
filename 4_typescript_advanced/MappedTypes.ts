// --Mapped Types--

// Define the Person type
type Person = { name: string; age: number };

// Create an Optional mapped type
type Optional<T> = { [K in keyof T]?: T[K] };

// Apply the Optional mapped type to Person
type OptionalPerson = Optional<Person>;

const optionalPerson: OptionalPerson = { name: "John" };

console.log(optionalPerson);
