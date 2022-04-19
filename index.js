
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


// CADASTRO

const cliente1 = new Cliente("Matheus Ferreira", 11111122233, 123654789);
const ContaCorrentecliente1 = new ContaCorrente(2180, cliente1);

const cliente2 = new Cliente("Raquel Ferreira", 22222233366, 789456123);
const ContaCorrentecliente2 = new ContaCorrente(2180, cliente2);


console.log(ContaCorrentecliente1);
console.log(ContaCorrente.totalDeContas);



//Transações

/*ContaCorrentecliente1.depositar(1500);
ContaCorrentecliente1.saque(500);
console.log(ContaCorrentecliente1);
console.log(ContaCorrentecliente2);
ContaCorrentecliente1.transferir(2000, ContaCorrentecliente2);
console.log(ContaCorrentecliente2);*/


















