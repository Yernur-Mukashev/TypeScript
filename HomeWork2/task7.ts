// Задание 7. Community (часть 2)
// Что нужно сделать:
// В этом задании нужно доработать код, чтобы раздать роль администратора всем, кто хочет помочь наполнять комьюнити фичами.
// Для этого можно ввести новый тип данных Admin, который будет содержать поля name, age и role. Затем нужно обновить массив persons таким образом, чтобы он мог хранить объекты типов User и Admin. Также нужно обновить функцию logPerson, чтобы она могла выводить в консоль информацию о пользователях с ролью администратора.
// Используйте пример кода ниже, чтобы осуществить доработки:
// type User = {
// name: string;
// age: number;
// occupation: string;
// }

// type Admin = {
// name: string;
// age: number;
// role: string;
// }

// export type Person = unknown; // замените unknown на нужный тип

// export const persons: User[] /* замените User[] на Person[] */ = [
// {
// name: 'Roman Abramov',
// age: 25,
// occupation: 'Millionaire'
// },
// {
// name: 'Jane Doe',
// age: 32,
// role: 'Administrator'
// },
// {
// name: 'Andrey Fox',
// age: 23,
// occupation: 'Developer'
// }
// {
// name: 'Bruce Willis',
// age: 64,
// role: 'World saver'
// }
// ];

// export function logPerson(user: User) { // замените User на Person
// console.log(- ${user.name}, ${user.age});
// }

// persons.forEach(logPerson);

// Критерии оценки:
// Принято:
// Код полностью соответствует техническому заданию.
// В ходе решения корректно использована типизация.
// На доработку:
// Не выполнен один из пунктов выше.


type User = {
    name: string;
    age: number;
    occupation: string;
};

type Admin = {
    name: string;
    age: number;
    role: string;
};

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Roman Abramov',
        age: 25,
        occupation: 'Millionaire',
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator',
    },
    {
        name: 'Andrey Fox',
        age: 23,
        occupation: 'Developer',
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver',
    },
];

export function logPerson(person: Person) {
    if ('role' in person) {
        console.log(`- ${person.name}, ${person.age}, Role: ${person.role}`);
    } else {
        console.log(`- ${person.name}, ${person.age}, Occupation: ${person.occupation}`);
    }
}

persons.forEach(logPerson);
