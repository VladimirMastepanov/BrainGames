const progressionGenerator = (startNumber, lengthOfStep, step) => {
  let start = startNumber;
  const arrayOfProgression = [];
  arrayOfProgression.push(start);
  for (let i = 0; i < step; i += 1) {
    start += lengthOfStep;
    arrayOfProgression.push(start);
  } return arrayOfProgression;
};

export default progressionGenerator;
