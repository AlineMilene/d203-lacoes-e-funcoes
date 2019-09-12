let filmes = ['Star Wars','Shazam','Star Trek','Sharknado','Bacurau']
let i = 0;

console.log("WHILE");
while(i < filmes.length){
    console.log(filmes[i]);
    i++; //incremento
}

// TRÊS PARÂMETROS
// INICIO, FIM, PASSO
// for(inicio;filmes;passos){
//      codigo a ser executado caso seja verdade
//}
console.log("FOR")
for(j=0; j<filmes.length; j++){
    console.log(filmes[j]);
}

// FOR IN
// ASSUME OS INDICES DA LISTA
// SERVE PRA INTERAR LISTA
console.log("FOR IN");
for(let indice in filmes){
    console.log(filmes[indice]);
}

// FOR OFF
// ASSUME OS ELEMENTOS DA LISTA
// SERVE PRA INTERAR LISTA
console.log("FOR OFF");
for(let filme of filmes){
    console.log(filme);
}
