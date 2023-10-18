import runTheGame from '../index.js';
import progressionGenerator from './helpers/progressionGenerator.js';

const description = 'What number is missing in the progression?';

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
