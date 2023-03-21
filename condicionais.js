const numero = 26;

const numeroDivisivel5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('O numero é inválido')
} else if (numeroDivisivel5) {
    console.log('Sim');
} else {
    console.log('Não');
}

console.log(numeroDivisivel5);