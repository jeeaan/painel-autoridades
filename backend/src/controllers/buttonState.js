// controllers/buttonState.js
const buttonStates = {};

exports.getButtonState = (req, res) => {
  const { botaoId } = req.params;

  if (!buttonStates[botaoId]) {
    return res.status(404).json({ error: 'Botão não encontrado' });
  }

  res.json({ state: buttonStates[botaoId].currentState === 1 ? 'Presente' : 'Ausente' });
};

const allowedIPs = ['10.67.123.183', '10.67.123.85']; // Lista de IPs autorizados

exports.updateButtonState = (req, res) => {
  const { botaoId } = req.params;
  const { newState } = req.body;
  const clientIP = req.ip.replace(/^::ffff:/, ''); // IP da máquina que está fazendo a solicitação
  const currentDateTime = new Date();
  const adjustedDateTime = new Date(currentDateTime.getTime());

  // Verifique se o IP do cliente está na lista de IPs permitidos
  if (!allowedIPs.includes(clientIP)) {
    console.log(`[${adjustedDateTime.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}] IP: ${clientIP} Botão: ${botaoId} Estado: ${newState} Negado`);
    return res.status(403).json({ error: 'Acesso negado' });
  }

  // Certifique-se de que o botão exista ou crie um novo botão
  if (!buttonStates[botaoId]) {
    buttonStates[botaoId] = {};
  }

  buttonStates[botaoId].currentState = newState;

  if (newState === 0 || newState === 1) {
    console.log(`[${adjustedDateTime.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}] IP: ${clientIP} Botão: ${botaoId} Estado: ${newState} Autorizado`);
    buttonStates[botaoId].currentState = newState;
    res.json({ message: 'Estado do botão atualizado com sucesso', newState });
  } else {
    res.status(400).json({ error: 'Valor inválido. Use apenas 0 (Ausente) ou 1 (Presente).' });
  }
};