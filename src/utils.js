function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error('Input must be a string');
    }
    if (word === '') {
      return false;
    }
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error('Input must contain only alphabetic characters');
    }
  
    const lowerWord = word.toLowerCase();
    const len = lowerWord.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (lowerWord[i] !== lowerWord[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  module.exports = { isPalindrome };