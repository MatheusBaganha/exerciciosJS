const inputs = document.querySelectorAll('input')
const btn = document.getElementById('btn')
const minChecked = 2;

function handleChange() {
    const checkedBoxs = document.querySelectorAll('input:checked').length;
    if(checkedBoxs >= minChecked) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
    btn.innerHTML = btn.disabled ? 'Desabilitado' : 'Habilitado';
}

inputs.forEach((input) => {
    input.addEventListener('change', handleChange)
})