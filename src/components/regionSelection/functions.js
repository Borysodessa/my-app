export const years = function years(number, [one, few, many]) {
  if (number >= 11 && number <= 14) {
    return many;
  }

  if (number % 10 === 1) {
    return one;
  }

  if (number % 10 >= 2 && number % 10 <= 4) {
    return few;
  }

  if (number >= 2 && number <= 4) {
    return few;
  }
  return many;
};
