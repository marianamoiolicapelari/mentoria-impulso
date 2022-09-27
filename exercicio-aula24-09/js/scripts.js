const formAddUser = document.getElementById('form-cad-user')
const btnAddUser = document.getElementById('btn-form-cad-user')
const tableAddUser = document.getElementById('table-add-user')

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then((response) => response.json())
    .then((response) => {
        createTablePosts(response)
    })

const createTablePosts = (users) => {
    users.forEach((user) => {
        const tr = document.createElement('tr')
        let td = document.createElement('td')

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

        tableAddUser.querySelector('tbody').appendChild(tr)

    })
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
        .then((response) => response.json())
        .then((response) => {

            const tr = document.createElement('tr')
            let td = document.createElement('td')

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

            tableAddUser.querySelector('tbody').appendChild(tr)

        })
}

btnAddUser.addEventListener('click', addUser)

