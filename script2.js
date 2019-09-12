let filmes = [
    {titulo: "Invocação do Mal", classificacao: 16},
    {titulo: "Sharkboy e Lavagirl", classificacao: 0},
    {titulo: "Senhor dos aneis", classificacao: 12},
    {titulo: "Ninja Assassino", classificacao: 18},
    {titulo: "Velozes e Furiosos: Desafio em Tóquio", classificacao: 14}
];

// PEDIR A IDADE DO USUÁRIO
// MOSTRAR PRA ELE, OS FILMES DE CLASSIFICAÇÃO ADEQUADA

let idade = Number(prompt("Digite a sua idade: "));
while(idade < 0 || isNaN(idade) || idade > 110){
    alert("Idade inválida, por favor, digite novamente")
    idade = Number(prompt("Digite a sua idade: "));
}
for(let filme of filmes){ 
    if(idade >= filme.classificacao){
        console.log(filme.titulo);
    }
}
