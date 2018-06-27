const merge = (left, right) => {
  const result = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    }
    else {
      result.push(right.shift())
    }
  }

  while (left.length) {
    result.push(left.shift())
  }

  while (right.length) {
    result.push(right.shift())
  }

  return result
}

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr
  }

  // Remember JS does not have integer division, so we need floor.
  const middle = Math.floor(arr.length / 2)

  // With slice, the upper bound is exclusive.
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

module.exports = { merge, mergeSort }
