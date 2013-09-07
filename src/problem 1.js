/*
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we
 * get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *
 * Answer: 233168
 */
function findMultiplesOf3And5(max){
   var sum=0;
   var canCheckThree=true;
   var canCheckFive=true;
   var canCheckFifteen=true;
   var multiple;
   var i;
   for(i=1;canCheckThree || canCheckFive;i++){
      if(canCheckThree){
         multiple=3*i;
         if(multiple < max){
            sum+=multiple;
         } else {
            canCheckThree=false;
         }
      }
      if(canCheckFive){
         multiple=5*i;
         if(multiple < max){
            sum+=multiple;
         } else {
            canCheckFive=false;
         }
      }
      if(canCheckFifteen){
         multiple=15*i;
         if(multiple < max){
            sum-=multiple;
         } else {
            canCheckFifteen=false;
         }
      }

   }
   return sum;
}