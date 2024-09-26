var romanToInt = function (s) {
  const Map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const currentVal = Map[s[i]];
    const nextVal = Map[s[i + 1]];

    if (currentVal < nextVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }

  console.log(total);
};

romanToInt("III");
