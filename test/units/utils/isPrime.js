var assert;

function beforeSuite(){
   assert=require('assert');
}

//Test
function testIsPrime(){
   assert(!isPrime(1));
   assert(isPrime(2));
   assert(isPrime(3));
   assert(!isPrime(4));
   assert(isPrime(5));
   assert(!isPrime(6));
   assert(isPrime(7));
}