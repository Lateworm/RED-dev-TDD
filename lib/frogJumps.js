module.exports = function (start, end, jumpLength) {
  return Math.ceil(Math.abs((end - start) / jumpLength));
};
