//acessando moduloA.js, no caso sistemas Wind. e MAC não haverá problemas na sitação do arquivo sem diferença de letras Maipusculas e minusculas
//porém, para o Linux(maioria dos Servs atuais) eles não interpretarão o caminho se não estiver tal qual o nome do arquivo. 
const moduloA = require('../../moduloa')
console.log(moduloA.ola)
//aqui, mesmos sendo uma sitação a uma pasta no require ele sempre busca primeiro pelo arquivo INDEX.JS, por isso funciona só de colocar o nome da pasta.
//como saudacao está na pasta node_modules usando o require não é preciso indicar o caminho da pasta.
const saudacao = require('saudacao')
console.log(saudacao.ola)
//aqui é uma sitação com caminho relativo, mas com arquivo INDEX.JS dentro.
const c = require('./pastaC')
console.log(c.ola2)
//usando os recursos do http que está no node_modules
const http = require('http')
http.createServer((req, res) => {
  res.write('Bom dia!')
  res.end()
}).listen(8080)