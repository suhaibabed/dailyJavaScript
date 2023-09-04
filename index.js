// let numberOne = 3;
// let numberTwo = 3;

// console.log(numberOne == numberTwo);

// let js = "javaScript";
// let py = "python";

// console.log(js == py);

// let nums = [1, 2, 3];
// console.log(nums);
// nums[0] = 456789; // this is a modification ot the array
// console.log(nums);

// let nums = [1, 2, 3];
// let number = [1, 2, 3];

// console.log(nums == number); //false

// let userOne = {
//   name: "sohib",
//   role: "front end",
//   country: "palestine",
// };
// let userTwo = {
//   name: "sohib",
//   role: "front end",
//   country: "palestine",
// };
// console.log(userOne == userTwo); // false




// let age = '26' // this value consider string why ? because put between two ""

// // let age = 26; //this is number 

// const pi = 3.14 //this const because this cant change the value.

// console.log(age,age,pi)


// const PI = Math.PI
// // console.log(PI);
// console.log(Math.round(PI))
// console.log(Math.floor(PI));
// console.log(Math.ceil(PI));

// console.log(Math.min(-5,-2,5,4,6,8,7));
// console.log(Math.max(-5,-9,70,20,10,1000,85,121545))

// console.log(Math.random() * 11)

// let a = 2;
// let b = 3;

// console.log(`The sum of ${a} and ${b} is a ${a + b}`)


// let js = 'javascript'
// console.log(js.length)
// let firstName = 'sohib'
// console.log(firstName.length);

// let string = 'JavaScript'
// let firstLetter = string[0]
// console.log(firstLetter)

// let lastLetter = string.length - 1;

// console.log(lastLetter) // 9

// console.log(string[lastLetter])

// let string = 'JavaScript'
// console.log(string.substr(6,1))

// let string = 'javaScript'
// console.log(string.substring(0,4));
// console.log(string.substring(2,5))

// let string = 'Real Madrid is the best team';
// console.log(string.split())
// console.log(string.split(""))

//  let string = '                    Real Madrid is the best team';

//  console.log(string.trim(''))

//  let string = '                    Real Madrid is the best team';

//  console.log(string.trim(''))
//  console.log(string.includes('Real'))

// let string = 'Real Madrid is the best team';

// console.log(string.trim(''))
// console.log(string.includes('Real'))
// console.log(string.replace('Real','ronaldo'))










let challenge = '30 Days of JavaScript';
console.log(challenge);
console.log(challenge.length)
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0,3))
console.log(challenge.substring(0,3))
console.log(challenge.substring(3,21))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(""))

let company = 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon'
console.log(company.split())
console.log(company.split(","))


console.log(challenge.replace('30 Days of JavaScript','30 Days of python'))


console.log(challenge.charAt(3))
console.log(challenge.charCodeAt("j"))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))



let quote = 'There is no exercise better for the heart than reaching down and lifting people up.'
let otherQuote = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log(quote, otherQuote)

console.log(typeof('10') == 10)
console.log(parseInt('10') == 10)

let word1 = 'python';
let word2 = 'jargon';

console.log(word1.includes('on'),word2.match('on'));