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
        alert("Opção 1 foi escolhida!")
        break
    case "2":
        alert("Opção 2 foi escolhida!")
        break
    case "3":
        break
        alert("Opção 3 foi escolhida!")
        break
    case "4":
        alert("Opção 4 foi escolhida!")
        break
    case "5":
        alert("Opção 5 foi escolhida! Encerrando o programa...")
        break
    default:
        alert("Opção inválida. Escolha uma das cinco opções.")
}       
} while (option !== "5");