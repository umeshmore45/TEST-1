/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */

// const isString = (num) => {

//     if (typeof num == "number") {
//       return true;
//     } else {
//       throw new Error "Inavlid Input";
//     }

// };

const convertTime = (seconds) => {
  if (typeof seconds == "number") {
    const timeObject = {};

    timeObject.hours = Math.floor(seconds / 60 / 60);

    timeObject.minutes = Math.floor(seconds / 60) - timeObject.hours * 60;

    timeObject.seconds = seconds % 60;

    return Object.keys(timeObject);
  } else {
    throw new Error("Invalid Input");
  }
};

// console.log(convertTime(3600));

module.exports = convertTime;

// const correctConversion = (hours, minutes, seconds) => {
//   let hoursstr = 0;
//   let minutesstr = 0;
//   let secondsstr = 0;
//   if (hours < 10) {
//     hoursstr = `0${hours}`;
//   } else {
//     hoursstr = hours;
//   }

//   if (minutes < 10) {
//     minutesstr = `0${minutes}`;
//   } else {
//     minutesstr = minutes;
//   }

//   if (seconds < 10) {
//     secondsstr = `0${seconds}`;
//   } else {
//     secondsstr = seconds;
//   }

//   return `${hoursstr}:${minutesstr}:${secondsstr}`;
// };
