const personagem1 = prompt("Digite o nome de um personagem:")
const poderDeAtaque = parseFloat(prompt("Qual seu poder de ataque?"))

const personagem2 = prompt("Digite o nome de outro personagem:")
const life = parseFloat(prompt("Quantos pontos de vida?"))
const defense = parseFloat(prompt("Qual seu poder de defesa?"))
const shield = prompt("Ele possui escudo? (Sim/Não)")

let danoCausado = 0


if (poderDeAtaque > defense && shield === "Não") {
    danoCausado = poderDeAtaque - defense;
} else if (poderDeAtaque > defense && shield === "Sim") {
    danoCausado = (poderDeAtaque - defense) /2 
} 

life -= danoCausado

alert(personagem1 + " causou " + danoCausado + " pontos de dano em " + defense)
alert(
  personagem1 + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defense + "\nPontos de vida: " + life +
  "\nPoder de defesa: " + defense + "\nPossui escudo: " + shield
)


