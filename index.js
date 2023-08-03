const rls = require("readline-sync");
const { nomes } = require("./func.js")

//import { nomes } from './func.js';
var index = parseInt(rls.question("1. Nomes\n2. Fibonacci"));
console.log(index)

var mine = 'Vinicius Jose Fernandes' //Debug armazenado no programa
console.log("Iniciando a função de nomes com variáveis locais");
nomes(mine);
