/*
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 * Answer: 6857
 */

/*This is by far the fastest approach!  Thanks to Eric for helping me understand
 *the concept!
 */
function findLargestPrimeFactor(number){
   var limit=number;
   var i;

   for(i=2;i<=limit;){
      if(i===limit){
         return limit;
      }
      if(limit % i === 0){
         limit=limit/i;
         i=2;
      } else {
         i++;
      }
   }
}
/*This was fast, but Eric had a better idea which wouldn't involve memory
 *consumption
function findLargestPrimeFactor(number){
   var i;
   var len;
   var factors=findFactors(number);

   factors.sort(function(a,b){return b-a;});

   len=factors.length;
   for(i=0;i<len;i++){
      if(isPrime(factors[i])){
         return factors[i];
      }
   }
}*/
/*This was extremely slow, but it worked.
function findLargestPrimeFactor(number){
   var half=(number/2)-((number/2)%1);
   var proposed;
   var prime;
   var i;

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

   if(isPrime(half)){
      return half;
   }

   if((half % 2) === 0){
      half-=1;//make it odd
   }

   for(i=0;i<half;i+=4){
      proposed=half-i;
      if(proposed%3===0)continue;
      if(proposed%5===0)continue;
      prime=isPrime(proposed);
      if(prime && (number%proposed) === 0){
         return proposed;
      }
   }
}
*/

/* This was very fast, but it didn't consider numbers where the largest prime
 * factor was equal to half.
function findLargestPrimeFactor(number){
   var m;
   var i;
   var largestPrime;
   var prime;

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