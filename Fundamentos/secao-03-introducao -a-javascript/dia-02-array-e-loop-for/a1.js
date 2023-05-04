let palavra = "banana";
let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

console.log(palavraInvertida); 



let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = "";
let menorPalavra = array[0]; 

for (let i = 0; i < array.length; i++) {
  if (array[i].length > maiorPalavra.length) {
    maiorPalavra = array[i];
  }
  if (array[i].length < menorPalavra.length) {
    menorPalavra = array[i];
  }
}

console.log("Maior palavra:", maiorPalavra);
console.log("Menor palavra:", menorPalavra);



let maiorPrimo = 2;

for (let i = 2; i <= 50; i++) {
  let primo = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      primo = false;
      break;
    }
  }
  if (primo) {
    maiorPrimo = i;
  }
}

console.log("Maior número primo entre 2 e 50:", maiorPrimo);