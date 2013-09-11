/*
 * The sum of the squares of the first ten natural numbers is,
 * 
 * 12 + 22 + ... + 102 = 385
 * The square of the sum of the first ten natural numbers is,
 * 
 * (1 + 2 + ... + 10)2 = 552 = 3025
 * Hence the difference between the sum of the squares of the first ten natural 
 * numbers and the square of the sum is 3025 − 385 = 2640.
 * 
 * Find the difference between the sum of the squares of the first one hundred 
 * natural numbers and the square of the sum.
 * 
 * Answer:
 */

function findDifferenceOfSumOfSquaresAndSquareOfSum(){
   var limit=100;
   var i;
   var sumOfSquares=0;
   var sumOfNumbers=0;

   for(i=1;i<=limit;i++){
      sumOfSquares += (i*i);
      sumOfNumbers += i;
   }

   return (sumOfNumbers * sumOfNumbers) - sumOfSquares;
}