console.log(7 / 0); // qualquer número dividido por 0 resulta em um VALOR INFINITO, isso faz com que o processo seja calculado mais rápido mas gera essa imprecisão.

console.log("10.3" / 2); // por ter uma tipagem fraca ele consegue entender essa String como número e assim continuar o comando.

console.log("Show!" * 2); // me outras linguagens é impresso Show duas vezes.

// console.log(10.toString());  \\ tentando transformar o VALOR LITERAL 10 em uma variavel tipo String, não funciona!

let numero1 = 10.345;
let numero2 = (numero1).toFixed(2); // o toFixed é apenas aredondamento visual.
console.log(numero2);
let resultado = ((numero1) + 1.01);
console.log(resultado);