var assert;

function beforeSuite(){
   assert=require('assert');
}

//Test
function test(){
   assert.equal(findDifferenceOfSumOfSquaresAndSquareOfSum(), 25164150);
}