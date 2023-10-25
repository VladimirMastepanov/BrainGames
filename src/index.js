import readlineSync from 'readline-sync';

const runEngine = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [mathematicalExpression, correctAnswer] = generateRound();
    console.log(`Question: ${mathematicalExpression}`);
    const question = readlineSync.question('Your answer:');
    if (question !== correctAnswer) {
      console.log(`${question} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEngine;
