let valor // não inicializada, não foi atribuido nada a ela
console.log(valor)

valor = null // ausência de valor, não aponta para nada
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)