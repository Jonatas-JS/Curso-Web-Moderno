const funcs = []

for (var i = 0; i < 10; i++) {
  funcs.push(function(){
    console.log(i)
  })
}
// nesse exemplo mesmo usando o FUNCTION o VAR não se limita ao seu bloco
// e imprime nas duas vezes o 10.
funcs[2]()
funcs[8]()