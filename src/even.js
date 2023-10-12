import readlineSync from 'readline-sync';

const isEvenNumber = () => {
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const firstNumber = Math.ceil(Math.random() * 100);
  const secondNumber = Math.ceil(Math.random() * 100);
  const thirdNumber = Math.ceil(Math.random() * 100);

  const questionOne = readlineSync.question(`Question: ${firstNumber}\nYour answer:`);

  if ((questionOne === 'yes' && firstNumber % 2 === 0) || (questionOne === 'no' && firstNumber % 2 !== 0)) {
    console.log('Correct!');
    const questionTwo = readlineSync.question(`Question: ${secondNumber}\nYour answer:`);
    if ((questionTwo === 'yes' && secondNumber % 2 === 0) || (questionTwo === 'no' && secondNumber % 2 !== 0)) {
      console.log('Correct!');
      const questionThree = readlineSync.question(`Question: ${thirdNumber}\nYour answer:`);
      if ((questionThree === 'yes' && thirdNumber % 2 === 0) || (questionThree === 'no' && thirdNumber % 2 !== 0)) {
        console.log(`Correct!\nCongratulations, ${userName}!`);
      } else {
        console.log(`${questionThree} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      }
    } else {
      console.log(`${questionTwo} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    }
  } else {
    console.log(`${questionOne} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
  }
};

export default isEvenNumber;
