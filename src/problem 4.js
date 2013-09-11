/*
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 *
 * Answer: 906609
 */


/*this is probably the worst approach.  n^2*/
function findPalindromes(){
   var i=999;
   var j=999;
   var palindromes=[];

   for(;i>99;i--){
      for(;j>99;j--){
         if(isPalindrome(i*j)){
            palindromes.push(i*j);
         }
      }
      j=999;
   }
   return palindromes.sort(function(a,b){return b-a;})[0];
}