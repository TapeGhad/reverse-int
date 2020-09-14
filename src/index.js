module.exports = function reverse (n) {
  n = Math.abs(n);
  let arr = [];
  while (n > 0) {
      arr.push(n % 10);
      n = Math.floor(n / 10);
  }
  return arr.reduce((final, elem, index) => {
      return final = final + elem * Math.pow(10, arr.length - 1 - index);
  }, 0)
}
