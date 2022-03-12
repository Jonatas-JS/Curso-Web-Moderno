const funcs = []

for (let i = 0; i < 10; i++) {
  funcs.push(function(){
    console.log(i)
  })
}
// nesse exemplo, usando o LET é possível observar que os valores de retono
// são respectivamente as corretas.
funcs[2]()
funcs[8]()