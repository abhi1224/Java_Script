
const form = document.querySelector('form')

// This will store the empty value
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result =document.querySelector('#result')

    if(height === '' || isNaN(height) || height < 0)
    {
        result.innerHTML = `Please give a valid  height ${height}`
    }
    else if(weight === '' || isNaN(weight) || weight < 0)
    {
        result.innerHTML = `Please give a valid weight ${weight}`
    }
    else if(1){
        const bmi = ((weight /((height*height) / 10000)).toFixed(2))
        if(bmi < 18.6){
            result.innerHTML = `<span> ${bmi} you are under weight </span>`
            result.style.color = 'red'
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML = `<span> ${bmi} you are in normal range </span>`
            result.style.color = 'green'
        }
        else{
            result.innerHTML = `<span> ${bmi} you are over weight </span>`
            result.style.color = 'red'  
        }
    }
    
})