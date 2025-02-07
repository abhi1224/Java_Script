const form = document.querySelector('form')
const result = document.querySelector('.resultShow')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const weight = parseInt(document.querySelector('#weight').value)
    const height = parseInt(document.querySelector('#height').value)
    
    if(weight === ' ' || weight < 0 || isNaN(weight)){
        result.innerHTML = 'Enter a valid number'
    }
    else if(height === ' ' || height < 0 || isNaN(height)){
        result.innerHTML = 'Enter a valid number'
    }
    else{
        const answer = ((weight /((height*height) / 10000)).toFixed(2))
        result.innerHTML = answer
        console.log(answer);        
    }
})