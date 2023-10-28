# Java_Script
A repo for java script


# Project 1 Color Switcher

## Project Link

[ HTML CODE](https://github.com/abhi1224/Java_Script/blob/main/Project/colorchanger/index.html)

``` html code

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <div class="container">

        <h1>Color Scheme Switcher</h1> 

        <div class="box">
            <span class="button" id="gray"></span>
            <span class="button" id="green"></span>
            <span class="button" id="yellow"></span>
            <span class="button" id="white"></span>
            <span class="button" id="blue"></span>
        </div>      

        <h2>Try clicking on one of color above <span> to change background color of the entire body.</span> </h2>

    </div>

    <script src="script.js"></script>
</body>
</html>

```
[CSS CODE](https://github.com/abhi1224/Java_Script/blob/main/Project/colorchanger/style.css)
``` css code 
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

.container{
    margin:auto;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    
}

.box{
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    margin: 25px;
}

.button{
    display: inline-block;
    height: 20vh;
    width: 10vw;
    margin:25px;
    border: 2px solid black;
    cursor: pointer;
}

#gray{
    background-color:gray;
}
#white{
    background-color: white;
}
#blue{
    background-color: blue;    
}
#yellow{
    background-color: yellow;;
}
#green{
    background-color: green;
}


```

[JAVASCRIPT CODE](https://github.com/abhi1224/Java_Script/blob/main/Project/colorchanger/script.js)

``` javascript code 

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    button.addEventListener ('click', function(btn){

        let key = btn.target.id
            switch (key) {
            case 'green':
                body.style.backgroundColor = 'green'
                break;
            
            case 'gray':
                body.style.backgroundColor = btn.target.id
                break;

            case 'blue':
                body.style.backgroundColor = btn.target.id
                break;

            case 'yellow':
                body.style.backgroundColor = btn.target.id
                break;
            
            case 'white':
                body.style.backgroundColor = btn.target.id
                break;
        
            default:
                break;
       }
    })
});

```