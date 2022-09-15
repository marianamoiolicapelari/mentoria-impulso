const tablePosts = document.getElementById('table-view')

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
  .then((res) => res.json())
  .then((response)=>{
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
    td.innerText = user.username
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = user.email
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = user.phone
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = user.address.street
    tr.appendChild(td)

    tablePosts.querySelector('tbody').appendChild(tr)

  });
  
}