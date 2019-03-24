class Base {
  a = 'a'
  public b = 'b'
  protected c = 'c'
  private d = 'd'

  method() {
    this.d
  }
}

class Inherit extends Base {
  method() {
    this.a
    this.b
    this.c

    // エラーになる
    // this.d
  }
}

const base = new Base()
base.a
base.b

// エラーになる
// base.c
// base.d
