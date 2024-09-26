var plusOne = function (digits) {
  var Len = digits.length;
  if (digits[Len] == 9) {
    digits[Len] = 0;
    digits[Len - 1] = ",";
    digits[Len - 2] = 1;
    return digits;
  } else {
    let total = 0;
    digits[Len - 1] = digits[Len - 1] + 1;
    return digits;
  }
};
digit = [9];
plusOne(digit);
digits = [4, 3, 2, 1];
plusOne(digits);
