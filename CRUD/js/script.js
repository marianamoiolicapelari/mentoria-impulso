const formClient = document.getElementById('form-cad-client')
const btnAddClient = document.getElementById('btn-cad-client')
const tableUsers = document.getElementById('table-users')

const users = []

const addUser = () => {
    const tbody = document.createElement('tbody')
    tableUsers.querySelector('tbody').remove()
    tableUsers.appendChild(tbody)

    users.forEach((user) => {
        let tr = document.createElement('tr')
        let td = document.createElement('td')

        td.innerText = user.name
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = user.surname
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = user.phone
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = user.email
        tr.appendChild(td)

        tableUsers.querySelector('tbody').appendChild(tr)
    })
}

btnAddClient.addEventListener('click', () => {
    const userData = new FormData(formClient)
    const { name, surname, phone, email } = Object.fromEntries(userData)
    const user = { name, surname, phone, email }
    users.push(user)

    addUser()
})

