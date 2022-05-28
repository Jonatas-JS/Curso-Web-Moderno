// o module.exports inicia como um objeto vazio
console.log(module.exports)
// duas formas de referenciar o module.exports é usando o THIS e o EXPORTS
console.log(module.exports === this)
console.log(module.exports === exports)

//apesar de parecerem três coisas diferentes eles estáo apontanmdo para a mesma coisa, o module.exports
this.a = 1
exports.b = 2
module.exports.c = 3
console.log(module.exports)

exports = {
  nome: 'Teste'
}

console.log(module.exports)
module.exports = { publico: true }