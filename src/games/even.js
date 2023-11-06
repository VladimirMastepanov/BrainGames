import runEngine from '../index.js';
import getRandomNumber from './helpers/getRandomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(1, 101);
  const answer = isEven(number) ? 'yes' : 'no';

  return [number, answer];
};

export default () => runEngine(description, generateRound);
