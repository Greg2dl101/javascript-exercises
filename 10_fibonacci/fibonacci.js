const fibonacci = function (n) {
  if (n >= 1) {
    let a = 0,
      b = 1,
      c,
      i;
    if (n == 0) return a;
    for (i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return b;
  } else {
    return "OOPS";
  }
};

// Do not edit below this line
module.exports = fibonacci;
