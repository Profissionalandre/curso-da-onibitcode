const entrada1 = prompt("Coloque aqui um número: ")
const entrada2 = prompt("Coloque aqui um número: ")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const somar = x + y 
const subtrair = x - y
const multiplicar = x * y
const dividir = x / y

alert(
    "\nA soma é: " + somar +
    "\nA subtração é: " + subtrair +
    "\nA multiplicação é: " + multiplicar +
    "\nA divisão é: " + dividir
)
 