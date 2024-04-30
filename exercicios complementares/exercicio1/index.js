alert("Bem vindo ao meu site! \nA seguir pediremos alguns dados.")
const nome = prompt( "\nDigite seu nome: ");
const idade = prompt("Digite sua idade: ");
const confirmacao = confirm("Sua idade é? " + idade + " anos")

alert(
    "Nome do Usuário: " + nome + "\n" +
    "Idade informada: " + idade + " anos " + "\n" 
)

if (confirmacao) {
    alert("Obrigado por participar!")
} 