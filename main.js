var numeroChutes = 0;
var numeroSecreto = parseInt (Math.random() * 101);
var maximoTentativas = 5;
var acertou = false;

function verifica_chute(chute, numeroSecreto, numeroChutes) {
    if (chute == numeroSecreto) {
      alert ('Acertou! :)')
      return true;
    } else if (chute > numeroSecreto) {
      alert ('Errou! :(' + '\nO número secreto é menor que o que você colocou!' + '\nO seu número de chutes é: ' + numeroChutes + ' de 5')
    } else if (chute < numeroSecreto) {
      alert ('Errou! :(' + '\nO número secreto é maior do que você colocou!' + '\nO seu número de chutes é: ' + numeroChutes + ' de 5')
    }
    return false;
}

while (!acertou && numeroChutes < maximoTentativas) {
  let chute = prompt ('Digite um número entre 1 e 1000: ');
    numeroChutes++;
  acertou = verifica_chute(chute, numeroSecreto, numeroChutes);
}

if (!acertou) {
  alert ('Número máximo de tentativas alcançado!' + '\nO número secreto é: ' + numeroSecreto)
}
    