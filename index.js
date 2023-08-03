const rls = require("readline-sync");
//Como aqui tbm pede pro menu, ent puxa dnv
const { nomes } = require("./func.js")

//functions
function menu () {
  var index = parseInt(rls.question("1. Nomes\n2. Fibonacci\n3. Sair\n"));
  console.log(index)

  switch(index){
      case 1:
      var mine = 'Vinicius Jose Fernandes' //Debug armazenado no programa
      nomes(mine); 
      break;
    case 2:
      console.log("Iniciando a função de nomes com variáveis locais");
      break;
    case 3:
      process.exit();
    default:
      menu();
  }
    
}

//L.A.D.S
menu();
//import { nomes } from './func.js';
