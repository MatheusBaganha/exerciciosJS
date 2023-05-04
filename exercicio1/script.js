function changeBackgroundToRed(e) {
    e.preventDefault();
    document.body.style.backgroundColor = "red"
}

function changeBackgroundToGreen(e) {
    e.preventDefault();
    document.body.style.backgroundColor = "green"
}

function changeBackgroundToYellow(e) {
    e.preventDefault();
    document.body.style.backgroundColor = "yellow"
}

function changeBackgroundToBlue(e) {
    e.preventDefault();
    document.body.style.backgroundColor = "blue"
}

const btnRed = document.getElementById('vermelho');
const btnGreen = document.getElementById('verde');
const btnYellow = document.getElementById('amarelo');
const btnBlue = document.getElementById('azul');

btnRed.addEventListener('click', changeBackgroundToRed);
btnGreen.addEventListener('click', changeBackgroundToGreen);
btnBlue.addEventListener('click', changeBackgroundToBlue);
btnYellow.addEventListener('click', changeBackgroundToYellow);