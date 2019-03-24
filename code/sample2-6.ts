abstract class Animal {
  abstract name: string
  abstract get poo(): string

  abstract speak(): string
  sleep(): string {
    return 'zzzZZZ...'
  }
}

// エラーになる
// new Animal()

class Cat extends Animal {
  name = 'cat'
  poo = 'poo'

  speak(): string {
    return 'meow'
  }
}

new Cat()
