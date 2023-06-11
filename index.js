//Função de identificar primos

/*
function funprimo() {

    var numero = parseFloat(prompt("Escreva um número"));

    var primo = true;

    console.log(numero);

    if (numero == 1) {

        alert('não é primo!')

    }
    
    if (numero > 1) {

        for (let i = 2; i < numero; i++) {

            if (numero % i == 0) {

                primo = false;
                break;

            }

        }

    }
    
    return primo;

}



function ativarBotao() {

    primo = funprimo();

    if (primo == true) {

        alert('É primo!')

    } else if (primo == false) {

        alert('Não é primo!')

    }

}
*/






// Função de inverter string

/*
function ativarBotao() {

    var texto = prompt("Digite algo!");

    var textoInvertido =  ((texto.split("")).reverse()).join("");

    console.log('Texto normal: ' + texto);
    console.log('Texto invertido: ' + textoInvertido);
}
*/






// Função de encontrar o maior elemento, o menor elemento e a média dos elementos em um vetor

/*
function ativarBotao() {

    const numeros = [0,1,2,3,4,5,6,7,8,9];

    var maior = Math.max(...numeros)    //os tres pontos servem para 'separar' os elementos do Array em argumentos individuais
    var menor = Math.min(...numeros)
    
    var soma = 0

    for(i = 0; i < numeros.length; i++) {

        soma = soma + numeros[i];

    }
    
    var media = soma / numeros.length

    console.log(numeros)
    console.log(maior)
    console.log(media)

}
*/


