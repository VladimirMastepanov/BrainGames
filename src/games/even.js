import app from '../index.js';

const jobCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = () => {
  const randomNumber = Math.ceil(Math.random() * 100);
  if (randomNumber % 2 === 0) {
    const correctAnswer = 'yes';
    const arrOfValues = [randomNumber, correctAnswer];
    return arrOfValues;
  } if (randomNumber % 2 !== 0) {
    const correctAnswer = 'no';
    const arrOfValues = [randomNumber, correctAnswer];
    return arrOfValues;
  }
};

export default () => app(jobCondition, isEvenNumber);
