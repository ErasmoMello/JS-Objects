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

for (let chave in cliente){
    let tipo = typeof cliente [chave];
    if (tipo !==  'object' && tipo !== 'function'){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}
