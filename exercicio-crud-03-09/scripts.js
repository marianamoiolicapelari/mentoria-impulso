const btnAddClient = document.getElementById('btn-cad-client-form')
const formAddClient = document.getElementById('cad-client-form')
const tableClient = document.getElementById('cad-client-table')

let users = []

/**
 * Deleta cliente
 * 
 * @param {number} id
 * @return {void} createTable
 */
const deleteUser = (id) => {
    users = users.filter((user) => user.id !== id)
    createTable()
}

/**
 * Cria a tabela de cliente
 * 
 * @return {void} createTable
 */
const createTable = () => {
    const tbody = document.createElement('tbody')
    tableClient.querySelector('tbody').remove()
    tableClient.appendChild(tbody)

    users.forEach((user) => {
        let tr = document.createElement('tr')
        let td = document.createElement('td')

        let btnDelete = document.createElement('button')
        btnDelete.setAttribute('class', 'btn-success')
        btnDelete.setAttribute('onclick', `deleteUser(${user.id})`)
        btnDelete.innerText = 'Deletar'
        
        td.innerText = user.id
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = user.name
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = user.cpf
        tr.appendChild(td)

        td = document.createElement('td')
        td.appendChild(btnDelete)
        tr.appendChild(td)

        tableClient.querySelector('tbody').appendChild(tr)
    })
}


/**
 * Adiciona cliente a tabela
 * 
 * @param {number} id
 * @param {string} name
 * @param {string} cpf
 * @return {void} createTable
 */
const addUser = () => {
    const formData = new FormData(formAddClient)
    const { name, cpf } = Object.fromEntries(formData)

    const id = Math.floor(Math.random() * 999)

    const user = { id, name, cpf }
    users.push(user)
    createTable()
    
}

btnAddClient.addEventListener('click', addUser )














