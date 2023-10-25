

function one(){
    const username = 'Steve'

    function two(){
        const website = 'youtube'
        // console.log(username);
    }
    // console.log(website); 
    two()
}

one()

// ==========  Intersting ============


console.log(addOne(8));

function addOne(num){
    return num + 1
}
console.log(addOne(5));

// This function is called from anywhere



// addTwo(5) // this will through an error

const addTwo = function(num){
    return num + 2
}
addTwo(5)
