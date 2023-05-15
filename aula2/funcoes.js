const cliente = {
    nome: "Caio",
    idade: 23,
    email: "caiocaiu@outlook.com",
    telefone: ["41 995432657", "41 995444447"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        }
        else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    
    }
};

cliente.efetuaPagamento(25);