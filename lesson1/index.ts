let myNumber = 2021;
let myString = 'typescript';
let myBoolean = true;
let myObject = {};
let myFunction = () => {};
let myUndefined = undefined;

console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBoolean);
console.log(typeof myObject);
console.log(typeof myFunction);
console.log(typeof myUndefined);

let num1: number = 100;
let num2: number = 0b100;
let num3: number = 0x100;

let num4: number = 123454;
let str1: string = num4.toString();

num4.toFixed();

str1.toUpperCase();
str1.toLowerCase();

// num4.toLowerCase();

function formatNumber(number: number): string {
    return number.toFixed(2);
}
console.log(formatNumber(2));
console.log(formatNumber(100));
console.log(formatNumber(1000));

