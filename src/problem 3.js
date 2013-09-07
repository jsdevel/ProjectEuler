/*
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

function findLargestPrimeFactor(number){
   var half=number/2;
   var divisor;
   var i;
   var largestPrime;

   switch(number){
   case 2:return 2;
   case 3:return 3;
   case 4:return 2;
   case 5:return 5;
   case 6:return 3;
   }

   if(isPrime(number)){
      return number;
   }

   for(i=3;i<=half;i+=2){
      divisor=number/i;
      if(divisor%2===0)continue;
      if(divisor%3===0)continue;
      if(isPrime(divisor)){
         largestPrime=divisor;
      }
   }
   return largestPrime;
}

/*
function findLargestPrimeFactor(number){
   var m;
   var i;
   var largestPrime;
   var prime;

   console.log('number');
   console.log(number);
   if(isPrime(number)){
      return number;
   }
   m = Math.ceil(Math.sqrt(number));
   if(m===2){
      return 2;
   }
   for(i=2;i<=m;++i){
      if(i%2===0)continue;
      prime=isPrime(i);
      if(prime && (number%i) === 0){
         largestPrime=i;
      }
   }
   return largestPrime;

   return m;
}*/

/*This one works as well, but it took forever
function findLargestPrimeFactor(number){
   var proposal;

   if(isPrime(number)){
      return number;
   }
   proposal=Math.floor(number/2);
   while(proposal > 1){
      if(isPrime(proposal) && !(number%proposal)){
         return proposal;
      }
      proposal--;
   }

   function isPrime(number){
      var i;
      if(number === 2){
         return true;
      }
      if(!(number%2)){
         return false;
      }
      for(i=Math.floor(number/2);i>1;i--){
         if(!(number%i)){
            return false;
         }
      }
      return true;
   }
}
*/

/*seive works, but memory failed
function findLargestPrimeFactor(number){
   var half=~~(number/2);
   var proposal=1;
   var notPrime={};
   var largestPrimeFactor=2;
   var i;

   switch(number){
   case 1:return 1;
   case 2:return 2;
   case 3:return 3;
   }

   for(i=2;i<=half;i++){
      notPrime[i*2]=true;
   }

   while(proposal<=number){
      if(notPrime[proposal]){//do nothing
      } else {//prime number
         if(proposal === number){
            largestPrimeFactor = proposal;
            break;
         }
         if(proposal <= half){
            if(!(number%proposal)){
               largestPrimeFactor = proposal;
               if(largestPrimeFactor > 1){
                  for(i=1;i<number;i++){
                     notPrime[proposal*i]=true;
                  }
               }
            }
         }
      }
      proposal++;
   }
   return largestPrimeFactor;
}
*/