export class Cliente {
    nome;
    _cpf;
    _rg;

    get cpf() {
        this_cpf = cpf;
    }

    get rg(){
        this._rg = rg;
    }

    constructor(nome, cpf, rg) {
        this.nome = nome;
        this._cpf = cpf;
        this._rg = rg;
    }

}