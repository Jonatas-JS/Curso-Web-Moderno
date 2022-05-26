for (let i = 0; i < 10; i++) {
  console.log(i)
}
console.log('i =', i) // nesse caso da um erro pq o i não foi definido já que
// o mesmo só foi criado no bloco correspondente a FOR o que faz com que dentro
// do bloco ele funcione e imprima 1, 2, 3, 4... mas fora, ele nunca existiu.