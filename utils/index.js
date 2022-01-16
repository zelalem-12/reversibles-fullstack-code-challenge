const isReversible = (num) => {
  let numReverse = num.toString().split("").reverse().join("");
  if (numReverse.startsWith("0")) return false;
  numReverse = parseInt(numReverse);
  const sum = num + numReverse;
  return sum
    .toString()
    .split("")
    .map((digit) => parseInt(digit))
    .every((digit) => digit % 2 !== 0);
};

const reversibleNumbers = (number) => {
  let numbers = [];
  let count = 0;
  for (let i = 1; i <= number; i++)
    if (isReversible(i)) {
      numbers.push(i);
      count++;
    }
  return { count, numbers };
};

module.exports = {
  reversibleNumbers,
};
