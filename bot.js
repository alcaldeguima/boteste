const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');


const dataFinal = new Date('2025-02-28');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('O bot está pronto!');
    setInterval(contarDiasRestantes, 86400000); 
});

client.on('message', message => {
    if (message.body.toLowerCase() === '!dias') {
        contarDiasRestantes(message);
    }
});
    /*Variaveis das funções*/
    let d = 0;  //contador davi
    let a = 0;  //contador alex
    let t = 0;  //contador teteu

client.on('message', message => {
    
    
    if (message.body.toLowerCase() === '!davi') {
        d++;
        davi(message, d);
    }
    if (message.body.toLowerCase() === '!alex') {
        a++;
        alex(message, a);
    }
        
    if (message.body.toLowerCase() === '!d20') {
        const resultado = rolarD20();
        message.reply(`**${resultado}**!`);
    }
    if (message.body.toLowerCase() === '!help') {
        message.reply(`!dias = mostra quantos dias faltam pra cassinar. \n!d20 = auto explicativo\n !trends = conta quantas trends o teteu participou\n !uro nome = feedback da consulta como urologista\n !fogos = fogos de artificio\n !palestina = bandeira da palestina, depende do celular`);
    }
    if (message.body.toLowerCase() === '!palestina') {
        message.reply(`\n
        🟥⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
        🟥🟥⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
        🟥🟥🟥⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
        🟥🟥🟥🟥⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
        🟥🟥🟥🟥🟥⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
        🟥🟥🟥🟥⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
        🟥🟥🟥🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
        🟥🟥🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
        🟥🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩`); }
    
        if (message.body.toLowerCase() === '!fogos') {
            message.reply(`PAPAPUPU🎆🎇PAPUL🎆🎇🎇🎆FIIILLLPUUUUUPOWPOWPOWPOW🎇🎇🎇🎆🎆🎆PAPAPAPATRATRATRATRATRA🎇🎆🎇🎆🎇🎆🎇🎆🎇TATATATATAFIIIIILLLFIIIIILLLLFIIIIIIILLLPOOOWWWWWW🎇🎆🎇🎆🎇🎆🎇🎇🎆🎇🎆🎇🎆🎇🎆🎇PAPAPAPAPUPUPUPUPU🎉🎉🎉🎊🎊🎊🎉🎉🎉🎊🎊🎊🎉🎉🎉🎊🎊🎊PATAPUTRAPULFILPATAPATRAPAPOWPULFILPOWPOW`); }
        
         if (message.body.toLowerCase().startsWith('!uro')) {
            const partes = message.body.split(' '); 
            const nome = partes[1];
            message.reply(`Boa tarde Sr. ${nome}, nós da Sociedade Brasileira de Urologia recebemos as suas perguntas enviadas por e-mail, e é um prazer respondê-las:\n1) Sim, 9 cm é considerado pequeno. Sugerimos processo cirúrgico;\n2) Não, não é comum a camisinha ficar larga. Não existe tamanho PP, o tamanho é único;\n3) Ainda que 9 cm seja um tamanho muito pequeno, é possível a parceira chegar ao orgasmo durante a relação sexual, portanto se isso não ocorre nas suas relações conforme mencionou, pode se tratar de falta de competência de sua parte;\n4) Não, o senhor não pode fazer o exame de próstata, é apenas para pessoas acima de 50 anos. Por favor não insista;\nEstamos à disposição para qualquer dúvida!`);
        }
        if (message.body.toLowerCase() === '!trends'){
            t++;
            trends(message, t);
        }

        if (message.body.toLowerCase() === '!teteu'){
            shebly(message);
        }


        });



        function alex(message, a){
            const r1 = `O Alex ja deu o cu ${a} vezes!`;
            if (message) {
                a +=1;
                message.reply(r1);
            } else {
                const groupId = '120363296494777959@g.us'; 
                client.sendMessage(groupId, r1);
            }

        }
        const pkb = ["Você não negocia quando está na pior.","Eu não pago por ternos. Meus ternos estão por conta da casa ou a casa pega fogo", "A convicção leva à emoção, que é inimiga da oratória","Bom gosto é para pessoas que não podem pagar por safiras", "Eu aprendi há muito tempo a odiar meus inimigos, mas nunca aprendi a amar um","Eu vou continuar vivendo até encontrar um homem que me vença","Eu penso para que você não precise pensar","Eu sou apenas um excelente exemplo do que um homem trabalhador pode conquistar",]
        function shebly(message){
            if (message) {
                let y = Math.floor(Math.random() * 6) + 1;
                message.reply(pkb[y]);
            } else {
                const groupId = '120363296494777959@g.us'; 
                client.sendMessage(groupId, pkb[y]);
            }
        }
        
        function davi(message, d){
            const r2 = `O Davi já deu ${d} mamadas!`;
            if (message) {
                d +=1;
                message.reply(r2);
            } else {
                const groupId = '120363296494777959@g.us'; 
                client.sendMessage(groupId, r2);
            }
        }

        function trends(message, t){
            const r3 = `O Teteu já fez ${t} trends! 🕺`;
            if (message) {
                t ++;
                message.reply(r3);
            } else {
                const groupId = '120363296494777959@g.us'; 
                client.sendMessage(groupId, r3);
            }
        }
        function rolarD20() {
            return Math.floor(Math.random() * 20) + 1;
        }

        function contarDiasRestantes(message) {
            const hoje = new Date();
            const diasRestantes = Math.ceil((dataFinal - hoje) / (1000 * 3600 * 24)); 
            const resposta = `Faltam ${diasRestantes} dias pra cassineira`;
            if (message) {
                message.reply(resposta);
            } else {
                const groupId = '120363296494777959@g.us'; 
                client.sendMessage(groupId, resposta);
            }
        }


client.initialize();
