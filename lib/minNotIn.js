module.exports = function minNotIn(input) {
  if (!input) throw new Error('Expected an array as input, received none.');
  if (typeof input !== 'object') {
    throw new Error('Expected an array as input, received another type.');
  }

  // if (typeof input === 'number') {
  //   return 'Error: function minNotIn expected an array, received a number.';
  // }

  let result = 1;

  for (let i = 1; i <= input.length; i += 1) {
    if (input.includes(i)) {
      continue;
    }
    result = i;
    break;
  }

  return result;
};
