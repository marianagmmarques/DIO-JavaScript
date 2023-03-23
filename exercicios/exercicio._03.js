/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros/100)));
}


let precoEtiqueta = 100;

function formaDePagamento(pagamento) {
    if (pagamento === 1) {
        return 'Você vai pagar com desconto de 10%: '+aplicarDesconto(precoEtiqueta, 10);
    } else if (pagamento === 2) {
        return 'Você vai pagar com desconto de 15%: '+aplicarDesconto(precoEtiqueta, 15);
    } else if (pagamento === 3) {
        return 'Você vai pagar: '+precoEtiqueta;
    } else{
        return 'Você vai pagar com juros de 10%: '+aplicarJuros(precoEtiqueta, 10);
    }
}

(function() {
    let pagamento = 4;
    console.log(formaDePagamento(pagamento));
})();