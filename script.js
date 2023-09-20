// const redbutton = document.getElementById('red')
// redbutton.addEventListener('click', () => {
//     document.body.style.backgroundColor = redbutton.id;
//     h1.style.color = 'black';
//     h2.style.color = 'black';
// } )

// const greenbutton = document.getElementById('green')
// greenbutton.addEventListener('click', () => {
//     document.body.style.backgroundColor = greenbutton.id
//     h1.style.color = 'black';
//     h2.style.color = 'black';
// } )

// const h1 = document.querySelector('h1');
// const h2 = document.querySelector('h2');
// const blackbutton = document.getElementById('black')
// blackbutton.addEventListener('click', () => {
//     document.body.style.backgroundColor = blackbutton.id;
//     h1.style.color = 'white'
//     h2.style.color = 'white'
// } )

// const yellowbutton = document.getElementById('yellow')
// yellowbutton.addEventListener('click', () => {
//     document.body.style.backgroundColor = yellowbutton.id;
//     h1.style.color = 'black';
//     h2.style.color = 'black';
// } )

const buttons = document.querySelectorAll('.buttons')
buttons.forEach(function(button){
    button.addEventListener('click',(div) => {
        // document.body.style.backgroundColor = div.target.id; => aise bhi ho rha tha but div ke bahar click karne par vaps white ho ja rha tha isliye if use karna pda
        if(div.target.id === 'red'){
            document.body.style.backgroundColor = div.target.id;
            document.querySelector('h2').style.color = 'black'
            document.querySelector('h1').style.color = 'black'
        }
        if(div.target.id === 'green'){
            document.body.style.backgroundColor = div.target.id;
            document.querySelector('h2').style.color = 'black'
            document.querySelector('h1').style.color = 'black'
        }
        if(div.target.id === 'black'){
            document.body.style.backgroundColor = div.target.id;
            document.querySelector('h1').style.color = 'white'
            document.querySelector('h2').style.color = 'white'
        }
        if(div.target.id === 'yellow'){
            document.body.style.backgroundColor = div.target.id;
            document.querySelector('h2').style.color = 'black'
            document.querySelector('h1').style.color = 'black'
        }
    })
})


