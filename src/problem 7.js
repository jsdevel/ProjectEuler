/*
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see 
 * that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 * 
 * Answer: 104743
 */
function find1001Prime(){
   var primes=[];
   var i=2;

   while(primes.length < 10001){
      if(isPrime(i)){
         primes.push(i);
      }
      i++;
   }
   return primes[10000];
}