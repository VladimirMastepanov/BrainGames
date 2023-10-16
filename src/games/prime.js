import app from '../index.js';

const jobCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const missingNumber = () => {
  const firstNumber = Math.ceil(Math.random() * 100);
  const arr = [];
  for (let i = 1; i < firstNumber; i += 1) {
    if (firstNumber % i === 0) {
      arr.push(i);
    }
  }
  let correctAnswer = '';
  if (firstNumber === 1) {
    correctAnswer = 'no';
  } else if (arr.length > 1) {
    correctAnswer = 'no';
  } else if (arr.length === 1) {
    correctAnswer = 'yes';
  }

  const array = [firstNumber, correctAnswer];
  return array;
};

export default () => app(jobCondition, missingNumber);
