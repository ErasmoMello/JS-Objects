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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
console.log(`Ligando para ${telefoneComercial}`);
console.log(`Ligando para ${telefoneResidencial}`);
}

// ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);
ligaParaCliente(...cliente.telefone); //mesmo comportamento

const encomenda = {
    destinatario: cliente.nome,
    //endereco: cliente.enderecos[0],
    ...cliente.enderecos[0],
};

console.log(encomenda);