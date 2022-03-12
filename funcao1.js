// Fução sem retorno
function imprimirSoma(a, b) { // não declaro se é um LET ou CONST
  console.log(a + b) // aqui eu somo e mostro o valor ao mesmo tempo
}

imprimirSoma(2, 3) // passei os dois valores de A e B
imprimirSoma(2) // defini somente o primeiro valor, o segundo fica Undefined que da == NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // considera apenas o primeiro valor
imprimirSoma()

// Função com retono
function soma(a, b = 0) { // aqui eu declaro que o valor padrão de B é 0
  return a + b // estou retornando com o valor da soma
}
console.log(soma(2, 3)) // atribuí dos valores
console.log(soma(2)) // como declarei que B = 0 o valor mostrado será 2 
console.log(soma())