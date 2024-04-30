alert("Sistema integrado da nave Apollo 1!")

const nome = prompt("Informe seu nome do piloto: ")
let velocidade = 0
let novavelocidade = prompt("A qual velocidade gostaria que a nave estivesse? ")

let confimacao = confirm("Deseja realmente que a nave esteja há " + velocidade + " km/h? ")

if (confimacao) {
    velocidade = novavelocidade
}

if (velocidade <= 0) {
    alert("Nave está parada! Considere partir e aumentar sua velocidade.")
}else if (velocidade < 40) {
    alert("Você está devagar! Podemos aumentar mais a velocidade.")
}else if (velocidade >= 40 && velocidade < 80) {
    alert("Parece uma boa velocidade para manter.")
}else if (velocidade >= 80 && velocidade < 100) {
    alert("Velocidade alta! Considere diminuir.")
}else if (velocidade >= 100) {
    alert("Velocidade perigosa! Contrle automático forçado.")
}

alert(
    "A nave do piloto " + nome + ", está há uma velocidade de " + velocidade + " Km/h" + 
    "\nObrigado por viajar na Apollo 1"
)