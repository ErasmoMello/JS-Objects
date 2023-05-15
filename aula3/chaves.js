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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessário ter um endereço cadastrado.");
}