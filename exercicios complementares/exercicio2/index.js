alert("Bem vindo ao o site!\n" + "A seguir iremos solicitar algumas informações.")
const nome1 = prompt("Informe o nome da pessoa mais velha: ")
const idade1 = prompt("Qual sua idade? ")
const nome2 = prompt("Informe o nome da pessoa mais nova: ")
const idade2 = prompt("Qual sua idade? ")

const diferença = idade1 - idade2

alert(
    "Nome da pessoa mais velha: " + nome1 + "\n" + "Idade: " + idade1 + " anos" + "\n\n" +
    "Nome da passoa mais nova: " + nome2 + "\n" + "Idade: " + idade2 + " anos" + "\n\n" + 
    "A diferenca de idade entre elas é de " + diferença + " anos"
)