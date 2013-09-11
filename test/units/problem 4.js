//import utils/isPalindrome
var assert;

function beforeSuite(){
   assert=require('assert');
}

//Test
function palindrome(){
   assert.equal(findPalindromes(), 906609);
}