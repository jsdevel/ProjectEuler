//import utils/isPrime
var assert;

function beforeSuite(){
   assert=require('assert');
}

//Test
function test(){
   assert.equal(find1001Prime(), 104743);
}