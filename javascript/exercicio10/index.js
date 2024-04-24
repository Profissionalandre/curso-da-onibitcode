/* Pilha de Cartas
Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu. */

let cartas = []
let opcao = ""
do {
    opcao = prompt(
        "Quantidade de Cartas:\n" + cartas.length + "\n\n1 - Adicionar uma carta\n2 - Puxar uma carta\n3 - Sair")
    switch (opcao) {
        case "1":
            let carta = prompt("Digite o nome da carta")
            cartas.push(carta)
            break
        case "2":
            const cartaPuxada = cartas.pop()
            if (cartas.length === 0) {
                alert("Não há cartas no baralho!")
            } else {
                alert("Você puxou a carta " + cartaPuxada)
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida")
            break
    }

} while (opcao !== "3")
