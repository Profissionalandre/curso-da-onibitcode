let number = parseFloat(prompt("Digite um valor em Metros:"))
let medida = parseFloat(prompt("Escolha um valor das medidas que quer converter:\n1. Milímetros (mm):\n2. Centímetros (cm):\n3. Decímetros (dm):\n4. Decâmetros (dam):\n5. Hectômetros (hm):\n6. Quilômetros (km):\n"))


switch (medida) {
    case 1:
        alert(number * 1000 + " " + "mm")
        break;
    case 2:
        alert(number * 100 + " " + "cm")
        break;
    case 3:
        alert(number * 10 + " " + "dm")
        break;
    case 4:
        alert(number / 10 + " " + "dam")
        break;
    case 5:
        alert(number / 100 + " " + "hm")
        break;
        case 6:
        alert(number / 1000 + " " + "km")
        break;
    default:
        alert("Opção inválida!")
        break;
}