const JsUser = {
    name:'Robert',
    age:18,
    location:'jaipur',
    email:'test@gamil.com',
    isLogedIn : false,
    lastLoginDays:['Monday' , 'Saturday'],
}

/*======= Object de-structuring ====== */

const {lastLoginDays} = JsUser // another way to extract value from object
console.log(lastLoginDays)

const {lastLoginDays:login} = JsUser  // we can assign sort name by using object de-structuring 
console.log(login);


/*=========== JSON (JAVASCRIPT OBJECT NOTATION ) :JSON data is written as name/value pairs, just like JavaScript object properties =========== */

/* ============ JSON STRUCURE ============= */

// {
//     'name':'Philiphs',
//     'firstname':'George',
//     'lastname':'Steve',
//     'age':45,
//     'isLoggedIn':false,

// }

// [
//     {},
//     {},
//     {}
// ]