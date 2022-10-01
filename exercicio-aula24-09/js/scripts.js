const formAddUser = document.getElementById('form-cad-user')
const btnAddUser = document.getElementById('btn-form-cad-user')
const tableAddUser = document.getElementById('table-add-user')

const deleteUser = (id) => {
    
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
    })
    .then((response) => response.json())
    .then((response) => {
        tableAddUser.querySelector('tbody').querySelector(`#user-${id}`).remove()
    } )
    .catch((error) => console.log(error))

}

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
    clearTable()
    users.forEach((user) => {
        const tr = document.createElement('tr')
        let td = document.createElement('td')
        tr.setAttribute('id',`user-${user.id}`)

        let btnDelete = document.createElement('button')
        btnDelete.setAttribute('class', 'btn-delete')
        btnDelete.setAttribute('onclick', `deleteUser('${user.id}')`)
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
    btnDelete.setAttribute('onclick', `deleteUser(${response.id})`)
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
            'Content-type': 'application/json',
        }
    })
        .then(onCreateUserSuccessToJson)
        .then(onCreateUserSuccess)
}

btnAddUser.addEventListener('click', addUser)




