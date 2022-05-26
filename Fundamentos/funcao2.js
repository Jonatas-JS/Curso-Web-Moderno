// Armazenar uma função em uma variável
const imprimirSoma = function (a, b) { // neste caso não sou obrigado a dar nome a função
  console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenando uma ARROW FUNCTION em uma variável
const soma = (a, b) => {
  return a + b
}
console.log(soma(2, 3))

// Retorno implícito
const subtracao = (a, b) => a - b // usado para funções de uma única linha
console.log(subtracao(2, 3))