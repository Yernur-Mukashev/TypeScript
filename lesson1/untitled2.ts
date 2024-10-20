/**
 * Функция ищет самое длинное слово в строке и возвращает его
 * @param text - строка текста для анализа
 * @returns самое длинное слово или null, если текст пустой
 */

function findLongestWord(text: string): string {
    let whitespace: string = ' ';
    let words: string[] = text.split(whitespace);
    let longestWord: string | null = null;

    for (let word of words) {
        if (word.length > (longestWord?.length ?? 0)) {
            longestWord = word;
        }
    }

    return longestWord;
}

let longestWord = findLongestWord(`
    Lorem ipofjidfoj psdfj od sd sjfj f jdfjfjd
    jjjjjdkl ;s;skd; skd  jljfdjlgdjgjdlg
    `);

console.log(longestWord);