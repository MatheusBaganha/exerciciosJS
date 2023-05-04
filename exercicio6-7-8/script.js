// Exercicio 6

const fontWhiteToBlackBtn = document.getElementById('fontWhiteToBlack');
const fontBlackToWhiteBtn = document.getElementById('fontBlackToWhite');

const bgBlackToWhiteBtn = document.getElementById('bgBlackToWhite');
const bgWhiteToBlackBtn = document.getElementById('bgWhiteToBlack');

const text = document.getElementById('text')

function changeColorToWhite() {
    text.style.color = 'white';
}

function changeColorToBlack() {
    text.style.color = 'black';
}

function changeBgColorToWhite() {
    text.style.backgroundColor = 'white';
}

function changeBgColorToBlack() {
    text.style.backgroundColor = 'black';
}

fontBlackToWhiteBtn.addEventListener('click', changeColorToWhite)
fontWhiteToBlackBtn.addEventListener('click', changeColorToBlack)

bgBlackToWhiteBtn.addEventListener('click', changeBgColorToWhite)
bgWhiteToBlackBtn.addEventListener('click', changeBgColorToBlack)


// Exercicio 7

const aumentarFonteBtn = document.getElementById('aumentarFonte')
const diminuirFonteBtn = document.getElementById('diminuirFonte')

function handleBiggerFont() {
    const fontSize = parseInt(text.style.fontSize)
    text.style.fontSize = `${(fontSize + 1)}px`
}

function handleSmallerFont() {
    const fontSize = parseInt(text.style.fontSize)
    text.style.fontSize = `${(fontSize - 1)}px`
}

aumentarFonteBtn.addEventListener('click', handleBiggerFont)
diminuirFonteBtn.addEventListener('click', handleSmallerFont)


// Exercicio 8

const upperBtn = document.getElementById('uppercase');
const lowerBtn = document.getElementById('lowercase');

function upperCaseText() {
    text.innerText = text.innerText.toUpperCase();
}

function lowerCaseText() {
    text.innerText = text.innerText.toLowerCase();
}

upperBtn.addEventListener('click', upperCaseText)
lowerBtn.addEventListener('click', lowerCaseText)