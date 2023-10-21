function isPalindrome(word) {
  // Removing non-alphanumeric characters and convert to lowercase
  word = word.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Comparing the original word with its reverse
  return word === word.split('').reverse().join('');
}

// Tests
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

module.exports = isPalindrome;

// run node index.js