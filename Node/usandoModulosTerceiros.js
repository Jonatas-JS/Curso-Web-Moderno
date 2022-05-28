// criado constante _ para receber as funcionalidades da requisição do lodash
const _ = require('lodash')
//setIterval => (valor, intervaloTempo)
//(_.random(de, até)) => acessando uma função da biblioteca lodash que gera números aleatórios.
setInterval(() => console.log(_.random(5, 10)), 2000)