//import utils/isPrime
//import utils/findFactors
var assert;
function beforeSuite(){
   assert=require('assert');
}
//Test
function largest_prime_factor(){
   assert.equal(findLargestPrimeFactor(4), 2);
   assert.equal(findLargestPrimeFactor(6), 3);
   assert.equal(findLargestPrimeFactor(15), 5);
   assert.equal(findLargestPrimeFactor(22), 11);
   assert.equal(findLargestPrimeFactor(13195), 29);
   assert.equal(findLargestPrimeFactor(600851475143), 6857);
}