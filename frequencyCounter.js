/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/

// const isString = (str) => {
//   var letters = /^[a-zA-Z]+$/;
//   try {
//     if (str.match(letters)) {
//       return true;
//     } else {
//       throw "Invalid Input";
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

const frequencyCounter = (str) => {
  // var regex = /^[a-zA-Z]+$/;
  // console.log(str);

  if (typeof str == "string") {
    const Vowels = [];
    const str1 = str.toLowerCase();
    const data = str1.split("");
    let a = 0;
    let e = 0;
    let i = 0;
    let o = 0;
    let u = 0;
    data.forEach((element) => {
      if (element === "a") {
        a++;
      }
      if (element === "e") {
        e++;
      }
      if (element === "i") {
        i++;
      }
      if (element === "o") {
        o++;
      }
      if (element === "u") {
        u++;
      }
    });
    let upa = `a:${a}`;
    let upe = `e:${e}`;
    let upi = `i:${i}`;
    let upo = `o:${o}`;
    let upu = `u:${u}`;
    Vowels.push(upa);
    Vowels.push(upe);
    Vowels.push(upi);
    Vowels.push(upo);
    Vowels.push(upu);

    return Vowels;
  } else {
    throw new Error("Invalid Input");
  }
};

// frequencyCounter(1646);

module.exports = frequencyCounter;
