import runTheGame from '../index.js';
import isPrime from './helpers/isPrime.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const missingNumber = () => {
  const randomNumber = Math.ceil(Math.random() * 100);
  let correctAnswer;
  if (isPrime(randomNumber)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const array = [randomNumber, correctAnswer];
  return array;
};

export default () => runTheGame(description, missingNumber);
