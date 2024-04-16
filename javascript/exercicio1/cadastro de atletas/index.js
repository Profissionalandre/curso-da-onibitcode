// incluindo as variaveis
const nomeCompleto = prompt("Informe seu nome completo:")
const categoria = prompt("Qual sua categoria?")
const anodeNascimento = prompt("Informe se ano de nascimento:")
// trasnformando a variavel anodeNascimento de string para número usando o parseFloat
const idade = parseFloat(anodeNascimento)
// mostrando o resultado através do comando alert
alert(
"Cadastro de atletas concluido!\n" + 
"\nNome do Atleta: " + nomeCompleto +
"\nCategoria: " + categoria +
"\nIdade: " + (2024 - idade)
)