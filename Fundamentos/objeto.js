const prod1 = {}
/* as {} representam a criação de um objeto 
  o Objeto e formado por CHAVE & VALOR */
prod1.nome = 'Celular Ultra Mega' // CHAVE=nome, VALOR=Celular Ultra Mega
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.90,
  obj: { // posso criar objetos dentro dos objetos
    att1: 1,
    obj: {
        desconto: 0.40
    }
  }
}

console.log(prod2)