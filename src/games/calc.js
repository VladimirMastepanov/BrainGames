import runEngine from '../index.js';
import getRandomNumber from './helpers/getRandomNumber.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return (number1 + number2).toString();
    case '*':
      return (number1 * number2).toString();
    case '-':
      return (number1 - number2).toString();
    default:
      console.log(`undefined ${operator}`);
  } return console.log(`undefined ${operator}`);
};

const generateRound = () => {
  const startRange = 1;
  const endRange = 11;
  const firstNumber = getRandomNumber(startRange, endRange);
  const secondNumber = getRandomNumber(startRange, endRange);
  const operators = ['+', '-', '*'];
  const startRangeOperators = 0;
  const operator = operators[getRandomNumber(startRangeOperators, operators.length)];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = calculate(firstNumber, secondNumber, operator);
  return [question, answer];
};

export default () => runEngine(description, generateRound);
