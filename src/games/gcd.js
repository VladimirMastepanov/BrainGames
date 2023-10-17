import runTheGame from '../index.js';

const jobCondition = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = () => {
  const firstNumber = Math.ceil(Math.random() * 10);
  const secondNumber = Math.ceil(Math.random() * 10);

  const arithmeticExpression = `${firstNumber} ${secondNumber}`;

  let greatestDivisor;
  for (let i = 1; i <= firstNumber && i <= secondNumber; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      greatestDivisor = i;
    }
  }

  const arr = [arithmeticExpression, greatestDivisor.toString()];
  return arr;
};

export default () => runTheGame(jobCondition, greatestCommonDivisor);
