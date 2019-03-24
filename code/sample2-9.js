"use strict";
function asyncModoki(callback) {
    callback('typescript');
}
asyncModoki(value => console.log(`Hello ${value}`));
asyncModoki((value) => console.log(`Hello ${value}`));
//# sourceMappingURL=sample2-9.js.map