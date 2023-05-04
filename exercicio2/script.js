const yellowLink = document.getElementById('yellow');
const redLink = document.getElementById('red');
const blueLink = document.getElementById('blue');
const greenLink = document.getElementById('green');

function changeBackground(color) {
    document.body.style.backgroundColor = color;
}

yellowLink.addEventListener('mouseover', () => changeBackground('yellow'))
redLink.addEventListener('mouseover', () => changeBackground('red'))
blueLink.addEventListener('mouseover', () => changeBackground('blue'))
greenLink.addEventListener('mouseover', () => changeBackground('green'))