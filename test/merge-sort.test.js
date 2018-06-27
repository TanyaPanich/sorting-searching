const { expect } = require('chai')

const { merge, mergeSort } = require('../src/merge-sort')

describe('merge()', function () {
  it('returns an empty array when left and right are empty', function () {
    const left = []
    const right = []
    const expected = []
    const actual = merge(left, right)

    expect(actual).to.deep.equal(expected)
  })

  it('merges two sorted arrays of EQUAL size', function () {
    const left = [1, 3]
    const right = [2, 4]
    const expected = [1, 2, 3, 4]
    const actual = merge(left, right)

    expect(actual).to.deep.equal(expected)
  })

  it('merges two sorted arrays of UNEQUAL size', function () {
    const left = [1, 3]
    const right = [2, 4, 6, 7, 8]
    const expected = [1, 2, 3, 4, 6, 7, 8]
    const actual = merge(left, right)

    expect(actual).to.deep.equal(expected)
  })
})

describe('mergeSort()', function () {
  it('keeps an even-length array that is already sorted unchanged', function () {
    const sortThis = [1, 22, 33, 44]
    const expected = [1, 22, 33, 44]
    const actual = mergeSort(sortThis)

    expect(actual).to.deep.equal(expected)
  })

  it('keeps an odd-length array that is already sorted unchanged', function () {
    const sortThis = [1, 22, 33, 44, 62]
    const expected = [1, 22, 33, 44, 62]
    const actual = mergeSort(sortThis)

    expect(actual).to.deep.equal(expected)
  })

  it('sorts an even length array', function () {
    const sortThis = [67, -10, 56, 23]
    const expected = [-10, 23, 56, 67]
    const actual = mergeSort(sortThis)

    expect(actual).to.deep.equal(expected)
  })

  it('sorts an odd length array with duplicates', function () {
    const sortThis = [-10, -10, 56, 23, 11]
    const expected = [-10, -10, 11, 23, 56]
    const actual = mergeSort(sortThis)

    expect(actual).to.deep.equal(expected)
  })
})
