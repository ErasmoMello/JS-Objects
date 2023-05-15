const pessoa = {
    nome: "Zuri",
    profissao: "Gatinha",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 66547839";

console.log(pessoa.telefone);

pessoa.nome = "Zuri Cat";

console.log(pessoa);

// const não podem ser reatribuídas, mas podem ter seu conteúdo interno alterado.