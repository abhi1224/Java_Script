const button = document.querySelectorAll('.color')

const buttonArray = Array.from(button)
// console.log(buttonArray);

const color = buttonArray
    .map((item) => {
        item.addEventListener('click', (e) => {

            // console.log(e);
            // console.log(e.target.textContent);
            
            const backColor = e.target.id;
            document.body.style.backgroundColor = backColor;
        })
    }
        
);
