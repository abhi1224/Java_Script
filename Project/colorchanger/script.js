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