const person = {
  name: "Anxiel",
  age: 19,
  country: "US",
};

const clone1 = { ...person };
const clone2 = Object.assign({}, person);
const samePerson = person;

person.age += 1;
person.country = "FR";
