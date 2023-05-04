const yellowRadio = document.getElementById('yellow');
const redRadio  = document.getElementById('red');
const blueRadio  = document.getElementById('blue');
const greenRadio  = document.getElementById('green');

function changeBackground(e, color) {
    if(e.target.checked) {
         document.body.style.backgroundColor = color;
    }
}

yellowRadio.addEventListener('click', (e) => changeBackground(e, 'yellow'))
redRadio.addEventListener('click', (e) => changeBackground(e, 'red'))
blueRadio .addEventListener('click', (e) => changeBackground(e, 'blue'))
greenRadio.addEventListener('click', (e) => changeBackground(e, 'green'))