const greatestDivisor = (value1, value2) => {
  let divisor;
  for (let i = 1; i <= value1 && i <= value2; i += 1) {
    if (value1 % i === 0 && value2 % i === 0) {
      divisor = i;
    }
  } return divisor.toString();
};

export default greatestDivisor;
