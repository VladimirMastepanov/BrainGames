import runEngine from '../index.js';
import getRandomNumber from './helpers/getRandomNumber.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return (number1 + number2);
    case '*':
      return (number1 * number2);
    case '-':
      return (number1 - number2);
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 11);
  const secondNumber = getRandomNumber(1, 11);
  const operators = ['+', '-', '*'];
  const startRangeOperators = 0;
  const operator = operators[getRandomNumber(startRangeOperators, operators.length)];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = calculate(firstNumber, secondNumber, operator);
  return [question, answer.toString()];
};

export default () => runEngine(description, generateRound);
