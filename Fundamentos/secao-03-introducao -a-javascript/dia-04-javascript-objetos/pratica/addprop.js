
let student = {};

function addProperty(object, key, value) {
  object[key] = value;
};


addProperty(student, 'nome', 'Davi Endi Zica');
addProperty(student, 'email', 'daviendizica@gmail.com');
addProperty(student, 'telefone', '11 1111-1111');
addProperty(student, 'github', 'github.com/exemplo-fulano-da-silva');
addProperty(student, 'linkedIn', 'linkedin.com/exemplo-fulano-da-silva');


console.log(student.nome);