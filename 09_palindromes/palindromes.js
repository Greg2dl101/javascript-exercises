const palindromes = function (str) {
  const punctuation = /[\.,?!\s]/g;
  str = str.replace(punctuation, "");
  str = str.toLowerCase();
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
