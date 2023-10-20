import runEngine from '../index.js';
import randomNumber from './helpers/randomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const evenNumberGenerateRound = () => {
  const range = 100;
  const number = randomNumber(range);
  const answer = isEven(number) ? 'yes' : 'no';

  return [number, answer];
};

export default () => runEngine(description, evenNumberGenerateRound);
