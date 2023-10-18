import runTheGame from '../index.js';
import correctCalculation from './helpers/correctCalculation.js';

const description = 'What is the result of the expression?';

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
