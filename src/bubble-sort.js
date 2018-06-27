const bubbleSort = (arr) => {
  let done = false

  while (!done) {
    done = true

    for (let i = 0; i < arr.length - 1; i++) {
      let j = i + 1

      if (arr[i] > arr[j]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        done = false
      }
    }
  }
  return arr
}

module.exports = { bubbleSort }
