/* 2520 is the smallest number that can be divided by each of the numbers from 1
 * to 10 without any remainder.
 * 
 * What is the smallest positive number that is evenly divisible by all of the 
 * numbers from 1 to 20?
 * 
 * Answer:  232792560
 */


/*This is pure brute force.*/
function findSmallestMultiple(){
   var i;
   var limit=20;
   var num=1;

   for(i=1;i<=limit;){
      if(num%i){
         num++;
         i=1;
         continue;
      }
      i++;
   }
   return num;
}