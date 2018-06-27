// XYX - true
// X - true
// '' - true
// XY - false
// XY|YX - true


const palindrome = (str) => {
  if (str[0] !== str[str.length - 1]) {
    return false
  } else if (str.length < 2) {
    return true
  }
  else {
    return palindrome(str.slice(1, -1))
  }
}

module.exports = { palindrome }
