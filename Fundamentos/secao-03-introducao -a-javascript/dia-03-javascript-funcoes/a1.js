

let clientesTrybeBank = ['Ada', 'John', 'Gus'];


function adicionaCliente(cliente) {
   if (typeof cliente === 'string'){
    clientesTrybeBank.push(cliente);
    return 'Cliente adicionado(a) com sucesso!'
   } else {
    return 'O parâmetro escolhido não é do tipo string';
   }
}

console.log(adicionaCliente(true));
console.log(adicionaCliente('Joaquim'));
console.log(clientesTrybeBank);

function removeCliente(cliente) {

  let clienteEncontrado = false;

  if (typeof cliente === 'string'){
    for (let i = 0; i < clientesTrybeBank.length; i += 1) {
      if (cliente === clientesTrybeBank[i]){
        clientesTrybeBank.splice(i, 1);
        clienteEncontrado = true;
        return 'Cliente excluido(a) com sucesso.';  
      }
    }
    if (clienteEncontrado === false) {
      return 'Cliente não encontrada(o)'
    }
  } else {
    return 'O parâmetro passado deve ser do tipo "string"!';
  }
};
console.log('--------------------------------------')
console.log(removeCliente(false)); // O parâmetro passado deve ser do tipo "string"!
console.log(removeCliente('Barney')); // Cliente não encontrada(o)
console.log(removeCliente('John')); // Cliente excluída(o) com sucesso.
console.log(clientesTrybeBank);