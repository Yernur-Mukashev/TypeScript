// Задание 2. Объединение типов и массивов
// Что нужно сделать:
// -Напишите типы, которыми можно будет корректно описать данные структуры, используя объединения в TypeScript.
// -При выполнении задания обратите внимание на то, что лежит в переменных. При возникновении трудностей с выполнением задания обсудите вопрос с проверяющим куратором в форме для сдачи работы.
// /*
// const arr0 = [1, 2, 3] // number[]
// */
// const arr1 = [1, 2, 3, null];
// const arr2 = ['safety', '=', true]
// const arr3 = [
// [1, 2, 3, 4, 5],
// ['1', '2', '3', '4', '5'],
// ]
// const arr4 = [
// 1, 2, true, 'str', undefined
// ]

// const arr5 = [
// {
// id: 1,
// name: 'Студент',
// },
// {
// id: 2,
// name: 'Наставник',
// }
// ]

const arr0: (number)[] = [1, 2, 3]

const arr1: (number | null)[] = [1, 2, 3, null];

const arr2: [string, string, boolean] = ['safety', '=', true];

const arr3: [number[], string[]] = [
    [1, 2, 3, 4, 5],
    ['1', '2', '3', '4', '5'],
];

const arr4: (number | boolean | string | undefined)[] = [1, 2, true, 'str', undefined];

const arr5: { id: number; name: string }[] = [
    {
        id: 1,
        name: 'Студент',
    },
    {
        id: 2,
        name: 'Наставник',
    },
];