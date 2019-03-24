"use strict";
class Base {
    constructor() {
        this.a = 'a';
        this.b = 'b';
        this.c = 'c';
        this.d = 'd';
    }
    method() {
        this.d;
    }
}
class Inherit extends Base {
    method() {
        this.a;
        this.b;
        this.c;
        // エラーになる
        // this.d
    }
}
const base = new Base();
base.a;
base.b;
// エラーになる
// base.c
// base.d
//# sourceMappingURL=sample2-4.js.map