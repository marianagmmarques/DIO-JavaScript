/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let precoEtiqueta = 100;
let formaDePagamento = 2;

if (formaDePagamento === 1) {
    let debito = precoEtiqueta * (10/100);
    console.log('Você vai pagar com desconto de 10%: '+(precoEtiqueta - debito));
} else if (formaDePagamento === 2) {
    let dinheiroOuPix = precoEtiqueta * (15/100);
    console.log('Você vai pagar com desconto de 15%: '+(precoEtiqueta - dinheiroOuPix));
} else if (formaDePagamento === 3) {
    console.log('Você vai pagar: '+precoEtiqueta);
} else{
    let parceladoAcimaDuasVezes = precoEtiqueta * (10/100);
    console.log('Você vai pagar com juros de 10%: '+(precoEtiqueta + parceladoAcimaDuasVezes));
}