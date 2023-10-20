import runEngine from '../index.js';
import randomNumber from './helpers/randomNumber.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  let answer;
  switch (operator) {
    case '+':
      answer = (number1 + number2).toString();
      break;
    case '*':
      answer = (number1 * number2).toString();
      break;
    case '-':
      answer = (number1 - number2).toString();
      break;
    default:
      console.log(`undefined ${operator}`);
  }
  return answer;
};

const generateRound = () => {
  const range = 10;
  const firstNumber = randomNumber(range);
  const secondNumber = randomNumber(range);
  const operators = ['+', '-', '*'];
  const symbol = operators[Math.floor(Math.random() * operators.length)];

  const question = `${firstNumber} ${symbol} ${secondNumber}`;
  const answer = calculate(firstNumber, secondNumber, symbol);
  return [question, answer];
};

export default () => runEngine(description, generateRound);
