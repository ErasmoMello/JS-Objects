const cliente = {
    nome: "Caio",
    idade: 23,
    email: "caiocaiu@outlook.com",
    telefone: ["41 995432657", "41 995444447"],
};

cliente.enderecos = [
    {
    rua: "R. Gutennach",
    numero: 1358,
    apartamento: true,
    complemento: "ap 765",
    },
];

cliente.enderecos.push({
    rua: "R. Jiosnig Uli",
    numero: 709,
    apartamento: false
});

//.filter retorna uma lista e não somente um objeto:
const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);












// formas de imprimir:

// console.log(cliente.enderecos);
// console.log(cliente["endereco"]);