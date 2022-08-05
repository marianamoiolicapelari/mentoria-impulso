const form = document.getElementById('cad-user')
const btnAddUser = document.getElementById('add-user')
const table = document.getElementById('table-users')

const users = []

const clearTable = () => {
  const tbody = document.createElement('tbody')
  table.querySelector('tbody').remove()
  table.appendChild(tbody)
}

const addUser = () => {

  clearTable()
  
  users.forEach((user) => {
    // Criamos uma linha para o formulário
    let tr = document.createElement('tr')
    //Criamos uma célula para a linha
    let td = document.createElement('td')
  
    // Adicionamos valor a célula
    td.innerText = user.name
    // Adiciona a célula na linha
    tr.appendChild(td)
  
    td = document.createElement('td')
    td.innerText = user.phone
    tr.appendChild(td)
  
    td = document.createElement('td')
    td.innerText = user.email
    tr.appendChild(td)
    table.querySelector('tbody').appendChild(tr)
  
  })


}

btnAddUser.addEventListener('click', () => {
  const userData = new FormData(form)
  const { name, phone, email } = Object.fromEntries(userData)
  
  const user = { name: name, phone: phone, email: email }

  users.push(user)
  
  addUser()
})