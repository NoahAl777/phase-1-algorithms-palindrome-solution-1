function isPalindrome(word) {
  // Write your algorithm here
  // const array = word.split('')
  // const reverseArray = array.reverse()
  // const joinReversedArray = reverseArray.join('')
  const reversedWord = word.split('').reverse().join('')
  return reversedWord === word ? true : false
}

/* 
  Add your pseudocode here:
  reverse word and store as variable
    - .split word (is stored as array)
    - .reverse() to reverse array
    - .join() to put word back together (store as wordReverse)
  check for equality with original word
  if equal return true
  else false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
