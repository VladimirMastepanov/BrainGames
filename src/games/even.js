import runTheGame from '../index.js';

const jobCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = () => {
  const randomNumber = Math.ceil(Math.random() * 100);
  const arrOfValues = [];
  if (randomNumber % 2 === 0) {
    const correctAnswer = 'yes';
    arrOfValues.push(randomNumber, correctAnswer.toString());
    return arrOfValues;
  } if (randomNumber % 2 !== 0) {
    const correctAnswer = 'no';
    arrOfValues.push(randomNumber, correctAnswer.toString());
    return arrOfValues;
  } return arrOfValues;
};

export default () => runTheGame(jobCondition, isEvenNumber);
