const pessoaFisicaRadio = document.querySelector('#fisica')
const pessoaJuridicaRadio = document.querySelector('#juridica')
const inputNascimento = document.getElementById('nascimento')

const btnEnviar = document.getElementById('enviar')
const inputCEP = document.getElementById('cep')
const inputCPF = document.getElementById('cpf')
const inputCNPJ = document.getElementById('cnpj')

function handleChange() {
    if(pessoaFisicaRadio.checked) {
        inputCPF.disabled = false;
        inputCNPJ.disabled = true;
        inputNascimento.disabled = false;
    }

    if(pessoaJuridicaRadio.checked) {
        inputCNPJ.disabled = false;
        inputCPF.disabled = true;
        inputNascimento.disabled = true;
    }
}

function handleSubmit() {
    const cepRegex = /^\d+$/
    
    if(cepRegex.test(inputCEP.value)) {
        document.body.innerHTML += "<p>ENVIADO COM SUCESSO!</p>"
    } else {
        document.body.innerHTML += "<p>CEP deve receber apenas números!</p>"
    }
}

pessoaFisicaRadio.addEventListener('change', handleChange)
pessoaJuridicaRadio.addEventListener('change', handleChange)


btnEnviar.addEventListener('click', handleSubmit)
