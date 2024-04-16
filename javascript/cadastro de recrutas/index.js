const primeiroNome = prompt("Qual seu primeiro nome?");
const sobrenome = prompt("Qual seu sobrenome?");

const estudo = prompt("Qual seu campo de estudos?");
const data = prompt("Data de Nascimento:");

document.write("Nome: " + primeiroNome + " " + sobrenome +
"<br> Estudo: " + estudo +
"<br> Idade: " +  (2024 - parseFloat(data)) );




