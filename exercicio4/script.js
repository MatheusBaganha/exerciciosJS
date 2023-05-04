const text = document.getElementById('texto');
const btnDisplay = document.getElementById('btnDisplay')

function toggleDisplay() {
    if(text.classList.contains('oculto')) {
        text.style.display = 'block';
        text.classList.remove('oculto');
        btnDisplay.innerHTML = 'Ocultar';
    } else {
        text.style.display = 'none';
        text.classList.add('oculto');
        btnDisplay.innerHTML = 'Mostrar';
    }
}

btnDisplay.addEventListener('click', toggleDisplay)