let pessoa = {
    nome : "John",
    idade : 20,
    dizerOla() {
        console.log("Olá, meu nome é " + this.nome);
}
}
    pessoa.dizerOla()