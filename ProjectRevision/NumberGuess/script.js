const inputField = document.querySelector("#input-field")
const submitButton = document.querySelector("#submit-buttton")
const randomNumber = Math.floor(Math.random() * 100 + 1);
let previousG = document.querySelector(".previous-guesses")
let remainingG = document.querySelector(".last-result")
const resultMess = document.querySelector(".result-message")

let previousGuess = []
let numGuesses = 1

let playGame = true

if(playGame){
    submitButton.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(inputField.value)
        validateGuess(guess)
        // inputField.value = ''    
    })
}

function validateGuess(guess){
     if(isNaN(guess)){
        alert('Please enter a valid number')
     }
     else if(guess < 1){
        alert('Please enter a number greater then 1')
     }
     else if(guess > 100){
        alert('Please enter a valid number')
     }
     else{
        previousGuess.push(guess)
        if(numGuesses === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
     }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You guessed it right')
        resultMess.style.color = 'green'
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage('Number is too low')
    }
    else if(guess > randomNumber){
        displayMessage('Number is too high')
    }

}

function displayGuess(guess){
    inputField.value = ''
    previousG.innerHTML += `${guess}, `
    numGuesses++
    remainingG.innerHTML = `${11 - numGuesses}`
} 

function displayMessage(message){
    resultMess.innerHTML = message
}

function newGame(){

}

function endGame(){
    inputField.value = ''
    inputField.setAttribute('disabled',' ')
    playGame = false
}
