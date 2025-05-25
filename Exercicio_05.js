const prompt = require('prompt-sync')();

// Solicita ao usuário o peso em quilogramas
let peso = parseFloat(prompt("Digite seu peso (em kg): "));

// Solicita ao usuário a altura em metros
let altura = parseFloat(prompt("Digite sua altura (em metros): "));

// Calcula o IMC
let imc = peso / (altura * altura);

// Mostra o resultado do IMC
console.log(`Seu IMC é: ${imc.toFixed(2)}`);

// Classifica o IMC usando if-else
if (imc < 18.5) {
  console.log("Classificação: Baixo peso");
} else if (imc >= 18.5 && imc < 24.9) {
  console.log("Classificação: Peso normal");
} else if (imc >= 25 && imc < 29.9) {
  console.log("Classificação: Sobrepeso");
} else {
  console.log("Classificação: Obesidade");
}
