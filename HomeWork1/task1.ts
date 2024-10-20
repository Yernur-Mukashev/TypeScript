// Задание 1. Ошибка в коде
// Что нужно сделать:
// Разработчики не только пишут код сами, но и работают с готовым кодом коллег. В этом задании необходимо:
// -Найти и исправить ошибку в чужом коде.
// -Написать небольшой сопроводительный текст, в котором вы:
// объясните причину возникновения ошибок;
// опишете, как TypeScript помогает их избежать.
// -Если объяснение покажется вам достаточно очевидным — это нормально, так и должно быть. Цель подобного рассуждения — научиться анализировать принципы работы с кодом, так как важно не только уметь писать хороший код, но и понимать, как он работает, зачем и почему стоит выбрать тот или иной способ решения задачи.
// Код:

const actor: {
    name: string;
    firstName: string;
    country: string;
    city: string;
    hasOskar: boolean;
    filmsCount: number;
    age: number;
    languages: string[];
} = {
    name: 'Michael',
    firstName: 'Ivanov',
    country: 'Russia',
    city: 'Makhachkala',
    hasOskar: false,
    filmsCount: 10,
    age: 14, // тут должно быть числовое значение, а не стринговое. Из за этого он не прибовляет а просто скалдаывает и получается '1420', а должно 34!
    languages: ['RU-ru', 'EN-us', 'TR-tr'],
};
const howOldWillBeActorAfterTwentyYears = (actor) => {
    return actor.age + 20;
}
console.log(howOldWillBeActorAfterTwentyYears(actor)); // '1420'

// Примечание:
// Мы ещё не касались типизации объектов, но приведённый пример подробно рассмотрен далее в курсе.
// Критерии оценки:
// Принято: ошибка в коде исправлена, присутствует корректное рассуждение.
// На доработку: ошибка не исправлена и/или рассуждение отсутствует.