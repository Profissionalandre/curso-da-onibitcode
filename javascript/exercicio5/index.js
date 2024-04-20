let option = ""

do {
    option = prompt(
        "Seja bem vindo ao nosso site!\n" +
        "Escolha uma das opçoes abaixo para navegar no site:\n" + 
        "\n1 - Iniciar:" +
        "\n2 - Notícias:" +
        "\n3 - Galeria de Fotos:" +
        "\n4 - História:" +
        "\n5 - Encerrar:" 
    )
switch (option) {
    case "1":
        alert("Opção Iniciar foi escolhida!")
        break
    case "2":
        alert("Opção Notícias foi escolhida!")
        break
    case "3":
        alert("Opção Galeria de Fotos foi escolhida!")
        break
    case "4":
        alert("Opção História foi escolhida!")
        break
    case "5":
        alert("Opção Encerrar foi escolhida!\n Encerrando o programa...")
        break
    default:
        alert("Opção inválida. Escolha uma das cinco opções.")
}       
} while (option !== "5");