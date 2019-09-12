function somar(n1, n2) {
    let soma = 0;
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }
    return soma;
}

function fazerEscadinha(material, qtdDesejada) {
    //let material = prompt("Digite o material desejado: ");
    //let qtdDesejada = Number(prompt("Digite a quantidade de degraus que deseja: "));
    let escada2 = '';

    for (j = 0; j < qtdDesejada; j++) {
        escada2 += material;
        console.log(escada2);
    }
}
/* 
            **** diferença de VAR e LET ****
EXEMPLO COM VAR
var teste = 0;
let exemplo = 0;
for (var teste = 0; teste < 5; teste++){

}
console.log(teste);

EXEMPLO COM LET
for (let i = 0; i < 5; i++){

}
console.log(i);
*/

const subtratir = function(n1,n2){
    return n1-n2;
}

const gerarAleatorio = (min, max) => {
    return Math.floor(Math.random()*((max - min) + 1)) + min;
}

let lerolero = ["Alucinacao", "seja o seu onibus", "matar o javascripto"];

const gerarLeroLero = () => {
    return lerolero[gerarAleatorio(0,4)];
}