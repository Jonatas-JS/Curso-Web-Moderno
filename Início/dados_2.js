console.log(19.9 * 0.6);

let nome = "Caderno"; //"Caderno" = String (Texto) => sequencia de símbolos
let categoria = "Papelaria";
let preco = 19.9;
let desconto = 0.4;
let precoComDesconto = preco * (1- desconto);
console.log(precoComDesconto);
let descontoporceto = (desconto*100);

console.log("Produto: " + nome+" | "  
  + "Categoria: " + categoria+" | "  
  + "Preço: R$ " + preco+" | " 
  + "Desconto: " + descontoporceto + "%"+" | "
  + "Valor Final: R$ " + precoComDesconto);