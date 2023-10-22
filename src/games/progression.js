import runEngine from '../index.js';
import getRandomNumber from './helpers/getRandomNumber.js';

const description = 'What number is missing in the progression?';

const progressionGenerator = (startNumber, step, lengthProgression) => {
  let start = startNumber;
  const progression = [start];
  for (let i = 0; i < lengthProgression; i += 1) {
    start += step;
    progression.push(start);
  } return progression;
};

const generateRound = () => {
  const startRange = 1;
  const endRange = 11;
  const firstNumber = getRandomNumber(startRange, endRange);
  const manimumProgressionStep = 1;
  const maximumProgressionStep = 5;
  const secondNumber = getRandomNumber(manimumProgressionStep, maximumProgressionStep);
  const minlengthOfProgression = 9;
  const maxlengthOfProgression = 10;
  const arrOfProgression = progressionGenerator(firstNumber, secondNumber, minlengthOfProgression);
  const hiddenIndex = getRandomNumber(minlengthOfProgression, maxlengthOfProgression);
  const lostNumber = arrOfProgression[hiddenIndex].toString();
  arrOfProgression[hiddenIndex] = '..';

  return [arrOfProgression.join(' '), lostNumber];
};

export default () => runEngine(description, generateRound);
