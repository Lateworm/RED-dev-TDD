module.exports = function repeat(input) {
  const split = input.toString().split('');

  const newArray = split.reduce((charAcc, char) => {
    if (charAcc[charAcc.length - 2] === char) {
      charAcc[charAcc.length - 1] += 1;
      return charAcc;
    }
    return charAcc.concat(char, 1);
  }, []);
  return newArray.join('');
};
