/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */
// const isNumber = (num) => {
//   try {
//     if (!num.some(isNaN)) {
//       return true;
//     } else {
//       throw "Invalid Input";
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// const isLes = (num) => {
//   const less = (currentValue) => currentValue < 256;
//   try {
//     if (num.every(less)) {
//       return true;
//     } else {
//       throw "Invalid Input";
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// const isLength = (num) => {
//   try {
//     if (num.length < 4) {
//       return true;
//     } else {
//       throw "Invalid Input";
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

const rgbToHexConversion = (...rgbValues) => {
  const less = (currentValue) => currentValue < 256;
  if (rgbValues.length < 4 && rgbValues.every(less)) {
    let r = rgbValues[0];
    let g = rgbValues[1];
    let b = rgbValues[2];
    return (hex = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(
      b
    )}`);
  } else {
    throw new Error("Invalid Input");
  }
};

function componentToHex(r) {
  var hex = r.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

module.exports = rgbToHexConversion;
