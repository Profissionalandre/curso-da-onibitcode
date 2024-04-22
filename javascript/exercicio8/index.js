
const palavra = prompt("Vamos ver se sua palavra é um PALÍNDROMO? " + "\nInforma a palavra: ")
let palavraInvertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida) {
  alert(palavra + " é um palíndromo!")
} else {
  alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida)
}

/*const palavra = prompt("Vamos ver se sua palavra é um PALÍNDROMO? " + "\nInforma a palavra: ")
let palindromo = ""

for (let i =  palavra.lenght - 1; i >= 0; i--) {
    palindromo += palavra[i]
}
    if (palavra === palindromo) {
        alert(palavra + " essa palavra é um palindromo!")
    } else {
        alert(palavra + " essa palavra não é um palindromo!\n\n" + palavra + " !== " + palindromo)
    }*/
