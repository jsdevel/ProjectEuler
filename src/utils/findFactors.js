/**
 * @param {number} number
 * @returns {Array}
 */
function findFactors(number){
   var end=number/2;
   var i;
   var factors=[];

   for(i=2;i<=end;i++){
      if(number%i === 0){
         end=number/i;
         factors.push(i,end);
      }
   }

   return factors;
}

