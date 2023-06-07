// megaphone
// objective
// 1. create a function that convert a string  to uppercase.
//
// sample
// megaphone("hello world") => "HELLO WORLD"


// 1.  function declaration
function getMegaphone(message) {
  const outPutSound = message.toLowerCase();
  return outPutSound;
}

// 2. function invocation
const message = getMegaphone("heY you Guys!!!");

// 3. console.log
console.log(message);


