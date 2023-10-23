import runEngine from '../index.js';
import getRandomNumber from './helpers/getRandomNumber.js';

const description = 'What number is missing in the progression?';

const progressionGenerator = (startNumber, step, lengthProgression) => {
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(startNumber + step * i);
  } return progression;
};

const generateRound = () => {
  const startRange = 1;
  const endRange = 11;
  const firstNumber = getRandomNumber(startRange, endRange);
  const manimumProgressionStep = 1;
  const maximumProgressionStep = 5;
  const secondNumber = getRandomNumber(manimumProgressionStep, maximumProgressionStep);
  const lengthOfProgression = 10;
  const arrOfProgression = progressionGenerator(firstNumber, secondNumber, lengthOfProgression);
  const hiddenIndex = getRandomNumber(startRange, lengthOfProgression);
  const lostNumber = arrOfProgression[hiddenIndex].toString();
  arrOfProgression[hiddenIndex] = '..';

  return [arrOfProgression.join(' '), lostNumber];
};

export default () => runEngine(description, generateRound);
