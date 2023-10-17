import runTheGame from '../index.js';

const jobCondition = 'What is the result of the expression?';

const formationOfDataArray = () => {
  const firstNumber = Math.ceil(Math.random() * 10);
  const secondNumber = Math.ceil(Math.random() * 10);
  const arithmeticSings = ['+', '-', '*'];
  const symbol = arithmeticSings[Math.floor(Math.random() * 3)];

  const arithmeticExpression = `${firstNumber} ${symbol} ${secondNumber}`;
  const arrOfValues = [];
  if (symbol === '+') {
    const correctAnswer = firstNumber + secondNumber;
    arrOfValues.push(arithmeticExpression, correctAnswer.toString());
    return arrOfValues;
  }
  if (symbol === '*') {
    const correctAnswer = firstNumber * secondNumber;
    arrOfValues.push(arithmeticExpression, correctAnswer.toString());
    return arrOfValues;
  }
  if (symbol === '-') {
    const correctAnswer = firstNumber - secondNumber;
    arrOfValues.push(arithmeticExpression, correctAnswer.toString());
    return arrOfValues;
  } return arrOfValues;
};

export default () => runTheGame(jobCondition, formationOfDataArray);
