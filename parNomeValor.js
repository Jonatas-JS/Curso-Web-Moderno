// par nome/valoe
const saudacao = 'Opa' // contexto léxico 1
// Léxico está relacionado a onde está, posição.

function exec() {
  const saudacao = 'Faaaala' // contexto léxico 2 devido ele estar dentro de uma função.
  return saudacao
}

const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua Muito Legal',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)