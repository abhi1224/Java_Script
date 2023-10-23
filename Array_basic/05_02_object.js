
const InstaUser = new Object() // singleton object

const tinderUser = {}

tinderUser.Id = '1234'
tinderUser.Name = 'Steve'
tinderUser.Age = 97



console.log(Object.keys(tinderUser)) //  store keys vlaue in an array 
console.log(Object.values(tinderUser)) //  store keys vlaue in an array 
console.log(Object.entries(tinderUser)) //  store keys vlaue in an array within an array
console.log(tinderUser.hasOwnProperty('Age'))  // check the property is avialable in object or not




const regularUser = {
    email: 'insta@instagram.com',
    fullName:{
        userfullname:{
            firstname:'Robert',
            lastname:'Steve',
        } // object nesting
    }
}

// console.log(regularUser.fullName)
// console.log(regularUser.fullName.userfullname)
// console.log(regularUser.fullName.userfullname.firstname)
// console.log(regularUser.fullName.userfullname.lastname)


/* merging two objects */

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}
const obj3 = {obj1 , obj2} // Output :{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign(obj1 , obj2) // Output:{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj4);


// Object.assign(target , source)
const obj5 = Object.assign({} ,obj1 , obj2) // Proper way to merging two objects
// console.log(obj5); // Output:{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const objectMerge = {...obj1 , ...obj2}
// console.log(objectMerge)