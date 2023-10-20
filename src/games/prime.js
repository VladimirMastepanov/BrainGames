import runEngine from '../index.js';
import randomNumber from './helpers/randomNumber.js';

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
  const range = 100;
  const number = randomNumber(range);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => runEngine(description, generateRound);
