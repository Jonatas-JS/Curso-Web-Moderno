// Entendendo como funciona o ESCOPO
{
  {
    {
      {
        var sera = 'Será???' // criei uma variável(VAR) GLOBAL, essa pode ser vista e usada em qualquer lugar
        console.log(sera)
      }
    }
  }
}
console.log(sera)

function teste() {
  var local = 123
  console.log(local)
}
teste()
// console.log(local) // o VAR dentro de uma função só se pode ver dentro daquele bloco