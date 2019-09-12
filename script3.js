let escada = "#"

for(i = 0; i < 5; i++){
    console.log(escada);
    escada+= "#";
}

let material = prompt("Digite o material desejado: ");
let qtdDesejada = Number(prompt("Digite a quantidade de degraus que deseja: "));
let escada2 = '';

for(j = 0; j < qtdDesejada; j++){
    escada2+= material;
    console.log(escada2);
}
