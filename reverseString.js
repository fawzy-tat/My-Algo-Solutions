const reverseString = (string) => {
  let reversedArray = [];
  const stringArray = Array.from(string);
  while (stringArray.length) {
    const lastChar = stringArray.pop();
    reversedArray.push(lastChar);
  }
  return reversedArray.join("");
};

const result = reverseString("tree");
console.log(result);
