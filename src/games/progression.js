import runEngine from '../index.js';
import getRandomNumber from './helpers/getRandomNumber.js';

const description = 'What number is missing in the progression?';

const generateProgression = (startNumber, step, lengthProgression) => {
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(startNumber + step * i);
  } return progression;
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 11);
  const secondNumber = getRandomNumber(1, 5);
  const lengthOfProgression = 10;
  const arrOfProgression = generateProgression(firstNumber, secondNumber, lengthOfProgression);
  const hiddenIndex = getRandomNumber(0, arrOfProgression.length);
  const answer = arrOfProgression[hiddenIndex].toString();
  arrOfProgression[hiddenIndex] = '..';

  return [arrOfProgression.join(' '), answer];
};

export default () => runEngine(description, generateRound);
