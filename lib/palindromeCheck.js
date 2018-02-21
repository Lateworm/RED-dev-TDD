module.exports = function isPalindrome(candidate) {
  const stripped = candidate.replace(/[^a-z0-9]+/gi, '').toLowerCase();
  const reversed = stripped
    .split('')
    .reverse()
    .join('');

  if (stripped === reversed) {
    return true;
  }
  return false;
};
