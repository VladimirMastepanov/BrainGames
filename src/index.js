import readlineSync from 'readline-sync';

const runTheGame = (jobCondition, valuesForComparison) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(jobCondition);
  const numberOfRounds = 3;

  for (let i = 0; i < numberOfRounds; i += 1) {
    const arrOfValues = valuesForComparison();
    const mathematicalExpression = arrOfValues[0];
    const correctAnswer = arrOfValues[1];
    const question = readlineSync.question(`Question: ${mathematicalExpression}\nYour answer:`);
    if (question === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${question} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default runTheGame;
