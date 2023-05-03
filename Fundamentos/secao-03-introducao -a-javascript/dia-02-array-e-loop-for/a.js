

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}
let media = soma / numbers.length;

console.log(media);

if (media < 20){
    console.log("O valor da media aritmética é maior que 20");
} else {
    console.log("O valor da media aritmética é menor que 20");
}

let maior = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maior) {
    maior = numbers[i];
  }
}

console.log("O maior valor do array é:" , maior);


let impares = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    impares++;
  }
}

if (impares === 0) {
  console.log("Nenhum valor ímpar encontrado");
} else {
  console.log("Existem " + impares + " valores ímpares no array");
}

let menor = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < menor) {
    menor = numbers[i];
  }
}

console.log("O menor valor do array é:", menor);


let numero = []

for (let i = 1; i <= 25; i++) {
  numero.push(i);
}

for (let i = 0; i < numero.length; i++) {
    console.log(numero[i] / 2);
}
