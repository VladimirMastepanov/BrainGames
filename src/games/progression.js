import runTheGame from '../index.js';

const description = 'What number is missing in the progression?';

const missingNumber = () => {
  let firstNumber = Math.ceil(Math.random() * 10);
  const secondNumber = Math.ceil(Math.random() * 5);
  const arrOfProgression = [firstNumber];
  const arrOfNumbers = [firstNumber];
  for (let i = 0; i < 10; i += 1) {
    firstNumber += secondNumber;
    arrOfProgression.push(firstNumber);
    arrOfNumbers.push(firstNumber);
  }
  const skippingNumber = Math.ceil(Math.random() * 10);
  arrOfProgression[skippingNumber] = '..';

  const arr = [arrOfProgression.join(' '), arrOfNumbers[skippingNumber].toString()];
  return arr;
};

export default () => runTheGame(description, missingNumber);
