function helloArgs(...args: string[]) {
  return `Hello ${args.join(' & ')}`
}

console.log(helloArgs('TS', 'JS'))
