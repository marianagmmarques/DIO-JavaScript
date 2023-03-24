/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca,cor,gastoMedioPorKm){
        this.cor = cor;
        this.marca = marca;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoPercurso(distanciaKm, precoCombustivel){
        return (distanciaKm * this.gastoMedioPorKm) * precoCombustivel;
    }
}

const carro = new Carro('Fiat','Vermelho',1/10);
const carro2 = new Carro('Up','Prata',1/13);
console.log(carro.calcularGastoPercurso(125,5).toFixed(2));
console.log(carro2.calcularGastoPercurso(125,5).toFixed(2));
