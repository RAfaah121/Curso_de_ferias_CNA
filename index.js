//let nome = "Rafael"
//let idade = 22;
//console.log("Eu tenho " + idade + " anos.")

//function querojogar(){
//    console.log("Eu quero jogar.")
//}

//querojogar()

function jogar(escolhaJogador){
    const opcoes = ["pedra", "papel", "tesoura"];

    let valor = Math.random()*3;
    let indice = Math.floor(valor);
    const escolhaComputador = opcoes[indice];
    let resultado = "";

    if (escolhaJogador == escolhaComputador) {
        resultado = " Empate!";
    } else if (escolhaJogador == "pedra" && escolhaComputador == "tesoura"){
        resultado = " Você venceu!"
    } else if (escolhaJogador == "papel" && escolhaComputador == "pedra"){
        resultado = " Você venceu!"
    } else if (escolhaJogador == "tesoura" && escolhaComputador == "papel"){
        resultado = " Você venceu!"
    } else {
        resultado = " Você perdeu!"
    }

    if (escolhaComputador == "pedra"){
        document.getElementById("computer").src = "jokenpo/pedra.jpg"
    } else if (escolhaComputador == "papel"){
        document.getElementById("computer").src = "jokenpo/papel.jpg"
    } else if (escolhaComputador == "tesoura"){
        document.getElementById("computer").src = "jokenpo/tesoura.jpg"
    }

    if (escolhaJogador == "pedra"){
        document.getElementById("player").src = "jokenpo/pedra.jpg"
    } else if (escolhaJogador == "papel"){
        document.getElementById("player").src = "jokenpo/papel.jpg"
    } else if (escolhaJogador == "tesoura"){
        document.getElementById("player").src = "jokenpo/tesoura.jpg"
    }
    
    document.getElementById("resultado").textContent = resultado
    //console.log(escolhaComputador + resultado);
}

let modo = 0
function tema() {
    if (modo == 0){
        modo = 1
        document.querySelector('link').href = "escuro.css";
        document.getElementById('atual').textContent = "Escuro"
    } else {
        modo = 0
        document.querySelector('link').href = "index.css";
        document.getElementById('atual').textContent = "Claro"
    }
}