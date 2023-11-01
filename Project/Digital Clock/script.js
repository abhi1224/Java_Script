const result = document.querySelector('#result')

setInterval(function(){

    const date = new Date()

    result.innerText = date.toLocaleTimeString()
    // console.log(date.toLocaleTimeString())

},1000)