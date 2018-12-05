let arr = [
  {
    sort: 2
  },
  {
    sort: 0
  },
  {
    sort: 1
  }
]

console.log(arr.sort((a, b) => (a.sort > b.sort ? 1 : -1)))
