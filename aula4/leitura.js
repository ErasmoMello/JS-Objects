const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

//.stringify JSON => em String
const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

//.parse (traduzir, adequar) JSON => em Objeto
const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);