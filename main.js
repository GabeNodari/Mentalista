//Declarações
const MAX_TENTATIVAS = 5;
const NUMERO_SECRETO = Math.floor(Math.random() * 51);
let numeroChutes = 0;
let acertou = false;

//Função: verificação de chute; dica
function verificaChute(chute, numeroSecreto, tentativasRestantes) {
  if (chute === numeroSecreto) {
    alert('Acertou! :)');
    return true;
  } 
  const DICA = chute > numeroSecreto ? 'menor' : 'maior';
  alert(`Errou! :( \nO número secreto é ${DICA} do que você colocou! \nVocê tem ${tentativasRestantes} tentativas restantes.`);
  return false;
}

//Loop: jogo
while (!acertou && numeroChutes < MAX_TENTATIVAS) {
  const CHUTE = parseInt(prompt('Digite um número entre 1 e 50: '), 10);
  if (isNaN(CHUTE)) {
    alert('Por favor, insira um número válido!');
    continue;
  }
  numeroChutes++;
  acertou = verificaChute(CHUTE, NUMERO_SECRETO, MAX_TENTATIVAS - numeroChutes);
}

//If: tentivas excedidas
if (!acertou) {
  alert(`Número máximo de tentativas alcançado!\nO número secreto era: ${NUMERO_SECRETO}`);
}
