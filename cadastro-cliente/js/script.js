const btnAddUser = document.getElementById('btn-cad-client')
const formAddUser = document.getElementById('cad-client')
const tableUsers = document.getElementById('table-client')

let users = []

const deleteUser = (id) => {
    users = users.filter((user) => user.id !== id)
    createTable()
}

const addUser = () => {
    const formData = new FormData(formAddUser)
    const { name, cpf, email, phone, datenasc, nationality, street,
        district, complement, city, country } = Object.fromEntries(formData)

    const id = Math.floor(Math.random() * 9999)

    const user = {
        id, name, cpf, email, phone, datenasc, nationality, street,
        district, complement, city, country
    }

    users.push(user)
    createTable()
}

btnAddUser.addEventListener('click', () => {
    addUser()
})

const createTable = () => {
    const tbody = document.createElement('tbody')
    tableUsers.querySelector('tbody').remove()
    tableUsers.appendChild(tbody)

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
        td.innerText = user.email
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = user.phone
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = user.datenasc
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = user.nationality
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = user.street
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = user.district
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = user.complement
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = user.city
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = user.country
        tr.appendChild(td)

        td = document.createElement('td')
        td.appendChild(btnDelete)
        tr.appendChild(td)

        tbody.appendChild(tr)
        tableUsers.appendChild(tbody)
    })
}