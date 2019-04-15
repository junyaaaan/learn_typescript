async function main() {
  const sub = await import('./sample2-12-sub')
  console.log(sub.hello())
}

function mainAnother() {
  import('./sample2-12-sub').then(sub => {
    console.log(sub.hello())
  })
}

main()
