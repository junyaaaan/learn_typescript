import bar, { hello } from './sample2-11-bar'
import * as bar2 from './sample2-11-bar'
import bar3 = require('./sample2-11-bar')

console.log(hello())
console.log(bar())

console.log(bar2.hello())
console.log(bar2.default)

console.log(bar3.hello)
console.log(bar3.default)

// import * as buzz from './sample2-11-buzz'
import buzz2 = require('./sample2-11-buzz')

// console.log(buzz())
console.log(buzz2())
