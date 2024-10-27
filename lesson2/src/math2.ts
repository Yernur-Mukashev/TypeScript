import { sum, sub, mul, div } from "./math";

console.log('sum', sum(1, 2)); // ?
console.log('sub', sub(1, 2)); // ?
console.log('mul', mul(1, 2)); // ?
console.log('div', div(1, 2)); // ?

function getStringOrNull(): string | null {
    return null;
}

let string = getStringOrNull();

if (typeof string === 'string') {
    string.toString();
}

import { writeFile } from "fs";