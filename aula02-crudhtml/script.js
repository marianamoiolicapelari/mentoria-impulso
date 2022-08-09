const button = document.getElementById('btn-form-input')
const form = document.getElementById('add-form-users')

let users = []

button.addEventListener( 'click', () => {
    
    const formData = new FormData(form)
    const { name, surname, email, phone } = Object.fromEntries(formData)
    const user = { name, surname, email, phone }
    users.push(user)

    console.log(user)
})




