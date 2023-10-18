import runTheGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const greatestDivisor = (value1, value2) => {
  let divisor;
  for (let i = 1; i <= value1 && i <= value2; i += 1) {
    if (value1 % i === 0 && value2 % i === 0) {
      divisor = i;
    }
  } return divisor.toString();
};

const greatestCommonDivisor = () => {
  const firstNumber = Math.ceil(Math.random() * 10);
  const secondNumber = Math.ceil(Math.random() * 10);
  const arithmeticExpression = `${firstNumber} ${secondNumber}`;
  const divisor = greatestDivisor(firstNumber, secondNumber);

  const arr = [arithmeticExpression, divisor];
  return arr;
};

export default () => runTheGame(description, greatestCommonDivisor);
