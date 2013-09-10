var assert;

function beforeSuite(){
   assert=require('assert');
}

//Test
function test(){
   assert.equal(findSmallestMultiple(), 232792560);
}