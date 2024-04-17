/*const veiculo1 = prompt("Digite o nome de um veículo:")
const velocidade1 = prompt("Digite sua velocidade:")

const veiculo2 = prompt("Digite o nome de outro veículo")
const velocidade2 = prompt("Digite sua velocidade")


if (velocidade1 > velocidade2) {
    alert(veiculo1 + " " + "é o mais rapido!")
} else if (velocidade1 < velocidade2) {
    alert(veiculo2 + " " + "é o mais rapido")
} else {
    alert(veiculo1 + " e " + veiculo2 + " " + "tem a mesma velocidade.")
}*/

const veiculo1 = prompt("Informe o nome do veiculo 1:")
const velocidade1 = parseFloat(prompt("Informe a velocidade do veiculo 1:"))

const veiculo2 = prompt("Informe o nome do veiculo 2:")
const velocidade2 = parseFloat(prompt("Informe a velocidade do veiculo 2:"))

if (velocidade1 > velocidade2) {
  alert(
    "O veiculo " + veiculo1 + " está mais rápido que o veiculo " + veiculo2 +
    "\nVelocidade do veiculo " + veiculo1 + ": " + velocidade1 +
    "\nVelocidade do veiculo " + veiculo2 + ": " + velocidade2
  )
} else if (velocidade2 > velocidade1) {
  alert(
    "O veiculo " + veiculo2 + " está mais rápido que o veiculo " + veiculo1 +
    "\nVelocidade do veiculo " + veiculo1 + ": " + velocidade1 +
    "\nVelocidade do veiculo " + veiculo2 + ": " + velocidade2
  )
} else {
  alert(
    "O veiculo " + veiculo1 + " está com a mesma velocidade que o veiculo " + veiculo2 +
    "\nVelocidade do veiculo " + veiculo1 + ": " + velocidade1 +
    "\nVelocidade do veiculo " + veiculo2 + ": " + velocidade2
  )
}