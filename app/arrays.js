exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr
  },

  removeWithoutCopy: function(arr, item) {
    // let test = arr.map(item => item)
    // test.length = 0
    // return arr
  },

  append: function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail: function(arr) {
    arr.shift()
    return arr
  },

  concat: function(arr1, arr2) {
    let test = arr1.concat(arr2)
    return test
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: function(arr, item) {
    let count = arr.reduce((n, x) => n + (x === item), 0);
    return count
  },

  duplicates: function(arr) {
    console.log(arr)
    let count = arr.reduce((n, x) => n = x, 0);
    console.log(count)
    return count
  },

  square: function(arr) {},

  findAllOccurrences: function(arr, target) {}
};
