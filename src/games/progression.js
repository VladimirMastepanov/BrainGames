import runTheGame from '../index.js';

const description = 'What number is missing in the progression?';

const progressionGenerator = (startNumber, lengthOfStep, step) => {
  let start = startNumber;
  const arrayOfProgression = [];
  arrayOfProgression.push(start);
  for (let i = 0; i < step; i += 1) {
    start += lengthOfStep;
    arrayOfProgression.push(start);
  } return arrayOfProgression;
};

const missingNumber = () => {
  const firstNumber = Math.ceil(Math.random() * 10);
  const maximumProgressionStep = 5;
  const secondNumber = Math.ceil(Math.random() * maximumProgressionStep);
  const lengthOfProgression = 10;
  const arrOfProgression = progressionGenerator(firstNumber, secondNumber, lengthOfProgression);
  const skippingNumber = Math.ceil(Math.random() * lengthOfProgression);
  const lostNumber = arrOfProgression[skippingNumber].toString();
  arrOfProgression[skippingNumber] = '..';

  const arr = [arrOfProgression.join(' '), lostNumber];
  return arr;
};

export default () => runTheGame(description, missingNumber);
