/**
 * Loja precisa de um sistema para armazenar as operações 
 * realizadas
 */

/** Dados a serem armazenados **/
// Cliente - Nome, cpf
// Venda - idVenda
// Produtos vendidos - 1 ou N =  { nomeProduto, valor, id}

// Onde armazenar
let vendas = []

/**
 * Esse metodo adicionar uma nova venda realizada
 * 
 * @param {string} nome 
 * @param {number} cpf 
 * @param {Array<object>} produtosComprados 
 */
function realizarVenda(nome, cpf, produtosComprados) {
  let produtos = produtosComprados.length
  let idVenda = cpf
  let cliente = { nome, cpf }
  let venda = { idVenda, cliente, produtos }

  vendas.push(venda)
}

let produtosComprados = [
  { nomeProduto: 'All Start Converse', valor: 360, id: 32432},
  { nomeProduto: 'All Start Converse', valor: 360, id: 32432},
]

let produtosComprados2 = [
  { nomeProduto: 'All Start Converse', valor: 360, id: 32432},
  { nomeProduto: 'All Start Converse', valor: 360, id: 32432},
  { nomeProduto: 'All Start Converse', valor: 360, id: 32432},
  { nomeProduto: 'All Start Converse', valor: 360, id: 32432},
  { nomeProduto: 'All Start Converse', valor: 360, id: 32432},
]

let produtosComprados3 = [
  { nomeProduto: 'All Start Converse', valor: 360, id: 32432},
  { nomeProduto: 'All Start Converse', valor: 360, id: 32432},
  { nomeProduto: 'All Start Converse', valor: 360, id: 32432},
  { nomeProduto: 'All Start Converse', valor: 360, id: 32432},
  { nomeProduto: 'All Start Converse', valor: 360, id: 32432},
  { nomeProduto: 'All Start Converse', valor: 360, id: 32432},
  { nomeProduto: 'All Start Converse', valor: 360, id: 32432},
  { nomeProduto: 'All Start Converse', valor: 360, id: 32432},
]

realizarVenda('João', 43242342342, produtosComprados)
realizarVenda('Maria', 78978978998, produtosComprados3)
realizarVenda('Paulo', 78978978998, produtosComprados2)

console.log(vendas)