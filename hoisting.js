// Hoisting => isamento, uma variável é "isada" quando declarada.
// Assim, mesmo tendo declarado a variável apenas depois de a ter chamada o código não da erro.

console.log('a =', a) // aqui é Undefined já que não existe nenhum valor atribuido
var a = 2
console.log('a =', a)

// É como se na hora a execução ele executasse assim:
function teste() {
  var a
  console.log('a =', a)
  a = 2
  console.log('a =', a)
}
teste()