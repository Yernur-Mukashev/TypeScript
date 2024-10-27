type Language = 'ru-RU' | 'en-US';

function translate(language: Language, text: string): string {
    return text;
}

translate('ru-RU', '');
translate('en-US', '');
// translate('ch-ZN', '');

let language: Language;

language = 'ru-RU';
language = 'en-US';
// language = 'ch-ZN';

type Direction = -1 | 0 | 1;

function reload(force?: true) {
    
}