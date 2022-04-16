

export class ContaCorrente {
    agencia;
    cliente;
    _saldo = 0;
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