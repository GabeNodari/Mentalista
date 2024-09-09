const MAX_TENTATIVAS = 5;
const NUMERO_SECRETO = Math.floor(Math.random() * 51);

let numeroChutes = 0;
let acertou = false;

//Verifica se o chute foi correto e retorna true se acertou ou uma dica (número dever ser maior ou menor)//
function verificaChute(chute, numeroSecreto, tentativasRestantes) {
  if (chute === numeroSecreto) {
    alert('Acertou! :)');
    return true;
  } 
  const dica = chute > numeroSecreto ? 'menor' : 'maior';
  alert(`Errou! :( \nO número secreto é ${dica} do que você colocou! \nVocê tem ${tentativasRestantes} tentativas restantes.`);
  return false;
}

//Exibe o prompt com as instruções; valida o input; atualiza o número de tentativas; verifica se acertou ou exibe o número secreto ao final//
while (!acertou && numeroChutes < MAX_TENTATIVAS) {
  const chute = parseInt(prompt('Digite um número entre 1 e 50: '), 10);
  if (isNaN(chute)) {
    alert('Por favor, insira um número válido!');
    continue;
  }
  numeroChutes++;
  acertou = verificaChute(chute, NUMERO_SECRETO, MAX_TENTATIVAS - numeroChutes);
}
if (!acertou) {
  alert(`Número máximo de tentativas alcançado!\nO número secreto era: ${NUMERO_SECRETO}`);
}
