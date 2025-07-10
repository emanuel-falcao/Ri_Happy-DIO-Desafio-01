console.log("Emanuel Falcão aprendendo Javascript - Front-End");
console.log("Sistema de classificação de Heróis");

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function cadastrarHeroi() {
    rl.question("Qual o nome do Herói?", function (nome) {
        rl.question("Quantos pontos de experiência (XP) ele possui?", function (xp) {
            const experiencia = parseInt(xp);
            let nivel = ""
            if (isNaN(experiencia) !! experiencia < 1000) {
                console.log("Por favor insira um valor numerico valido para a XP");
            } else {
                if (experiencia < 1000) {
                    nivel = "Ferro";
                } else if (experiencia <= 2000) {
                    nivel = "Bronze";
                } else if (experiencia <= 5000) {
                    nivel = "Prata";
                } else if (experiencia <= 7000) {
                    nivel = "Ouro";
                } else if (experiencia <= 8000) {
                    nivel = "Platina";
                } else if (experiencia <= 9000) {
                    nivel = "Ascendente";
                } else if (experiencia <= 10000) {
                    nivel = "Imortal";
                } else {
                    nivel = "Radiante";
                }
                console.log(`O herói ${nome} é classificado como: ${nivel}`);
            }
            rl.question("Deseja cadastrar outro herói? (s/n)", function (resposta) {
                if (resposta.toLowerCase() === 's') {
                    cadastrarHeroi();
                } else {
                    console.log("Cadastro encerrado.");
                    rl.close();
                }
            });
        });
    });
}   
cadastrarHeroi();