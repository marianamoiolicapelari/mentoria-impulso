const formCadBtn = document.getElementById('form-cad-btn')

formCadBtn.addEventListener('click', () => {
    const formCad = document.getElementById('form-cad')
    const { cpf, nome, sobrenome, datanasc, email } = formCad
    
    console.log(cpf.value)
    console.log(nome.value)
    console.log(sobrenome.value)
    console.log(datanasc.value)
    console.log(email.value)
})


//estudar sobre getElementByID
//estudar sobre addEventListener
//estudar sobre getElementByClassName