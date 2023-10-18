const correctCalculation = (value1, value2, operator) => {
  if (operator === '+') {
    return (value1 + value2).toString();
  }
  if (operator === '*') {
    return (value1 * value2).toString();
  }
  return (value1 - value2).toString();
};

export default correctCalculation;
