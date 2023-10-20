import runEngine from '../index.js';
import randomNumber from './helpers/randomNumber.js';

const description = 'What number is missing in the progression?';

const progressionGenerator = (startNumber, step, lengthProgression) => {
  let start = startNumber;
  const arrayOfProgression = [];
  arrayOfProgression.push(start);
  for (let i = 0; i < lengthProgression; i += 1) {
    start += step;
    arrayOfProgression.push(start);
  } return arrayOfProgression;
};

const missingNumber = () => {
  const range = 10;
  const firstNumber = randomNumber(range);
  const maximumProgressionStep = 5;
  const secondNumber = randomNumber(maximumProgressionStep);
  const lengthOfProgression = 10;
  const arrOfProgression = progressionGenerator(firstNumber, secondNumber, lengthOfProgression);
  const skippingNumber = randomNumber(lengthOfProgression);
  const lostNumber = arrOfProgression[skippingNumber].toString();
  arrOfProgression[skippingNumber] = '..';

  return [arrOfProgression.join(' '), lostNumber];
};

export default () => runEngine(description, missingNumber);
