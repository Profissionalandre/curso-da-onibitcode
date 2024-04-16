const primeiroNome = prompt("Qual seu primeiro nome?");
const sobrenome = prompt("Qual seu sobrenome?");
const estudo = prompt("Qual seu campo de estudos?");
const data = prompt("Data de Nascimento:");

alert(
"Recruta cadastrado com sucesso!" + 
"\nNome: " + primeiroNome + " " + sobrenome + 
"\nEstudo: " + estudo + 
"\nIdade: " + (2024 - parseFloat(data)) 
);




