const usuarios = []

function cadastrarUsuario(nome, cpf, email, senha) {
  const usuario = { nome:nome, cpf:cpf, email:email, senha:senha }
  usuarios.push(usuario)
}

cadastrarUsuario( "Maria", 12345678999, "maria@gmail.com", 123456)
cadastrarUsuario( "José", 11111111133, "jose@gmail.com", 654321)
cadastrarUsuario( "João", 22222222233, "joao@gmail.com", 456123)
<<<<<<< HEAD

=======
cadastrarUsuario( "Luiza", 33333333366, "luiza@gmail.com", 459923)
>>>>>>> 1214d401e029857d3957d493851b8d5dedea2b1e

// usuarios.forEach((usuario, index) => {
//   console.log(`A senha do usuario é ${usuario.nome}.`)
// })

usuarios.forEach((usuario) => {
  if(usuario.nome === 'Maria') {
    console.log('Achei!')
  }
  
})
