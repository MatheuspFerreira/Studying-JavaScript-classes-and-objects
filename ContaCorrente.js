
import { Cliente } from "./Cliente.js";
export class ContaCorrente {
    static totalDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;
   
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }

    }

    get cliente (){
        return this._cliente;
    }

    get saldo (){
        return this._saldo;
    }


    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente
        ContaCorrente.totalDeContas++;
    }

    saque(valor){
        if( valor <= 0){
            console.log("Você não possui saldo suficiente para realizar essa operação")
            return;
            
            
        }else if (valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`Você realizou um saque no valor de R$ ${valor}`);
            
            
        } else {
            console.log("Você não possui saldo suficiente para realizar essa operação")
            return;
            
            
        }
        

       
         
    }
   
    depositar(valor){  
        if(valor <= 0)
        { 
            return;        
        }  
        this._saldo += valor
        console.log(`Você realizou um depóstio no valor de R$ ${valor}`);

        
        
    }

    transferir (valor, conta) { 

        if(this._saldo >= valor){
            console.log(this.cliente.nome);
            this.saque(valor)
            conta.depositar(valor);
            
            

        }else{
            console.log(`${this.cliente.nome} você não possui saldo suficiente`);

        }
        
       
        
        
        

    }  
    

}