/* Calculadora Geométrica
Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálcular. As opções devem ser:
área do triângulo: base * altura / 2
área do retângulo: base * altura
área do quadrado: lado²
área do trapézio: (base maior + base menor) * altura / 2
área do círculo: pi * raio² (considere pi = 3.14)
Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.*/

// Agora vamos criar cada uma das funções responsáveis pelos cálculos das áreas, começando pelo triângulo:
function calcularAreaTriangulo() {
    const base = prompt("Digite a base do triângulo: ");
    const altura = prompt("Digite a altura do triângulo: ");
    return base * altura / 2;
}
// Depois criamos a função para calcular a área do retângulo;
function calcularAreaRetangulo() {
    const base = prompt("Digite a base do retângulo: ");
    const altura = prompt("Digite a altura do retângulo: ");
    return (base * altura);
}
// E a função para a área do quadrado:
function calcularAreaQuadrado() {
    const lado = prompt("Digite o lado do quadrado: ");
    return (lado * lado);
}
// E do trapézio:
function calcularAreaTrapezio() {
    const baseMaior = parseFloat(prompt("Digite a base maior do trapézio: "));
    const baseMenor = parseFloat(prompt("Digite a base menor do trapézio: "));
    const altura = prompt("Digite a altura do trapézio: ");
    return (baseMaior + baseMenor) * altura / 2;
}
// E do círculo:
function calcularAreaCirculo() {
    const raio = prompt("Digite o raio do círculo: ");
    return (3.14 * raio * raio);
}
// Agora vamos criar a função para o menu e devolver o resultado escolhido nesse menu::
function menu() {
    return prompt(
        "Calculadora Geométrica:\n" +
        "1 - Área do triângulo \n" +
        "2 - Área do retângulo \n" +
        "3 - Área do quadrado \n" +
        "4 - Área do trapézio \n" +
        "5 - Área do círculo \n" +
        "6 - Sair\n" 
    )
} 
// Vamos criar uma função para cuidar da execução do nosso programa, chamando todas as outras funções quando necessário:
function executar () {
    let opcao = ""

do {

    opcao = menu();
    let resultado

    switch (opcao) {
        case "1":
            resultado = calcularAreaTriangulo();
            break;
        case "2":
            resultado = calcularAreaRetangulo();
            break;
        case "3":
            resultado = calcularAreaQuadrado();
            break;
        case "4":
            resultado = calcularAreaTrapezio();
            break; 
        case "5":
            resultado = calcularAreaCirculo();
            break;
        case "6":
            alert("Saindo...")
            break;
        default:
            alert("Opção inválida")
            break;
    }
    if (resultado) {
        alert("Resultado:" + resultado)
    }

} while (opcao != 6)
}
// Agora só falta realmente chamar a função executar() para que nosso programa funcione:
executar()