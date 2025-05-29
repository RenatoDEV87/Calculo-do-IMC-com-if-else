# Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

# Exercício 05 – Cálculo do IMC com if-else

---

## 📑 Índice

1. [📖 Descrição](#descrição)  
2. [💻 Código](#código)  
3. [🚀 Como Executar](#como-executar)   
4. [🛠️ Tecnologias Utilizadas](#tecnologias-utilizadas)  
5. [📜 Licença](#licença)  

---

## Descrição

Este programa em JavaScript calcula o **IMC (Índice de Massa Corporal)** de uma pessoa com base no seu peso e altura. Depois, classifica o resultado em uma das categorias:

- Baixo peso
- Peso normal
- Sobrepeso
- Obesidade

A lógica de decisão é feita com a estrutura `if-else`, ideal para quem está começando a programar.

- Classificação usada

- IMC abaixo de 18.5 → Baixo peso  
- IMC entre 18.5 e 24.9 → Peso normal  
- IMC entre 25 e 29.9 → Sobrepeso  
- IMC 30 ou mais → Obesidade

---

## Código

Abaixo está o código-fonte do programa:

```JavaScript
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

```

---

## Como Executar

🛠️ Instruções para executar localmente

1. Instale o Node.js se ainda não tiver: https://nodejs.org

2. Abra o terminal e instale o prompt-sync (usado para entrada do usuário):

```
npm install prompt-sync
```

3. Salve o arquivo como `exercicio_05.js` e execute com:

```
node exercicio_05.js
```

---

## Tecnologias Utilizadas

- Linguagem: JavaScript
- Node.Js

---

## Licença

Este projeto está licenciado sob a MIT License.


