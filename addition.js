/* Addition function takes a list of numbers and returns the sum
1. Take anything between 1 to n arguments and return sum 
2. Throw and error with message "Invalid Input" when no arguments are passed. 
3. Detect non numeric input and throw an error with message "Invalid Input"
*/
// const isEmpty = (num) => {
//   try {
//     if (num.length !== 0) {
//       return true;
//     } else {
//       throw (Error, "Invalid Input");
//     }
//   } catch (err) {
//     console.error("oops", err);
//   }
// };

// const isNonNumeric = (num) => {
//   try {
//     if (!num.some(isNaN)) {
//       return true;
//     } else {
//       throw (Error, "Invalid Input");
//     }
//   } catch (err) {
//     console.error("opps", err);
//   }
// };

const addition = (...numbers) => {
  // all your code

  if (numbers.length !== 0) {
    if (numbers.some(isNaN)) {
      throw new Error("Invalid Input");
    }
    return (result = numbers.reduce((sum = 0, n) => {
      return sum + n;
    }));
  } else {
    throw new Error("Invalid Input");
  }
};
// console.log(addition("a"));

module.exports = addition;
