const accountId = 14456;
let accountEmail = "darshan@gmail.com";
var accountpassword = 135;
accountCity = "jaipur";
let accountState;
// // accountId = 2 not allowed
accountEmail = "dhs@com";
accountPassword = "21512";
accountCity = "bangaluru";
console.log(accountId);
/*prefer not to use var 
beacuse of issue in block scope 
and functional scope 
*/
console.table([accountEmail,accountId,accountpassword,accountCity,accountState]);
let a=5
let b="nice"
console.table([a, b ]);