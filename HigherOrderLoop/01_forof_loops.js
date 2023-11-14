
//============== for of loop ============

const arr = [1,2,3,4,5]

// array

for (const val of arr) {
    // console.log(val);
}

// string 
const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each of char is ${greet}`);
}

const map = new Map()
map.set('IN','India')
map.set('USA','United State of America')
map.set('Fr','France')
map.set('IN','India') // map has only unique value

// console.log(map);

for (const key of map) {
    // console.log(key);
}
for (const [key , value] of map) {
    // console.log(key,':-', value );
}


// Object 

const myObject = {
    'game1':'NFS',
    'game2':'Spiderman'
}

// for (const key of myObject) {
//      console.log(key)
// }

// we can not iterate object using for of loop

const myobj = {
    js:'javascript',
    cpp:'C++',
    rb:'ruby'
}

for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`);
}
// for in loop use to iterate for object
// for in loop in array return the keys -