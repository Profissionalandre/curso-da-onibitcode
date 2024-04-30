alert("Conversor de Distãcias!")

let anosluz = prompt("Informe o valor da distâcia que deseja ser convertida: ")

let opcao = prompt(
    "Escolha uma das opcões abaixo para que deseja para ser convertida: " +
    "\n1. Paserc(pc):" +
    "\n2. Unidade astronônima(AU):" +
    "\n3. Quilômetros(Km):" +
    "\n4. Sair"
)    

switch (opcao) {
    case "1":
        alert("Distância em Parsec: " + anosluz / 3.23 + "pc" )
        break;
    case "2":
        alert("Distâcia em Unidade astronômica: " + anosluz / 14960000 + "AU")
        break;
    case "3":
        alert("Distância em Quilômetros: " + anosluz * 149 + "km")
        break
    case "4":
        alert("Saindo...")
    default:
        alert("Unidade não idêntificada. Conersão fora do escopo.")
        break;
}