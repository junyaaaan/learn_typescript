"use strict";
class Animal {
    sleep() {
        return 'zzzZZZ...';
    }
}
// エラーになる
// new Animal()
class Cat extends Animal {
    constructor() {
        super(...arguments);
        this.name = 'cat';
        this.poo = 'poo';
    }
    speak() {
        return 'meow';
    }
}
new Cat();
//# sourceMappingURL=sample2-6.js.map