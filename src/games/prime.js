import runEngine from '../index.js';
import getRandomNumber from './helpers/getRandomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const arr = [];
  for (let i = 1; i < number; i += 1) {
    if (number % i === 0) {
      arr.push(i);
    }
  }
  if (number === 1 || arr.length > 1) {
    return false;
  } return true;
};

const generateRound = () => {
  const number = getRandomNumber(1, 101);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => runEngine(description, generateRound);
