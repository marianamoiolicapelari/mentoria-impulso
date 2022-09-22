const formAddUser = document.getElementById('form-add-user')
const tablePosts = document.getElementById('table-post-user')
const btnAddUser = document.getElementById('btn-add-user')

url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then((response) => response.json())
    .then((response) => {
        createTablePosts(response)
    })

const clearTable = () => {
    const tbody = document.createElement('tbody')
    tablePosts.querySelector('tbody').remove()
    tablePosts.appendChild(tbody)
}

const createTablePosts = (users) => {
    clearTable()

    users.forEach((user) => {
        const tr = document.createElement('tr')
        let td = document.createElement('td')

        td.innerText = user.id
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = user.name
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = user.email
        tr.appendChild(td)

        tablePosts.querySelector('tbody').appendChild(tr)
    })


    const addUser = () => {
        const formData = new FormData(formAddUser)
        const newUser = Object.fromEntries(formData)


        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => response.json())
            .then((response) => {

                const tr = document.createElement('tr')
                let td = document.createElement('td')

                td.innerText = response.id
                tr.appendChild(td)

                td = document.createElement('td')
                td.innerText = response.name
                tr.appendChild(td)

                td = document.createElement('td')
                td.innerText = response.email
                tr.appendChild(td)

                tablePosts.querySelector('tbody').appendChild(tr)
            })
    }
    btnAddUser.addEventListener('click', addUser)
}