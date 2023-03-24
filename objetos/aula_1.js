// Classe é definição generalizada
class Pessoa{

    nome;
    idade;
    // O que acontece quando uma pessoa é instanciada? new pessoa() o construtor cria os parâmetros necessários
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e eu nasci em ${this.anoDeNascimento}`)
    }
}

// Instância é definição ocorrência um dado específico da definição exemplo nome: Mariana

//const pessoa = new Pessoa('Mariana Marques',28);
//pessoa.nome = 'Mariana Marques';
//pessoa.idade = 28;

//const pessoa2 = new Pessoa('Renato Aragão',30);
//pessoa2.nome = 'Renato Aragão';
//pessoa2.idade = 30;

//pessoa.descrever();
//pessoa2.descrever();


//const pessoa = {
//    nome: 'Mariana Marques',
//    idade: 28,
//    descrever: function () {
//        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
//    }
//};
//
//console.log(pessoa['nome']);
//
//pessoa.descrever();

function compararPessoas(pessoa, pessoa2) {
    if (pessoa.idade > pessoa2.idade) {
        console.log(`${pessoa.nome} é mais velho(a) que ${pessoa2.nome}`);
    } else if(pessoa.idade < pessoa2.idade){
        console.log(`${pessoa2.nome} é mais velho(a) que ${pessoa.nome}`);
    } else{
        console.log(`${pessoa.nome} e ${pessoa2.nome} tem a mesma idade`);
    }
}

const pessoa = new Pessoa('Mariana Marques',28);
const pessoa2 = new Pessoa('Renato Aragão',30);

compararPessoas(pessoa, pessoa2);