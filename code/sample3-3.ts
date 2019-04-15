let obj: {
  (word: string): string
}

obj = word => `Hello ${word}`

let str = obj('TypeScript')

console.log(str)
