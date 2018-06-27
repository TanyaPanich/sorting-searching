const { expect } = require('chai')

const { bubbleSort } = require('../src/bubble-sort')

describe('bubble sort', function () {
  it('trivial test', function () {
    const sortThis = [1, 2, 3]
    const expected = [1, 2, 3]
    const actual = bubbleSort(sortThis)
    expect(actual).to.deep.equal(expected)
  })

  it('sort NO dupes', function () {
    const sortThis = [33, 1, 78, -10, 22]
    const expected = [-10, 1, 22, 33, 78]
    const actual = bubbleSort(sortThis)
    expect(actual).to.deep.equal(expected)
  })

  it('sort WITH dupes', function () {
    const sortThis = [33, 1, 78, -10, -10]
    const expected = [-10, -10, 1, 33, 78]
    const actual = bubbleSort(sortThis)
    expect(actual).to.deep.equal(expected)
  })
})
