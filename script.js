const palavraCorreta = "JOAO";
const maxTentativas = 6;
let tentativas = 0;

const board = document.getElementById("board");
const message = document.getElementById("message");

function criarLinha(palpite, resultado) {
  for (let i = 0; i < 4; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    const letra = palpite[i];
    cell.textContent = letra;

    if (resultado[i] === "correct") cell.classList.add("correct");
    else if (resultado[i] === "present") cell.classList.add("present");
    else cell.classList.add("absent");

    board.appendChild(cell);
  }
}

function guess() {
  const input = document.getElementById("guessInput");
  const palpite = input.value.toUpperCase();

  if (palpite.length !== 4) {
    message.textContent = "Digite uma palavra com 4 letras.";
    return;
  }

  tentativas++;
  const resultado = [];

  for (let i = 0; i < 4; i++) {
    if (palpite[i] === palavraCorreta[i]) {
      resultado.push("correct");
    } else if (palavraCorreta.includes(palpite[i])) {
      resultado.push("present");
    } else {
      resultado.push("absent");
    }
  }

  criarLinha(palpite, resultado);

  if (palpite === palavraCorreta) {
    message.textContent = "Parabéns! Você acertou!";
    document.getElementById("guessInput").disabled = true;
  } else if (tentativas >= maxTentativas) {
    message.textContent = `Fim de jogo! A palavra era "${palavraCorreta}".`;
    document.getElementById("guessInput").disabled = true;
  } else {
    message.textContent = "";
  }

  input.value = "";
  input.focus();
}
