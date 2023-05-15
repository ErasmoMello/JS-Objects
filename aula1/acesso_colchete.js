const cliente = {
    nome: "Arthur",
    idade: 25,
    cpf: "045.327.567.09",
    email: "arthur@gmail.com",
};

console.log(`O nome do cliente é ${cliente['nome']} e essa pessoa tem ${cliente['idade']} anos`);

const chaves = ['nome', 'idade', 'cpf', 'email'];

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});