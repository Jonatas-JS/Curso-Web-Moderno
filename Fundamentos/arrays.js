const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

valores[7] = 6.3 /* <1 empty item> está informando que há 02 espaços vazios entre o ultimo elemento e o que estou buscando */
console.log(valores)
console.log(valores.length) /* length=>me mostra quantos elementos tenho no array */

valores.push({id: 3}, false, null, 'teste') /* push=> inserir elementos no array */
console.log(valores)

console.log(valores.pop()) /* pop=> remover o ultimo elemento do array */
delete valores[0] /* delete=> deleta um elemento específico */
console.log(valores)
