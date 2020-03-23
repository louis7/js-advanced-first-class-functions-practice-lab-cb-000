// Code your solution in this file!
const logDriverNames = function (element) {
  console.log("${element}");
};

const myForEach = function (arr, cb) {
  for (const el of arr) {
    cb(el, arr.indexOf(el), arr);
  }
};
