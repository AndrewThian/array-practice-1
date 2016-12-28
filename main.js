// importing our helper method, helper.test()
var helper = require('./test-helper-functions')

/* ---------------------- EXERCISE 1 ---------------------- */
// Write a JavaScript function which accept a number as input and insert dashes (-) between each two even numbers. (Sample input: 025486, Sample output: 0-254-8-6)

function dash (numString) {
  // define your function here
  var arr = numString.split('').map(Number)
  var output = arr.map(function (value, index) {
    if ((value % 2 === 0) && (arr[index + 1] % 2 === 0)) {
      return value + '-'
    } else {
      return value
    }
  }).join('')
  return output
}

helper.test(dash('025486'), '0-254-8-6')
helper.test(dash('013425680'), '0134-256-8-0')  // check that your function works as expected

/* ---------------------- EXERCISE 2 ---------------------- */
// Write a Javascript function to find the most frequent item of an array. It should return a string denoting the item and the number of times it occurs in the array. (Sample input: [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3], expected output : 'a (5 times)')

function mostFrequentItem (arr) {
  var searchValue = arr.join('').match(/[a-z]/i)[0]

  result = []
  arr.map(function (value, index) {
    if (value === searchValue) {
      result.push(value)
    }
  })
  return searchValue + ' ' + '(' + result.join('').length + ' times' + ')'
}

// uncomment the following test to run it
helper.test(mostFrequentItem([3, 'b', 'b', 'b', 2, 3, 'b', 3, 'b', 2, 4, 'b', 3]), 'b (6 times)')

/* ---------------------- EXERCISE 3 ---------------------- */
// Write a Javascript function to remove duplicate items from an array (ignore case sensitivity). (Sample input : [1, 'a', 'A', 'b', 2, 2], expected output: [1, 'a', 'b', 2])
function removeDuplicateItems (arr) {
  var updatedArr = []
  var lowerCaseArr = arr.map(function (value) {
    if (typeof value === typeof 'string') {
      updatedArr.push(value.toLowerCase())
    } else {
      updatedArr.push(value)
    }
  })
  console.log(updatedArr)
  var output = []
  var count = {}
  updatedArr.map(function (value, index) {
    console.log(value + ' is currently in the loop..')
    count[value] = count[value] >= 1 ? count[value] + 1 : 1
    console.log(value + ' has a count of: ' + count[value] + '\n------------------------------')
    if (count[value] === 1) {
      output.push(value)
    }
  })
  console.log(output)
  return output
}

helper.test(removeDuplicateItems([1, 'a', 'A', 'b', 2, 2]), [1, 'a', 'b', 2])

/* ---------------------- EXERCISE 4 ---------------------- */
// Write a Javascript function to compute the union of two arrays. (Sample input: union([1, 2, 3], [100, 2, 1, 10]), expected output: [1, 2, 3, 10, 100])
function union (arr1, arr2) {
  var concat = arr1.concat(arr2)
  concat.sort(function (a, b) { return a - b })
  return removeDuplicateItems(concat)
}

helper.test(union([1, 2, 3], [100, 2, 1, 10]), [1, 2, 3, 10, 100])

/* ---------------------- EXERCISE 5 ---------------------- */
// Write a JavaScript function to merge two arrays and removes all duplicates elements.
// (Sample input: mergeArray([1, 2, 3], [2, 30, 1]), expected output: [3, 2, 30, 1])
function mergeArray (arr1, arr2) {
  var concat = arr1.concat(arr2)
  concat.sort(function (a, b) { return a - b })
  return removeDuplicateItems(concat)
}

helper.test(mergeArray([1, 2, 3], [2, 30, 1]), [3, 2, 30, 1])
