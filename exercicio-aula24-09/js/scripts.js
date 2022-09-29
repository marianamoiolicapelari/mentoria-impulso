const formAddUser = document.getElementById('form-cad-user')
const btnAddUser = document.getElementById('btn-form-cad-user')
const tableAddUser = document.getElementById('table-add-user')

const url = 'https://jsonplaceholder.typicode.com/users'

const responseToJson = (response) => response.json()

const onSuccess = (response) => {
    createTablePosts(response)
}

fetch(url)
    .then(responseToJson)
    .then(onSuccess)


const clearTable = () => {
    const tbody = document.createElement('tbody')
    tableAddUser.querySelector('tbody').remove()
    tableAddUser.appendChild(tbody)
}

const createTablePosts = (users) => {
    users.forEach((user) => {
        const tr = document.createElement('tr')
        let td = document.createElement('td')

        let btnDelete = document.createElement('button')
        btnDelete.setAttribute('class', 'btn-delete')
        btnDelete.setAttribute('onclick', `deleteUser(${user.email})`)
        btnDelete.innerText = 'Deletar'

        td.innerText = user.name
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = user.username
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = user.phone
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = user.email
        tr.appendChild(td)

        td = document.createElement('td')
        td.appendChild(btnDelete)
        tr.appendChild(td)

        tableAddUser.querySelector('tbody').appendChild(tr)

    })
}

const onCreateUserSuccessToJson = (response) => response.json()

const onCreateUserSuccess = (response) => {
    const tr = document.createElement('tr')
    let td = document.createElement('td')

    td.innerText = response.name
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = response.username
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = response.phone
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = response.email
    tr.appendChild(td)

    let btnDelete = document.createElement('button')
    btnDelete.setAttribute('class', 'btn-delete')
    btnDelete.setAttribute('onclick', `deleteUser(${response.email})`)
    btnDelete.innerText = 'Deletar'

    td = document.createElement('td')
    td.appendChild(btnDelete)
    tr.appendChild(td)

    tableAddUser.querySelector('tbody').appendChild(tr)
}

const addUser = () => {
    const formData = new FormData(formAddUser)
    const newUser = Object.fromEntries(formData)

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(onCreateUserSuccessToJson)
        .then(onCreateUserSuccess)
}

btnAddUser.addEventListener('click', addUser)


const deleteUser = (email) => {

    fetch(`https://jsonplaceholder.typicode.com/user/${email}`, {
        method: 'DELETE',
    })

}