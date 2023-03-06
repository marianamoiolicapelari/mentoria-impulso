const btnAddUser = document.getElementById("btn-form-add-user")
const formAddUser = document.getElementById("form-add-user")
const tableUsers = document.getElementById("table-users")

let users = []

const deleteUser = (id) => {
  users = users.filter((user) => user.id !== id)
  createTable()
  console.log(users)
}

const addUser = () => {
  const formData = new FormData(formAddUser)
  const { name, surname, email } = Object.fromEntries(formData)

  const id = Math.floor(Math.random() * 9999)

  const user = {id, name, surname, email}

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
    let td  = document.createElement('td')

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
    td.innerText = user.surname
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = user.email
    tr.appendChild(td)

    td = document.createElement('td')
    td.appendChild(btnDelete)
    tr.appendChild(td)

    tbody.appendChild(tr)

    tableUsers.appendChild(tbody)

  })
}
