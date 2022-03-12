var numero = 1
{
  let numero = 2 // LET=> seu escopo limita-se ao bloco.
  console.log('dentro =', numero)
}
console.log('fora =', numero) // dessa forma são tratadas separadamente.