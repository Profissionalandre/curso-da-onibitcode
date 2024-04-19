let dinheirodisponivel = parseFloat(prompt("Olá, Tudo bem!\n" + "Aqui é da ACJL Controle Financeiro\n" +
"Me informa quanto dinheiro voçê tem disponivel no momento:"))
let total = ""
do {
    total = prompt(
    "Saldo disponível: R$ " + dinheirodisponivel + "\n" +
    "\n1 - Adicionar dinheiro" +  
    "\n2 - Remover dinheiro" +  
    "\n3 - Sair" 
)

switch (total) {
  case "1":
    dinheirodisponivel += parseFloat(prompt("Informe o valor a ser adicionado:"))
    break
  case "2":
    dinheirodisponivel -= prompt("Informe o valor a ser removido:")
    break
  case "3":
    alert("Valor final da operação ficou: " + dinheirodisponivel + "\n" + 
    "Obrigado por utlizar nossos serviços!"
)
    break
  default:
    alert("Entrada inválida.")
    break
}
} while (total !== "3");