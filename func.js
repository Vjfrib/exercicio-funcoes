const rls = require("readline-sync");
// se vou pedir de uma importação / identação em x.js, o require vai somente em x.js, como pre-processamento


function nomes(completo) {
  //var completo = rls.question("\tDigite seu nome: \n");
  var nome = completo.split(" ");
  
  console.log("Nomes" + nome);
  console.log("First name: " + nome[0]);
  var last = nome.at(-1)
  console.log("Last name: " + last)
}


//export { nomes };

module.exports = { nomes };