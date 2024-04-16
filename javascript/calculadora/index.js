// construção da primeira variável através do que o usuário vai colocar usando o prompt
const entrada1 = prompt("Coloque aqui um número: ")
const entrada2 = prompt("Coloque aqui um número: ")
// Pegando a variável do usuário que vem como string e transformando em número usandp o parseFloat
const x = parseFloat(entrada1)
const y = parseFloat(entrada2)
// Construção da calculadora
const somar = x + y 
const subtrair = x - y
const multiplicar = x * y
const dividir = x / y
// Resultado aparecendo na tela do usuário
alert(
    "\nA soma é: " + somar +
    "\nA subtração é: " + subtrair +
    "\nA multiplicação é: " + multiplicar +
    "\nA divisão é: " + dividir
)
 