const formCadClientes = document.getElementById('form-cad-clientes')
const btnCadClientes = document.getElementById('btn-cad-clientes')
const tableClientes = document.getElementById('table-clientes')
//const inputSurname = document.getElementById('surname')

const users = []

const addUser = () => {
    const formData = new FormData(formCadClientes)
    const { name, surname } = Object.fromEntries(formData)
    const user = { name, surname }
   


    if (name.length >= 3 && surname.length >= 4){
        users.push(user)
        createTable()
    } 

    
}


btnCadClientes.addEventListener('click', addUser)

const createTable = () => {
    const tbody = document.createElement('tbody')
    tableClientes.querySelector('tbody').remove()
    tableClientes.appendChild(tbody)

    users.forEach((user) => {
        let tr = document.createElement('tr')
        let td = document.createElement('td')

        td.innerText = user.name
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = user.surname
        tr.appendChild(td)

        tableClientes.querySelector('tbody').appendChild(tr)
    })

  
}

// tableClientes.addEventListener('mouseleave', () => console.log('Cliquei na tabela'))
// inputSurname.addEventListener('keyup', () => {
//     if ( inputSurname.value.length > 6 ){
//         inputSurname.value = ''
//     }
// })