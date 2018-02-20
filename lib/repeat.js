module.exports = function repeat(input) {
  // const stripped = candidate.replace(/[^a-z0-9]+/gi, '').toLowerCase();
  const split = input.split('');
  const newArray = split.reduce((charAcc, char) => {
    if (charAcc[charAcc.length - 2] === char) {
      charAcc[charAcc.length - 1] += 1;
      return charAcc;
    }
    return charAcc.concat(char, 1);
  }, []);
  return newArray.join('');
};
