const btnAddUser = document.getElementById('btn-cad-client')
const formUsers = document.getElementById('cad-client')
const tableUsers = document.getElementById('table-client')

let users = []

const addUser = () => {
    const formData = new FormData(formUsers)
    const { name, email} = Object.fromEntries(formData)
    const user = { name, email }

    users.push(user)
    createTable()
}

btnAddUser.addEventListener('click', addUser)

const createTable = () => {

    const tbody = document.createElement('tbody')
    tableUsers.querySelector('tbody').remove()
    tableUsers.appendChild(tbody)


    users.forEach((user) => {
        let tr = document.createElement('tr')
        let td = document.createElement('td')

       
        td.innerText = user.name
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = user.email
        tr.appendChild(td)
        
        tableUsers.querySelector('tbody').appendChild(tr)
        

    
    })
}

