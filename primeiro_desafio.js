/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:

1 Preço do combustível;
2 Gasto médio de combustível do carro por KM;
3 Distância em KM de vaigem;
*/
let preco = 5.79;
const kmPorlitros = 13;
let distanciaEmKm = 1007.6;

let litrosConsumidos = distanciaEmKm / kmPorlitros;
let valorGasto = litrosConsumidos * preco;

console.log(valorGasto.toFixed(2));

