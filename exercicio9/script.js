const btnEnviar = document.getElementById('btnEnviar');

function handleSubmit(e) {
    e.preventDefault()

    const senha = document.getElementById('senha').value
    const senhaConfirmada = document.getElementById('confirmarSenha').value

    const senhasIguais = (senha === senhaConfirmada)
    const condicaoSenha = (senha.length >= 6 && senha.length <= 10)

    if(senhasIguais && condicaoSenha) {
        document.body.innerHTML += `<p>Senhas Válidas</p>`
    } else {
        document.body.innerHTML += `<p>Senhas Inválidas</p>`
    }
}

btnEnviar.addEventListener('click', handleSubmit)