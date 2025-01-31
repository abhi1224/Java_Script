const accoutnId = 123
let accountMail = "test@gmail.com"
var accountPass = "1234"
accoutnCity = "jaipur"


/*accoutnId = 345  this is not allowed becaue we are using const */

var accountPass = "456"
/*
Prefer not to use var because of the issue in block scope and functional scope
 */
console.log(accountPass)

console.table([accoutnId,accountMail,accountPass,accoutnCity])

let accountState; // undefined

console.log(typeof(accountState))