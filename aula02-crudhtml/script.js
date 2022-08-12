const button = document.getElementById('btn-form-input')
const form = document.getElementById('add-form-users')
const table = document.getElementById('table-users')

let users = []

const addUser = () => {

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

        table = document.querySelector('tbody').appendChild(tr)


    })
}

button.addEventListener('click', () => {

    const formData = new FormData(form)
    const { name, surname, phone, email } = Object.fromEntries(formData)
    const user = { name, surname, phone, email }
    users.push(user)

    addUser()

})
