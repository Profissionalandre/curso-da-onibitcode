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

// No script, vamos começar criando um array para salvar os imóveis, uma variável para a opção do menu e o do while:
const imoveis = []
let opcao = ""
// Depois podemos adicionar o prompt que mostra o menu:
do {
    opcao = prompt(
        "Imóveis cadastrados: " + imoveis.length + "\n" +
        "\n1. Para cadastrar um imóvel\n2. Para mostrar todos os imóveis cadastrados\n3. Sair para encerrar o programa.")
// Agora podemos incluir um switch com cases para cada opção. No case 1, podemos começar criando um objeto e utilizando o prompt para salvar cada uma de suas propriedades:
    switch (opcao) {
        case "1":
            const objeto = {}
            objeto.proprietario = prompt("Digite o nome do proprietário: ")
            objeto.quartos = prompt("Digite a quantidade de quartos: ")
            objeto.banheiros = prompt("Digite a quantidade de banheiros: ")
            objeto.garagem = prompt("Digite se possui garagem:(Sim/não)")
// Depois podemos mostrar a confirmação perguntando se o usuário deseja salvar aquele imóvel e exibindo as informações digitadas:
            const confirmacao = confirm("Deseja salvar o imóvel?\n" +
            "\nPorpriétário: " + objeto.proprietario +
            "\nQuartos: " + objeto.quartos +
            "\nBanheiro: " + objeto.banheiros +
            "\nGaragem: " + objeto.garagem
        )
// Por fim, só precisamos dar um push para salvar o imóvel no array:
        if (confirmacao) {
            imoveis.push(objeto)
            alert("Imóvel salvo com sucesso!")
        } else
            alert("Voltando para o menu.")
            break
// No case 2, vamos simplesmente criar um FOR para iterar sobre o array de imóveis e exibir cada um deles em um alert:
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                 alert(
                    "Imóvel " + (i + 1) + 
                    "\nProprietário: " + imoveis[i].proprietario + 
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros + 
                    "\nGaragem: " + imoveis[i].garagem
                )
            }
            break
// Para encerrar, no case 3 e no default só precisamos adicionar um alert com as mensagens apropriadas e um break:
        case "3":
                alert("Programa encerrado")
            break
        default:
                alert("Opção inválida")
            }
} while (opcao != "3")

