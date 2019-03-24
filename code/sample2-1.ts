{
  let str = '文字列'
  let num = 1
  let bool = true

  let func = () => {}
  let obj = {}

  console.log(str, num, bool, func(), obj)
}

{
  let str: string = '文字列'
  let num: number = 1
  let bool: boolean = true

  let func: Function = () => {}
  let obj: any = {}

  console.log(str, num, bool, func(), obj)
}
