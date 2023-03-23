function myName(nome){
    return 'Meu nome é '+nome;
}

//myName('Mariana');
//myName('Renato');

function maiorMenorIdade(idade) {
    if (idade >= 18) {
        return myName('Mariana') + ' Você é maior de idade';
    } else {
        return myName('Renato') + ' Você é menor de idade';
    }
}

console.log(maiorMenorIdade(17));
console.log(maiorMenorIdade(19));