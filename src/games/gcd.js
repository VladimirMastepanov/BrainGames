import runEngine from '../index.js';
import getRandomNumber from './helpers/getRandomNumber.js';

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
  const startRange = 1;
  const endRange = 11;
  const firstNumber = getRandomNumber(startRange, endRange);
  const secondNumber = getRandomNumber(startRange, endRange);
  const arithmeticExpression = `${firstNumber} ${secondNumber}`;
  const divisor = greatestDivisor(firstNumber, secondNumber);

  return [arithmeticExpression, divisor];
};

export default () => runEngine(description, greatestCommonDivisor);
