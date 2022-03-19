console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// console.log(obj1.nome)

console.log('vou criar função Obj')
function Obj(texto) {
  this.nome = texto
  this.exec = function() { // this=> vai jogar para fora(público), já que algo que está na função não podedia ser acessado fora dela.
    console.log('Exe...')
    return 'te peguei'
  }
}
console.log('vou criar uma instancia de Obj2')
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
console.log(obj3.exec())
obj2.nome = 'Moto'
console.log(obj2.nome, obj3.nome)