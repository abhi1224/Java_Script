
const randomColor = function(){
    
    let hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let intervalId;

const startChangingColor = function(){

    intervalId = setInterval(changeColor, 1000);
    function changeColor(){
        document.body.style.backgroundColor = randomColor();
    }

}

const stopChangingColor = function(){
    
    document.body.style.backgroundColor = 'white';
    clearInterval(intervalId);

}

document.querySelector('#start').addEventListener
('click',startChangingColor)

document.querySelector('#stop').addEventListener
('click',stopChangingColor)
