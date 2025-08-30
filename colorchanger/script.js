const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
buttons.forEach((button) =>
button.addEventListener('click',function(e){
    if(e.target.id==='grey'){
        body.style.background=e.target.id
    }
    if(e.target.id==='blue'){
        body.style.background=e.target.id
    }
    if(e.target.id==='pink'){
        body.style.background=e.target.id
    }
    if(e.target.id==='beige'){
        body.style.background=e.target.id
    }
})
)

// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
// })})

// to iterate over the buttons of colors we have to select complete button class
//and when the click event is triggered on the buttons we have to add background style on each e 