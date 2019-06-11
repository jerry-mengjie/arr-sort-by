"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sortBy = function sortBy(arr, prop, desc) {
  if (!(arr instanceof Array)) {
    console.error("sortBy Error:", "arr is not an array");
  }
  var newArr = [];
  var props = [];
  var sortNumber = false;

  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    var propData = item && item[prop] || '';
    (props[i] = new String(propData))._obj = item;
  }

  for (var _i = 0; _i < arr.length; _i++) {
    if (typeof arr[_i][prop] === 'number') {
      sortNumber = true;
      break;
    } else {
      if (typeof arr[_i][prop] === 'string') {
        sortNumber = false;
        break;
      }
    }
  }
  if (sortNumber) {
    props.sort(function (a, b) {
      return a - b;
    });
  } else {
    props.sort();
  }

  for (var _i2 = 0; _i2 < arr.length; _i2++) {
    newArr[_i2] = props[_i2]._obj;
  }
  if (desc === 'desc') newArr.reverse();
  return newArr;
};
exports.default = sortBy;