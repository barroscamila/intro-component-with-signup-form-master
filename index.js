const form = document.querySelector('.formContainer')
const nameInput = document.querySelector('#name')
const lastNameInput = document.querySelector('#lastName')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // Verificar se nome e sobrenome estão preenchidos corretamente
    if (!isNameValid(nameInput.value, lastNameInput.value)) {
        alert('Nome ou Sobrenome inválidos.')
    }

    // Verificar se email está preenchido corretamente
    if (!isEmailValid(emailInput.value)) {
        alert("E-mail inválido.")
    }

    // Se tudo estiver OK
    form.submit()
})

function isNameValid(name, lastname) {
    const nameRegex = new RegExp(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
    )

    if (nameRegex.test(name) && nameRegex.test(lastname)) {
        return true
    }

    return false
}

function isEmailValid(email) {
    const emailRegex = new RegExp(
        //teste123@gmail.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z{2,}$]/
    )

    if (emailRegex.test(email)) {
        return true
    }

    return false
}