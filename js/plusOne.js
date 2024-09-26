// var plusOne = function (digits) {
//   var Len = digits.length;
//   if (digits[Len] == 9) {
//     digits[Len] = 0;
//     digits[Len - 1] = ",";
//     digits[Len - 2] = 1;
//     return digits;
//   } else {
//     let total = 0;
//     digits[Len - 1] = digits[Len - 1] + 1;
//     return digits;
//   }
// };

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }
  digits.unshift(1);
  console.log(digits);
};
// If all digits are 9, we reach here (e.g., [9,9,9] becomes [0,0,0]),
// so we need to add a 1 at the beginning of the array

digit = [9];
plusOne(digit);
digits = [4, 3, 2, 1];
plusOne(digits);
