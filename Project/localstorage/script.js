const inputField = document.getElementById('input-field')
const button = document.getElementById('data-button')
const userName = document.getElementById('username')

button.addEventListener('click', () => {
    localStorage.setItem('name', inputField.value)
    location.reload() // automatically reload the page 
})

window.addEventListener('load', () =>{
    const value = localStorage.getItem('name')
    userName.innerText = value
})