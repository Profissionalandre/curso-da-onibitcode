/*Cadastro de Imóveis
Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
O menu deve ter a opção de salvar um imóvel.
Para salvar um novo imóvel o programa deve pedir as seguintes informações: Nome do proprietário.Quantidade de quartos.Quantidade de banheiros.Se possui garagem.
Nome do proprietário.
Quantidade de quartos.
Quantidade de banheiros.
Se possui garagem.
O menu também deve ter a opção de mostrar todos os imóveis salvos.*/

const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Imóveis cadastrados: " + imoveis.length + "\n" +
        "\n1. Para cadastrar um imóvel\n2. Para mostrar todos os imóveis cadastrados\n3. Sair para encerrar o programa.")

    switch (opcao) {
        case "1":
            let objeto = {}
            objeto.proprietario = prompt("Digite o nome do proprietário: ")
            objeto.quartos = prompt("Digite a quantidade de quartos: ")
            objeto.banheiros = prompt("Digite a quantidade de banheiros: ")
            objeto.garagem = prompt("Digite se possui garagem:(Sim/não)")

            const confirmacao = confirm("Deseja salvar o imóvel?\n" +
            "\nPorpriétário: " + objeto.proprietario +
            "\nQuartos: " + objeto.quartos +
            "\nBanheiro: " + objeto.banheiros +
            "\nGaragem: " + objeto.garagem
        )
        if (confirmacao) {
            imoveis.push(objeto)
        }
            break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                 alert(
                    "Imóvel " + (i + 1) + "\n" +
                    "Proprietário: " + imoveis[i].proprietario + "\n" +
                    "Quartos: " + imoveis[i].quartos + "\n" +
                    "Banheiros: " + imoveis[i].banheiros + "\n" +
                    "Garagem: " + imoveis[i].garagem
                )
            break
        case "3":
                alert("Programa encerrado")
            break
        default:
                alert("Opção inválida")
            }
} while (opcao != "3")

