function hello(word: string): string {
  return `Hello ${word}`
}

hello('typescript')

function bye(word: string) {
  return `Bye ${word}`
}

bye('typescript')

function hey(word?: string) {
  return `Hey, ${word || 'typescript'}`
}

hey()

function ahoy(word = 'typescript') {
  return `Ahoy, ${word}`
}

ahoy()
