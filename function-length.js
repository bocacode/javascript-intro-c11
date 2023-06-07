
function getLength(string) {

  const totalLength = string.length;
  return totalLength;
}

const string = "hello";
const stringLength = "The total characters of " + string + " is " + getLength(string);

console.log(stringLength);