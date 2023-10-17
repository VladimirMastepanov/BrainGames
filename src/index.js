import readlineSync from 'readline-sync';

const runTheGame = (jobCondition, arr) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(jobCondition);
  const numberOfRounds = 3;

  for (let i = 0; i < numberOfRounds; i += 1) {
    const arrOfValues = arr();
    const question = readlineSync.question(`Question: ${arrOfValues[0]}\nYour answer:`);
    const answer = arrOfValues[1];
    if (question === answer) {
      console.log('Correct!');
    } else {
      return console.log(`${question} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default runTheGame;
