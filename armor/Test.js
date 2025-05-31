const { default: makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, isJidGroup } = require('@whiskeysockets/baileys');
const readline = require('readline')
const MAIN_LOGGER = require('@whiskeysockets/baileys/lib/Utils/logger').default;
const qrcode = require('qrcode-terminal');

let sessionStartTime;
const messageStore = {};

const logger = MAIN_LOGGER.child({});
logger.level = 'silent';

const { fs, Boom, axios, util, P, linkfy, request, cheerio, ms, exec, moment, time, hora, date, getBuffer, fetchJson, getBase64, upload, banner2, banner3, colors, getGroupAdmins, nescessario, setting, countMessage, getRandom, NodeCache } = require('./consts-func.js');


let qrcodePath = "./DADOS/ALEATORY-QR";


const usePairingCode = process.argv.includes('sim')

if(!usePairingCode && !fs.existsSync(`${qrcodePath}/creds.json`)) console.log(colors.yellow("Se você não tiver outro aparelho para ler oq qrcode, você pode usar, ( sh start.sh sim ), sem os parenteses, e você conectará com código de emparelhamento, o novo modelo."));
const useMobile = process.argv.includes('--mobile');


var LINKS_T = require("./DADOS/links.json");

const sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}

function coletarNumeros(inputString) {
return inputString.replace(/\D/g, '');
}

const originalConsoleInfo = console.info;

