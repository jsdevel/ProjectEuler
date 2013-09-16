/*
 *
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 * a^2 + b^2 = c^2
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 *
 * Answer: 31875000
 */


function findValue(sum){
   var cSquare;
   var sumOfASquareAndBSquare;
   var c=sum-3;
   var b=sum-c-1;
   var a=sum-c-2;

   while(c>a){
      while(b>a){
         if(a<b && b<c){
            cSquare=c*c;
            sumOfASquareAndBSquare=(a*a)+(b*b);
            if(sumOfASquareAndBSquare === cSquare){
               return a*b*c;
            }
         }
         a=a+1;
         b=b-1;
      }
      c=c-1;
      b=sum-c-1;
      a=sum-c-b;
   }
}
