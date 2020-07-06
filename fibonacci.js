// const fibonacci = (num) => {
//   if (num == 2) return 1;
//   if (num == 1) return 0;
//   return fibonacci(num - 1) + fibonacci(num - 2);
// };

// const result = fibonacci(6);
// console.log(result);

// best solution for less time and space complexity

const fibonacci = (num) => {
  const lasttwo = [0, 1];
  let counter = 3;
  while (counter <= num) {
    const nextFeb = lasttwo[0] + lasttwo[1];
    lasttwo[0] = lasttwo[1];
    lasttwo[1] = nextFeb;
    console.log(lasttwo);
    console.log(counter);
    counter++;
  }
  return num > 1 ? lasttwo[1] : lasttwo[0];
};

const result = fibonacci(6);
console.log(result);
