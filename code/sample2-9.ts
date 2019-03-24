function asyncModoki(callback: (value: string) => void) {
  callback('typescript')
}

asyncModoki(value => console.log(`Hello ${value}`))

asyncModoki((value: string): void => console.log(`Hello ${value}`))
