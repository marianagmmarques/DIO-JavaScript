const {gets, print} = require('./funcoes_auxiliares');

//console.log(funcoes.gets)

//const numerosSorteados = [];
//
//for (let i = 0; i < 5; i++) {
//    const numeroSorteado = gets();
//    numerosSorteados.push(numeroSorteado);    
//}
//
//print(numerosSorteados);

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);
//print(gets());

/* Sala = 5 alunos, cada aluno foi sorteado de 1- 100.
fazer prograama que rece 5 números sorteaados e mostraar o maior número sorteado
Entrada:
5
50
10
98
23

Saída: 
98
*/
