let myString: string | null = null;

myString = 'TypeScript';

function parseDate(dateOrString: Date | string): Date {
    return new Date(dateOrString);
}

parseDate(new Date());
parseDate('2021-09-23');

function toLowerCase(stringOrNumber: string | number): string {
    if (typeof stringOrNumber === 'string') {
        return stringOrNumber.toLowerCase();
    }

    if (typeof stringOrNumber === 'number') {
        return stringOrNumber.toString();
    }

    return '';
}

toLowerCase(123);
toLowerCase('123');

console.log(toLowerCase(123 + 23));
console.log(toLowerCase('123'));