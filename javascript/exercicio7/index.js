// Pedinr que informe o número e criando também uma variável do tipo string para armazenarmos os resultados das multiplicações:
const numero = parseFloat(prompt("Tabuada da multiplicação!" + "\nInsira um número que irá ser multiplicado: "))
let resultado = ""
// Criar um laço for que tem um fator que começa em 1, a primeira multiplicação, e vai até 20, a última. Dentro dele iremos concatenar o resultado na nossa string de resultado:
for (let fator = 1; fator <= 20; fator++) {
  resultado += " -> " + numero + " x " + fator + " = " + (numero * fator) + "\n"
}
// Exibir o resultado da tabuada com um alert:
alert("Esses são os resultados para o número em que escolheu:\n"
+ numero + ":\n\n" + resultado)
