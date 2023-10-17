import runTheGame from '../index.js';

const description = 'What is the result of the expression?';

const correctCalculation = (value1, value2, operator) => {
  if (operator === '+') {
    return (value1 + value2).toString();
  }
  if (operator === '*') {
    return (value1 * value2).toString();
  }
  return (value1 - value2).toString();
};

const roundGeneration = () => {
  const firstNumber = Math.ceil(Math.random() * 10);
  const secondNumber = Math.ceil(Math.random() * 10);
  const operators = ['+', '-', '*'];
  const symbol = operators[Math.floor(Math.random() * operators.length)];

  const arithmeticExpression = `${firstNumber} ${symbol} ${secondNumber}`;
  const arrOfValues = [];
  const correctAnswer = correctCalculation(firstNumber, secondNumber, symbol);
  arrOfValues.push(arithmeticExpression, correctAnswer);
  return arrOfValues;
};

export default () => runTheGame(description, roundGeneration);
