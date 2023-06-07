// Pie Factory
// 1. create a function that makes pies
// 2. repeat the string as much as the quanity of the order
// 
// sample
// const result = makepie(10);
// result = 🥧🥧🥧🥧🥧🥧🥧🥧🥧🥧


// 1. function declaration
function makePie(quanity=1) {
  const pieOrder = `🥧`.repeat(quanity);
  return pieOrder;
}

// 2. function invocation
const result = makePie();
console.log(result);