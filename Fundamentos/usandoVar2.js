var numero = 1
{
  var numero = 2 // VAR=> seu escopo é maior, influenciado até fora do bloco.
  // Obs: não se comporta assim quando usado em função.
  console.log('dentro =', numero)
}
console.log('fora =', numero)