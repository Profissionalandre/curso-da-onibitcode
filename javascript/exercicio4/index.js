// peidr nome do turista e inicializar as variáveis d contagem e nome das cidades
const turista = prompt("Infome seu nome: ")
let cidade = ""
let contagem = 0
//  Perguntar se alguma cidade foi visitada
let visita = prompt("Visitou alguma cidade? (Sim/Não)")
// Usar o whilw para perguntar o nome da cidade,aidcionar essas cidades ás visitadas e perguntar novamente se outra foi visitada. Enquanto a resposta for "Sim"
while (visita === "Sim") {
    let cidades = prompt("Qual cidade que visitou? ")
    cidade += " - " + cidades + "\n"
    contagem++
    visita = prompt("Visitou alguma cidade? (Sim/Não)")
}
// Exibindo a mnsagem final
alert(
    "Seja bem Vindo!\n" +
    "Turista:" + " " + turista +
    "\nQuantidade de cidadees visitadas: " + contagem +
    "\nCidades Visitadas: \n" + cidade
)