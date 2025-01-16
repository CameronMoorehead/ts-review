import addNumbers, { addStrings, format, printFormat, getName } from './functions';

console.log(addNumbers(1, 2));
console.log(addStrings('Hello', 'World'));
console.log(addStrings('Hello'));

printFormat('Hello', 1);
console.log(getName({ first: "Cameron", last: "Moorehead"}))