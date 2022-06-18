// Criar os dados do cliente
// Listar os dados
// Editar os dados
// Excluir os dados

// nome - string
// sobrenome - string
// email - string
// cpf - number
// data de nascimento - string


let clientes = []


function exibirClientes(){
  console.log(clientes)
} 


function adicionarCliente(name,surename,email,cpf,date){
  let cliente = {name, surename:surename ,email:email, cpf:cpf, date:date}
  clientes.push(cliente)
}

function excluirCliente(){
  clientes.splice(0,1)
}


adicionarCliente('Maria','Silva','mariasilva@gmail.com',22222222222,'11/11/2011')
adicionarCliente('Fa','Souza', 'joaosouza@gmail.com',55555555555,'11/01/1987')
adicionarCliente('João','Souza', 'joaosouza@gmail.com',55555555555,'11/01/1987')
adicionarCliente('Pedro','Lima', 'pedrolima@gmail.com',99999999999,'30/12/1990')
adicionarCliente('Luiza','Silva','luizasilva@gmail.com',77777777777, '15/01/1990')

excluirCliente()
exibirClientes()