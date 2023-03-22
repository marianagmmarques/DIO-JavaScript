/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 Preço do etanol;
2 Preço do gasolina;
3 O tipo de combustível que está no seu carro;
4 Gasto médio de combustível do carro por KM;
5 Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

let precoEtanol = 6.66;
let precoGasolina = 5.79;
let kmPorlitros = 10;
let distanciaEmKm = 127;
let tipoCombustivel = 'Etanol';

let litrosConsumidos = distanciaEmKm / kmPorlitros;

if (tipoCombustivel === 'Etanol') {
    let valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    let valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}


