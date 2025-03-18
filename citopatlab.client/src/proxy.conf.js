const { env } = require('process');

// adicionei a url da api aqui pra direcionar meu metodo a essa url pra trazer os dados que estao vindo de lá 
// geralmente se cria uma enviroment pra fazer isso, mas está feito aqui
const target = 'https://localhost:7103' 
const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast", // metodo onde vai bater no meu endpoint no backend
    ],
    target,
    secure: false
  }
]

module.exports = PROXY_CONFIG;
