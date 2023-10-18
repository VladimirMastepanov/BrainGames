import runTheGame from '../index.js';
import greatestDivisor from './helpers/greatsDivisor.js';

const description = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = () => {
  const firstNumber = Math.ceil(Math.random() * 10);
  const secondNumber = Math.ceil(Math.random() * 10);
  const arithmeticExpression = `${firstNumber} ${secondNumber}`;
  const divisor = greatestDivisor(firstNumber, secondNumber);

  const arr = [arithmeticExpression, divisor];
  return arr;
};

export default () => runTheGame(description, greatestCommonDivisor);