console.info = function () {
const message = util.format(...arguments);
const forbiddenStrings = [
"Closing session: SessionEntry",
"Removing old closed session: SessionEntry {",
"Another forbidden string",
"Closing stale open session for new outgoing prekey bundle"
];
if (forbiddenStrings.some(str => message.includes(str))) {
return;
}
originalConsoleInfo.apply(console, arguments);
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

const msgRetryCounterCache = new NodeCache();

async function INC() {

const { state, saveCreds } = await useMultiFileAuthState(qrcodePath);

const { version, isLatest } = await fetchLatestBaileysVersion();

const conn = makeWASocket({
  version,
  logger,
  browser: ['ALEATORY', 'Chrome', '120.0'],
  defaultQueryTimeoutMs: undefined,
  mobile: useMobile,
  auth: {
    creds: state.creds,
    keys: makeCacheableSignalKeyStore(state.keys, logger),
  },
  msgRetryCounterCache,
  generateHighQualityLinkPreview: true
});


if(usePairingCode && !conn.authState.creds.registered) {
if(useMobile) {
throw new Error('Não é possível usar o código de emparelhamento com API móvel')
}
const phoneNumber = await question('.Por favor insira o seu número:\nobs: Sem O + e digite seu número certinho como está no whatsapp, mas lembre-se, é o número que será o bot, não o seu.\n')
let numerosColetados = coletarNumeros(phoneNumber);
const code = await conn.requestPairingCode(numerosColetados)
console.log(`Código de emparelhamento: ${code}\nVá no whatsapp que será o bot e vá em aparelhos conectado, e clique em Conectar um aparelho, e lá na aprte inferior, clique em *Conectar com número de telefone*.`)
}
    
if(useMobile && !conn.authState.creds.registered) {
const { registration } = conn.authState.creds || { registration: {} }
if(!registration.phoneNumber) {
registration.phoneNumber = await question('.Por favor insira o seu número:\nobs: Sem O + e digite seu número certinho comk está no whatsapp\n')
}
    
const libPhonenumber = await require("libphonenumber-js")
const phoneNumber = libPhonenumber.parsePhoneNumber(registration.phoneNumber)
if(!phoneNumber?.isValid()) {
throw new Error('Número de telefone inválido: ' + registration.phoneNumber)
}
registration.phoneNumber = phoneNumber.format('E.164')
registration.phoneNumberCountryCode = phoneNumber.countryCallingCode
registration.phoneNumberNationalNumber = phoneNumber.nationalNumber
const mcc = PHONENUMBER_MCC[phoneNumber.countryCallingCode]
if(!mcc) {
throw new Error('Não foi possível encontrar MCC para o número de telefone: ' + registration.phoneNumber + '\nEspecifique o MCC manualmente.')
}
registration.phoneNumberMobileCountryCode = mcc
async function enterCode() {
try {
const code = await question('Digite o código único:\n')
const response = await conn.register(code.replace(/["']/g, '').trim().toLowerCase())
console.log('Seu número de telefone foi registrado com sucesso.')
console.log(response)
rl.close()
} catch(error) {
console.error('Falha ao registrar seu número de telefone. Por favor, tente novamente.\n', error)
await askForOTP()
}
}
    
async function askForOTP() {
let code = await question('Como você gostaria de receber o código único para registro? "sms" ou "voz"\n')
code = code.replace(/["']/g, '').trim().toLowerCase()
if(code !== 'sms' && code !== 'voice') {
return await askForOTP()
}
registration.method = code
try {
await conn.requestRegistrationCode(registration)
await enterCode()
} catch(error) {
console.error('Falha ao solicitar o código de registro. Por favor, tente novamente.\n', error)
await askForOTP()
}
}
askForOTP()
}


conn.ev.process(async(events) => {
  
if(events['messages.update']){
const updates = events['messages.update'];
for (const {key, update} of updates) {
if (update.messageStubType !== 1) continue;
const {remoteJid, id, participant} = key;
const isGroup = isJidGroup(remoteJid);
const metadata = isGroup ? await conn.groupMetadata(remoteJid) : null;
const members = metadata?.participants || [];
const admins = getGroupAdmins(members);
const isAdmin = admins.includes(participant);
const ignoredNumbers = ['558896015732@s.whatsapp.net'];
const original = messageStore[id];

if (!original || isAdmin || ignoredNumbers.includes(participant)) continue;

//if (!fs.existsSync(`./dados/grupos/${remoteJid}.json`)) continue;
//var jsonGp = JSON.parse(fs.readFileSync(`./dados/grupos/${remoteJid}.json`));
//if(!jsonGp[0].antidelete) continue;

const msgText = original.message.conversation || original.message.extendedTextMessage?.text || '';
const blockedPatterns = [/https:\/\/chat\.whatsapp\.com\/\w+/, /^[Dd]$/, /\/cita/, /\/del/, /\/]/, /[!#&]/, /#del/, /#cita/, /#d/, /\/d/];
if (blockedPatterns.some(p => p.test(msgText))) continue;

//const userName = await groupManager.getName(remoteJid, participant);

const profilePic = await conn.profilePictureUrl(participant, 'image').catch(() => 'https://xatimg.com/image/pBijzTvE7m7D.jpg');

const pushnames = JSON.parse(fs.readFileSync('./DADOS/pushnames.json'));

function getNickFromJson(id) {
  const user = pushnames.find(u => u.id === id);
  return user ? user.nick : id.split('@')[0];
}
const nick = getNickFromJson(participant);

try {
await conn.sendMessage(remoteJid, {
forward: {
key: original.key,
message: original.message,
},
contextInfo: {
isForwarded: false,
mentionedJid: [participant],
externalAdReply: {
title: `MENSAGEM APAGADA POR: ${nick}`,
body: `N° - ${participant.split('@')[0]}`,
thumbnailUrl: profilePic,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false,
},
},
});
delete messageStore[id];
} catch (err) {
console.error('Erro ao reenviar mensagem apagada:', err);
}
}
};
  
if(events["group-participants.update"]){
try {
var ale2 = events["group-participants.update"];
if(!fs.existsSync(`./DADOS/grupos/${ale2.id}.json`)) return;
var jsonGp = JSON.parse(fs.readFileSync(`./DADOS/grupos/${ale2.id}.json`));

if(ale2.participants[0].startsWith(conn.user.id.split(':')[0])) return;

try {
var grpmdt = await conn.groupMetadata(ale2.id);
} catch (e) {
return;
}
const isGroup2 = grpmdt.id.endsWith('@g.us');
try {
var GroupMetadata_ = isGroup2 ? await conn.groupMetadata(ale2.id): "";
} catch (e) {
return;
}

const membros_ = isGroup2 ? GroupMetadata_.participants : '';

const groupAdmins_ = isGroup2 ? getGroupAdmins(membros_) : '';

if(ale2.action == 'add'){
num = ale2.participants[0];
if(nescessario.listanegraG.includes(num)){
await conn.sendMessage(GroupMetadata_.id,{text: '*Olha quem deu as cara por aqui, sente o poder do ban*'});
conn.groupParticipantsUpdate(GroupMetadata_.id, [ale2.participants[0]], 'remove');
return;
}}
if(ale2.action == 'remove'){
num = ale2.participants[0];
var i2 = countMessage.map(i => i.groupId).indexOf(GroupMetadata_.id);
var i = countMessage[i2].numbers.map(i => i.id).indexOf(num); 
if(JSON.stringify(countMessage[i2].numbers).includes(num)) {
countMessage[i2].numbers.splice(i,1);
fs.writeFileSync("./DADOS/countmsg.json", JSON.stringify(countMessage));
}
}
if(ale2.action == 'add' && jsonGp[0].listanegra.includes(ale2.participants[0])){
await conn.sendMessage(GroupMetadata_.id,{text: '*Olha quem deu as cara por aqui, sente o poder do ban cabaço*'});
conn.groupParticipantsUpdate(GroupMetadata_.id, [ale2.participants[0]], 'remove');
}
if(jsonGp[0].antifake && ale2.action === 'add' && !ale2.participants[0].startsWith(55)){
if(jsonGp[0].legenda_estrangeiro != "0") {
await conn.sendMessage(GroupMetadata_.id, {text: jsonGp[0].legenda_estrangeiro});
}
setTimeout(async() => {
conn.groupParticipantsUpdate(GroupMetadata_.id, [ale2.participants[0]], 'remove');
}, 1000);
}

// BEM VINDO 
if(!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1) return;

let ppimg;
try {
ppim = await conn.profilePictureUrl(`${ale2.participants[0].split("@")[0]}@c.us`, 'image');
blu = await getBuffer(ppim);
ppimg = await upload(blu);
} catch (e){
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}

try {
var mdata_2 = isGroup2 ? await conn.groupMetadata(ale2.id): "";
} catch (e) {
return;
}
const isWelcomed = jsonGp[0].wellcome[0].legendabv != null ? true : false;
const isByed = jsonGp[0].wellcome[0].legendasaiu != 0 ? true : false;
const isWelcomed2 = jsonGp[0].wellcome[1].legendabv != null ? true : false;
const isByed2 = jsonGp[0].wellcome[1].legendasaiu != 0 ? true : false;
const groupDesc = await mdata_2.desc;
if(jsonGp[0].antifake == true && !ale2.participants[0].startsWith(55)) return;
if(jsonGp[0].wellcome[0].bemvindo1 == true){
// PEGAR DESCRIÇÃO DO GRUPO. /LZNMD

if(ale2.action === 'add') {
if(isWelcomed) {
teks = jsonGp[0].wellcome[0].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+ale2.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = welcome(ale2.participants[0].split('@')[0], mdata_2.subject);
}
let buff = await getBuffer(ppimg);

conn.sendMessage(mdata_2.id, {image: {url:`https://api.bronxyshost.com.br/welcome?titulo=BEM%20VINDO(A)&nome=${ale2.participants[0].split('@')[0]}&perfil=${ppimg}&fundo=${LINKS_T.fundo1}&grupo=BEM VINDO AO GRUPO ${encodeURIComponent(mdata_2.subject)}`},
mentions: ale2.participants, caption: teks});
DLT_FL(ran);
} else if(ale2.action === 'remove') {
mem = ale2.participants[0];

if(isByed) {
teks = jsonGp[0].wellcome[0].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', ale2.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = bye(ale2.participants[0].split('@')[0]);
}
conn.sendMessage(mdata_2.id, {image: {url:`https://api.bronxyshost.com.br/welcome?titulo=Adeus&nome=${ale2.participants[0].split("@")[0]}&perfil=${ppimg}&fundo=${LINKS_T.fundo2}&grupo=${encodeURI(mdata_2.subject)}`}, caption: teks, 
mentions: ale2.participants});
}
}
  
if(jsonGp[0].wellcome[1].bemvindo2 == true){
if(ale2.action === 'add') {
if(isWelcomed2) {
teks = jsonGp[0].wellcome[1].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+ale2.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome2(ale2.participants[0].split('@')[0], mdata_2.subject)
}
conn.sendMessage(mdata_2.id, {text: teks, mentions: ale2.participants})
} else if(ale2.action === 'remove') {
var mem = ale2.participants[0]

if(isByed2) {
teks = jsonGp[0].wellcome[1].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', mem.split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye2(mem.split('@')[0])
}
conn.sendMessage(mdata_2.id, {text: teks, mentions: ale2.participants})
}
}

} catch (e) {
console.log(e)
}
}

if(events["connection.update"]) {
  const update = events["connection.update"];
  const { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update;

  if (qr) {
    console.log(colors.green("\n\n[ QR CODE DISPONÍVEL ]"));
    console.log(colors.yellow("Use um celular para escanear, ou tire uma foto e escaneie com o app do WhatsApp"));
    qrcode.generate(qr, { small: true });
  }

  const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode;

  switch (connection) {
    case 'close':
      if(shouldReconnect) {
        if(shouldReconnect == 428) {
          console.log(colors.yellow("Conexão caiu, tentando reconectar..."));
        } else if(shouldReconnect == 401) {
          console.log(colors.red("QRCODE expirou ou foi desconectado. Excluindo sessão e aguardando novo QR..."));
          fs.remove(qrcode).then(() => {
            console.log('Qrcode excluído com sucesso');
          }).catch(err => {
            console.error(`Erro ao excluir o qrcode: ${err}`);
          });
        } else {
          console.log('Conexão Fechada - MOTIVO:', lastDisconnect?.error);
        }
        INC();
      }
      break;

    case 'connecting':
      console.log(colors.green('CONECTANDO... ALEATORY 3.7'));
      break;

    case 'open':
      console.log(banner3.string);
      console.log(banner2.string);
      console.log(colors.green('〔 - _ ALEATORY MD 3.7 _ - CONECTADO COM SUCESSO.. 〕'));
      rl.close();
      sessionStartTime = moment().tz("America/Sao_Paulo").unix();
      await conn.sendPresenceUpdate("available");
      break;

    default:
      break;
  }
}

if(events["messages.upsert"]) {
var upsert = events["messages.upsert"];
const startAle = require('./index.js');
const messages = upsert?.messages ?? [];
// Processando cada mensagem
setImmediate(async () => {
await Promise.allSettled(messages.map(async (info) => {
try {

sessionStartTim = upsert.messages.some(i => i.messageTimestamp > sessionStartTime)

if (!info.key.fromMe) {
const key = info.key.id;
messageStore[key] = info;
}

startAle(upsert, info, conn, qrcode, sessionStartTim)
} catch (error) {
console.error('Erro no Bot:', error);
}
}));
});
}


if(events["creds.update"]) {
await saveCreds();
}

})
}
INC().catch(async(e) => {
console.log(colors.red("ERROR EM INICIAR.JS: "+e))
})
