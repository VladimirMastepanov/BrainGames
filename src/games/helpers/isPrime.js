const isPrime = (number) => {
  const arr = [];
  for (let i = 1; i < number; i += 1) {
    if (number % i === 0) {
      arr.push(i);
    }
  }
  if (number === 1 || arr.length > 1) {
    return false;
  } return true;
};

export default isPrime;
