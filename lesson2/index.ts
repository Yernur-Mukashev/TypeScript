let dogName: string = 'Bob';
let dogAge: number = 7;

type Dog = {
    name: string;
    age: number;
};

let dog: Dog = {
    name: 'Bob',
    age: 7
};

let dogs: Dog[] = [
    {
        name: 'Bob',
        age: 7
    },
    {
        name: 'Alice',
        age: 10
    }
];

let dogsArray: Array<Dog> = [
    {
        name: 'Bob',
        age: 7
    },
    {
        name: 'Alice',
        age: 10
    }
];

let dogsReadonlyArray: ReadonlyArray<Dog> = [
    {
        name: 'Bob',
        age: 7
    },
    {
        name: 'Alice',
        age: 10
    }
];

let newDog: Dog = {
    name: 'Charly',
    age: 5
}

let dogsReadonlyArray2: ReadonlyArray<Dog> = [ ...dogsReadonlyArray, newDog ];

let uids: number[] = [1, 2, 3]