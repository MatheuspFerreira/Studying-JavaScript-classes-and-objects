
import { cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


// CADASTRO

const cliente1 = new cliente();
const ContaCorrentecliente1 = new ContaCorrente();

cliente1.nome = "Matheus Ferreira";
cliente1.cpf = 11111122233;
cliente1.rg = 123654789;
ContaCorrentecliente1.agencia = 2180;
ContaCorrentecliente1.cliente = cliente1;

const cliente2 = new cliente();
const ContaCorrentecliente2 = new ContaCorrente();

cliente2.nome = "Raquel Ferreira";
cliente2.cpf = 22222233366;
cliente2.rg = 789456123;
ContaCorrentecliente2.agencia = 2180;
ContaCorrentecliente2.cliente = cliente2;



//Transações

ContaCorrentecliente1.depositar(1500);
ContaCorrentecliente1.saque(500);
console.log(ContaCorrentecliente1);
console.log(ContaCorrentecliente2);
ContaCorrentecliente1.transferir(2000, ContaCorrentecliente2);
console.log(ContaCorrentecliente2);


















