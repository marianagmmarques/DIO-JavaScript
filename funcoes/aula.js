function sayMyName(name) {
    console.log('Your name is '+name);
}

function quadrado(valor) {
    return valor*valor;
}

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}


function main() {
    sayMyName('Mariana');
    sayMyName('Renato');
    
    const quadradoDeDez = quadrado(10);
    console.log(quadradoDeDez + quadrado(10));
    
    console.log(incrementarJuros(100, 15));
    console.log(incrementarJuros(100, 10));
    console.log(incrementarJuros(100, 20));
}

main();