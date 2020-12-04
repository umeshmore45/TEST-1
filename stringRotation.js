const rotateString = (str, n, direction) => {
  // console.log(str, n, direction);
  // str = input string
  // n = number of rotations
  //
  // input str = random ,1, right
  // output mrando
  if (typeof str == "string") {
    if (direction == "right" || direction == "left") {
      if (direction == "right") {
        return (text = str[str.length - n] + str.substring(0, str.length - n));
      } else {
        return (text = str.substring(n, str.length) + str.substring(0, n));
      }
    } else {
      throw new Error("Invalid Direction");
    }
  } else {
    throw new Error("Invalid Input");
  }
};

// console.log(rotateString("Surfboard", 1, "right"));
module.exports = rotateString;
