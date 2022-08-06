const button = document.getElementById('btn-form-input')
const form = document.getElementById('add-form-users')

button.addEventListener( 'click', () => {
    
    const formData = new FormData(form)
    const { name, surname, email, phone } = Object.fromEntries(formData)
    console.log(name)
})


