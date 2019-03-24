"use strict";
function hello(word) {
    return `Hello ${word}`;
}
hello('typescript');
function bye(word) {
    return `Bye ${word}`;
}
bye('typescript');
function hey(word) {
    return `Hey, ${word || 'typescript'}`;
}
hey();
function ahoy(word = 'typescript') {
    return `Ahoy, ${word}`;
}
ahoy();
//# sourceMappingURL=sample2-7.js.map