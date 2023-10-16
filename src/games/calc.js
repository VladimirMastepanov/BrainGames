import app from '../index.js';

const jobCondition = 'What is the result of the expression?';

const formationOfDataArray = () => {
  const firstNumber = Math.ceil(Math.random() * 10);
  const secondNumber = Math.ceil(Math.random() * 10);
  const arithmeticSings = ['+', '-', '*'];
  const symbol = arithmeticSings[Math.floor(Math.random() * 3)];

  const arithmeticExpression = `${firstNumber} ${symbol} ${secondNumber}`;
  if (symbol === '+') {
    const correctAnswer = firstNumber + secondNumber;
    const arrOfValues = [arithmeticExpression, correctAnswer];
    return arrOfValues;
  }
  if (symbol === '*') {
    const correctAnswer = firstNumber * secondNumber;
    const arrOfValues = [arithmeticExpression, correctAnswer];
    return arrOfValues;
  }
  if (symbol === '-') {
    const correctAnswer = firstNumber - secondNumber;
    const arrOfValues = [arithmeticExpression, correctAnswer];
    return arrOfValues;
  }
};

export default () => app(jobCondition, formationOfDataArray());
