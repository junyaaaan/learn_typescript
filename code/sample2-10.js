"use strict";
function returnByPromise(word) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(word);
        }, 100);
    });
}
async function helloAsync() {
    console.log('A');
    const word = await returnByPromise('typescript');
    console.log(word);
    console.log('B');
    return `Hello ${word}`;
}
// ;(async () => {
//   const hello = await helloAsync()
//   console.log(hello)
// })()
helloAsync().then(hello => {
    console.log(hello);
});
//# sourceMappingURL=sample2-10.js.map