// foo.js
// module.exports = {
//   a: 1
// }
// exports.b = 2;

// console.log(module.exports === exports);	// false
// console.log(module.exports);				// { a: 1 }
// console.log(exports);						// { b: 2 }


module.exports = {
	a: 1
}
exports = function A() {} 

console.log(module.exports === exports); // false