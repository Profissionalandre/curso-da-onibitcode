// Obter o valor de medida a ser convertido
let number = parseFloat(prompt("Insira uma medida rm Metros:"))
// Pedir ao usuário para escolher a unidade para conversão
let medida = parseFloat(prompt(
    "Escolha para qual medida que quer converter:\n1. Milímetros (mm):\n2. Centímetros (cm):\n3. Decímetros (dm):\n4. Decâmetros (dam):\n5. Hectômetros (hm):\n6. Quilômetros (km):\n"))

// Usra o switch para mostrar os resultados de acordo com as diferentes opções
switch (medida) {
    case 1:
        alert("Resultado: " + number + "m = " + number * 1000 + " " + "mm")
        break;
    case 2:
        alert("Resultado: " + number + "m = " + number * 100 + " " + "cm")
        break;
    case 3:
        alert("Resultado: " + number + "m = " + number * 10 + " " + "dm")
        break;
    case 4:
        alert("Resultado: " + number + "m = " + number / 10 + " " + "dam")
        break;
    case 5:
        alert("Resultado: " + number + "m = " + number / 100 + " " + "hm")
        break;
    case 6:
        alert("Resultado: " + number + "m = " + number / 1000 + " " + "km")
        break;
    default:
        alert("Opção inválida!")
        break;
}