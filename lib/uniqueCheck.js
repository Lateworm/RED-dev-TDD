module.exports = function uniqueCheck(string) {
  for (let i = 0; i < string.length; i += 1) {
    const char = string.charAt(i);
    if (string.indexOf(char) === i && string.indexOf(char, i + 1) === -1) {
      return char;
    }
  }

  return undefined;
};
