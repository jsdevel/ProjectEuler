function isPrime(n) {
   var m;
   if (!isFinite(n) || n%1 || n<2) return false;
   if (n%2===0) return (n===2);
   if (n%3===0) return (n===3);
   m=Math.sqrt(n);
   for (var i=5;i<=m;i+=6) {
      if (n%i===0)     return false;
      if (n%(i+2)===0) return false;
   }
   return true;
}