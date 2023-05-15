const cliente = {
    nome: "Caio",
    idade: 23,
    email: "caiocaiu@outlook.com",
    telefone: ["41 995432657", "41 995444447"],
};

cliente.endereco = {
    rua: "R. Gutennach",
    numero: 1358,
    apartamento: true,
    complemento: "ap 765",
};


// formas de imprimir:

console.log(cliente.endereco);
// console.log(cliente["endereco"]);