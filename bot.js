const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Defina a data para a contagem de dias
const dataFinal = new Date('2025-02-28'); // Exemplo: 31 de dezembro de 2024

// Criação do cliente
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    // Gera o QR Code para autenticação no WhatsApp
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('O bot está pronto!');
    setInterval(contarDiasRestantes, 86400000); // Atualiza a cada 24 horas
});

client.on('message', message => {
    if (message.body.toLowerCase() === '!dias') {
        contarDiasRestantes(message);
    }
});
    
client.on('message', message => {
    
    if (message.body.toLowerCase() === '!alex') {
        alex(message, cu);
    }
});
let cu = 0;
function alex(message, cu){
    
    const r1 = `O Alex ja deu o cu  ${cu} vezes!`;
    

    if (message) {
        cu +=1;
        message.reply(r1);
    } else {
        // Enviar para o grupo diretamente, caso não haja mensagem de entrada
        const groupId = '120363296494777959@g.us'; // Substitua pelo ID real do grupo
        client.sendMessage(groupId, r1);
    }

}
// Função para contar os dias restantes
function contarDiasRestantes(message) {
    const hoje = new Date();
    const diasRestantes = Math.ceil((dataFinal - hoje) / (1000 * 3600 * 24)); // Calcula os dias restantes
    const resposta = `Faltam ${diasRestantes} dias pra cassineira`;
    
    // Envia a mensagem para o grupo ou usuário
    if (message) {
        message.reply(resposta);
    } else {
        // Enviar para o grupo diretamente, caso não haja mensagem de entrada
        const groupId = '120363296494777959@g.us'; // Substitua pelo ID real do grupo
        client.sendMessage(groupId, resposta);
    }
}


client.initialize();
