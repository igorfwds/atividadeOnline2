const rs = require("readline-sync")
let listaDePalestrantes = [];
let listaDeParticipantes = [];
let nome = rs.question("Informe seu nome: ")
let usuario = rs.question("Palestrante ou Participante? ")
let idade = rs.question("Informe sua idade: ")
let dataDoEvento = rs.question("Informe a data do evento no modelo aaaa-mm-dd : ")
const hoje = new Date("2022-06-17");


if (usuario === "Palestrante" || usuario === "palestrante" ) {
    listaDePalestrantes.push(nome);
    console.log("Você foi adicionado à lista de palestrantes:");
    console.log(listaDePalestrantes);
} else if (usuario === "Participante" || usuario === "participante") {
    if (listaDeParticipantes.length >= 100){
        console.log("Limite de pessoas excedido.");
    } else {
        console.log("Realizando cadastro...");
        if (idade < 18){
            console.log("Cadastro negado. O participante é menor de idade.");
        } else {
            if (dataDoEvento > hoje){
                console.log("Cadastro negado,data inválida.");
            } else {
                listaDeParticipantes.push(nome)
                console.log("Você foi adicionado à lista do evento.");
                console.log(listaDeParticipantes);
            }
        }
    }
}
