import runTheGame from '../index.js';
import isEven from './helpers/isEven.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = () => {
  const randomNumber = Math.ceil(Math.random() * 100);
  const arrOfValues = [];
  let correctAnswer;
  if (isEven(randomNumber)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  arrOfValues.push(randomNumber, correctAnswer);
  return arrOfValues;
};

export default () => runTheGame(description, isEvenNumber);
