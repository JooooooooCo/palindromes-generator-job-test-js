// Script to solve below test.
// Please start the below coding challenge Description: 
// Write a script that creates an array with 10000 random words between 3 and 5 characters,
// and returns the number of words that are palindromes in that array; Notes: 
// • The code needs to be in javascript 
// • You'll need to return just the number of words 


var length = [3, 5];
var wordsArray = [];
var numPalindromeWords = 0;

// Function to generate random words acc length
function MakeWord(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

// Loop to insert 10000 words in the master array
for ( var i = 0; i < 10000; i++ ) {
    random = Math.floor(Math.random()*2);
    wordsArray[i] = MakeWord(length[random]);
    console.log(wordsArray[i]);
    console.log(wordsArray.length);
}

// Function to check if palindrome
function IsPalindrome(str) {
  var len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1])
      return false;
  return true;
}

// Loop to check and count all the palindrome words in the master array
for ( var i = 0; i < 10000; i++ ) {
    if (IsPalindrome(wordsArray[i])) {
        numPalindromeWords = numPalindromeWords + 1;
    }
}

//Print the number of palindrome words
console.log(numPalindromeWords);