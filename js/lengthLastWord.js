var lengthOfLastWord = function (s) {
  s = s.trim();

  let words = s.split(" ");

  console.log(words[words.length - 1].length);
};

lengthOfLastWord("yabets is fast");
