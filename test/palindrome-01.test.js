const { expect } = require('chai')

const { palindrome } = require('../src/palindrome-01')

describe('palindrome', function() {
  it(`says 'X' is a palindrome`, function() {
    const testThis = 'X'
    const expected = true
    const actual = palindrome(testThis)
    expect(expected).to.equal(actual)
  })
  it(`says '' is a palindrome`, function() {
    const testThis = ''
    const expected = true
    const actual = palindrome(testThis)
    expect(expected).to.equal(actual)
  })
  it(`says 'XYX' is a palindrome`, function() {
    const testThis = 'XYX'
    const expected = true
    const actual = palindrome(testThis)
    expect(expected).to.equal(actual)
  })
  it(`says 'XYA' is not a palindrome`, function() {
    const testThis = 'XYA'
    const expected = false
    const actual = palindrome(testThis)
    expect(expected).to.equal(actual)
  })
})
