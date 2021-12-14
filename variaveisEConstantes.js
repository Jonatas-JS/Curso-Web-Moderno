//var => id da variavel => simbolo de att(atribuição) => valor
var a = 3;  //foi declarado como VALOR 3 e mais a frete é REDECLARADO como VALOR 30
let b = 4;

var a = 30;   //VAR pode ser redeclarado do decorrer do código
let b = 40;   //erro, LET não pode ser redeclarado(criado) pois já foi declarado acima
console.log(a,  b);

a = 300;
b = 400;
console.log(a, b);

const c = 5;  //constantes não mudam sua att
console.log(c);