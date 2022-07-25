// Criar os dados do cliente
// Listar os dados
// Editar os dados
// Excluir os dados

let clientes = []

function adicionarCliente(nome, sobrenome, cpf, telefone) {
  
  let cliente = { nome, sobrenome, cpf, telefone}
  clientes.push(cliente)
}


function exibirClientes(){
  console.log(clientes)
}

function excluirClientes(cpf){
  clientes = clientes.filter((clientes) => {
    if (clientes.cpf !== cpf) 
    return clientes
  }
)}

function atualizaCliente(cpf, dadosAtuais){
  clientes.filter((clientes) => {
    if(clientes.cpf === cpf) {
      clientes = dadosAtuais
      console.log(clientes)
      return clientes
    }
})
}

const dadosAtuais = {nome:'Pedro', sobrenome:'Sousa', cpf:98765432198, telefone:333333333}

adicionarCliente("Maria", "Silva", 12345678912, 999999999)
adicionarCliente("Pedro", "Souza", 98765432198, 888888888)

excluirClientes(12345678912)
atualizaCliente(98765432198, dadosAtuais)
exibirClientes()







