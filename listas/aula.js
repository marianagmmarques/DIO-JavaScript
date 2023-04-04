//const alunos = ['João','Mariana','Renato'];
//alunos.push('Renan');
//alunos[4] = 'Tiago';

//const alunos = ['1','2','3'];
//console.log(alunos);
//console.log(alunos.shift());
//console.log(alunos)

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(9);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media.toFixed(2));

//const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
//console.log(notas.length);
//console.log(soma / 5);

//const nome = 'Mariana Gabriele Machado Marques';
//
//for (let i = 0; i < nome.length; i++) {
//    const letra = nome[i];
//    console.log(letra);
//    
//}