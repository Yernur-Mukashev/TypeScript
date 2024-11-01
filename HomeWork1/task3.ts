// Задание 3. Использование нетипизированного кода
// Что нужно сделать:
// Представьте, что вас подключили к проекту, над которым работали другие разработчики. Вы увидели в коде проекта два фрагмента, назначение которых нигде не объяснено. Предположите, какую функцию выполняет каждая часть кода и для каких целей их надо применить.

// Первая часть кода:

function someFunction(data) { // Эта функция, подсчитывает количество мужчин старше 18 лет, но типы элементов массива не определены. Это фунцию используют в javascript.
    return data.reduce((acc, current) =>
        acc + Number(current.age > 18 && current.isMale), 0);
};


// Вторая часть кода:
type Human = { // Тут тоже самое идет подсчет количество мужчин старше 18 лет в массиве объектов типа Human. Эту часть использует TypeScript для явного указания типов.
    name: string,
    age: number,
    gender: 'male' | 'female',
}
function someFunc(data: Human[]): number { // Поскольку обе функция состоит из одного выражения, в таких случаях можно использовать стрелочную функцию без фигурных скобок.
    return data.reduce((acc: number, current: Human) =>
        acc + Number(current.age > 18 && current.gender === 'male'), 0);
};


// Критерии оценки:
// Принято: в рассуждениях присутствуют корректные тезисы.
// На доработку: корректные тезисы отсутствуют.