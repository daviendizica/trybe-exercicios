
let precoDoProduto = 1;
let precoDaVenda = 3;

if (precoDoProduto >= 0 && precoDaVenda >= 0) {
  let custoTotaldoProduto = precoDoProduto * 1.2;
  let lucroTotal = (precoDaVenda - custoTotaldoProduto) * 1000;
  console.log(lucroTotal);
} else {
  console.log("Error, os valores não podem ser negativos!");
};
