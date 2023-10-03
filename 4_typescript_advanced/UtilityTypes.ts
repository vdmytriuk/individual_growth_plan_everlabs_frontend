// Define the Person type first
type Person = { name: string; age: number };


// ------- Partial -------
type PartialPerson = Partial<Person>;

const partialPerson: PartialPerson = { name: "John" };

console.log(partialPerson);


// ------- Required -------
type RequiredPerson = Required<Person>;

const requiredPerson: RequiredPerson = { name: "John", age: 30 };

console.log(requiredPerson);


// ------- Omit -------
type OmitAgePerson = Omit<Person, "age">;

const omitAgePerson: OmitAgePerson = { name: "John" };

console.log(omitAgePerson);
