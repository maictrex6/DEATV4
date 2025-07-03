(function (_0x3d72b4, _0x2f7798) {
  const _0x5dda68 = _0x3d72b4();
  while (true) {
    try {
      const _0x4f7b1e = -parseInt(_0x491c(3695, 0x11ad)) / 1 * (parseInt(_0x491c(6687, 0x2513)) / 2) + parseInt(_0x491c(2574, 0x413)) / 3 + parseInt(_0x491c(7053, 0x115c)) / 4 * (parseInt(_0x491c(4739, 0xeb9)) / 5) + -parseInt(_0x491c(3528, 0x1791)) / 6 + parseInt(_0x491c(6841, 0x1261)) / 7 + -parseInt(_0x491c(4592, 0x156d)) / 8 + -parseInt(_0x491c(3952, 0xa02)) / 9;
      if (_0x4f7b1e === _0x2f7798) {
        break;
      } else {
        _0x5dda68.push(_0x5dda68.shift());
      }
    } catch (_0x4ad4ad) {
      _0x5dda68.push(_0x5dda68.shift());
    }
  }
})(_0x2177, 608526);
const _0x841457 = function () {
  let _0x2ffa8a = true;
  return function (_0x1e821e, _0x874ad7) {
    const _0x216a4f = _0x2ffa8a ? function () {
      if (_0x874ad7) {
        const _0x185650 = _0x874ad7.apply(_0x1e821e, arguments);
        _0x874ad7 = null;
        return _0x185650;
      }
    } : function () {};
    _0x2ffa8a = false;
    return _0x216a4f;
  };
}();
const _0x3f6a7d = _0x841457(this, function () {
  return _0x3f6a7d.toString().search("(((.+)+)+)+$").toString().constructor(_0x3f6a7d).search("(((.+)+)+)+$");
});
_0x3f6a7d();
const {
  downloadContentFromMessage,
  relayWAMessage,
  mentionedJid,
  processTime,
  MediaType,
  Browser,
  MessageType,
  Presence,
  Mimetype,
  Browsers,
  delay,
  getLastMessageInChat,
  BufferJSON
} = require("@whiskeysockets/baileys");
const {
  prepareStatement,
  executarTransacao,
  fs,
  axios,
  crypto,
  util,
  P,
  linkfy,
  request,
  cheerio,
  ms,
  ffmpeg,
  qrterminal,
  exec,
  spawn,
  execSync,
  moment,
  color,
  time,
  hora,
  date,
  getBuffer,
  convertSticker,
  recognize,
  fetchJson,
  fetchText,
  getBase64,
  response,
  upload,
  wait,
  getExtension,
  generateMessageID,
  getGroupAdmins,
  getMembros,
  getRandom,
  banner2,
  banner3,
  temporizador,
  kyun,
  simih,
  botoff,
  colors,
  comand,
  rg_aluguel,
  fetch,
  AsyncLock,
  menu,
  anotacao,
  menudono,
  adms,
  menulogos,
  efeitos,
  menuprem,
  brincadeiras,
  infodono,
  configbot,
  cmd_termux,
  alteradores,
  tabela,
  conselhob,
  palavrasc,
  nescessario,
  setting,
  logoslink,
  sendVideoAsSticker,
  sendImageAsSticker,
  sendVideoAsSticker2,
  sendImageAsSticker2,
  daily,
  anotar,
  enviarfiguUrl,
  getFileBuffer,
  DLT_FL,
  sleep,
  ANT_LTR_MD_EMJ,
  recolherLNK,
  SIMI_OFC,
  uploadX,
  path,
  atualizarOuAdicionarDB,
  removerRegistroDB,
  buscarRegistroDB,
  puxarGrupo,
  getGroupSettings,
  puxarTodosGrupos,
  BANCOP,
  Database,
  lermais,
  acessAPI
} = require("./consts-func.js");
const stmtCache = new Map();
function getStmt(_0x4faaa4, _0xf8965) {
  if (!stmtCache.has(_0x4faaa4)) {
    stmtCache.set(_0x4faaa4, BANCOP.prepare(_0xf8965));
  }
  return stmtCache.get(_0x4faaa4);
}
var {
  TOKEN_GPT,
  cmdpremium,
  dono1,
  dono2,
  dono3,
  dono4,
  dono5,
  dono6
} = require("./dados/nescessario.json");
const Links_P = require("./dados/links.json");
var {
  fundo1,
  fundo2,
  imgnazista,
  imggay,
  imgcorno,
  imggostosa,
  imggostoso,
  imgfeio,
  imgvesgo,
  imgbebado,
  imggado,
  matarcmd,
  beijocmd,
  abracocmd,
  chutecmd,
  tapacmd,
  rnkgay,
  rnkgado,
  rnkcorno,
  rnkgostoso,
  rnkgostosa,
  rnknazista,
  rnkhetero,
  rnkgolpista,
  rnkotaku,
  rnkpau,
  casamentocmd
} = require("./dados/links.json");
var {
  NomeDoBot,
  NickDono,
  prefix
} = require("./dados/settings.json");
const {
  TEXTOS_GERAL
} = require("./dados/textos.js");
function _0x2c9c3d(_0x156c3d, _0x3648ff, _0x3ce707, _0x39ea8f, _0x109499) {
  return _0x491c(_0x39ea8f - 0x3b3, _0x156c3d);
}
let sharp = require("sharp");
const FormData = require("form-data");
if (!global.donosCache) {
  global.donosCache = new Map();
}
if (!global.donosCacheTimestamp) {
  global.donosCacheTimestamp = 0;
}
const _0x2b3d3a = {
  numbers: /^[0-9]+$/,
  diacritics: /[\u0300-\u036f]/g,
  phoneClean: /[()+-/ +/]/gi,
  whatsappLink: /https:\/\/chat\.whatsapp\.com\/[a-zA-Z0-9]{10,}/g,
  mention: /@([0-9]+)/g
};
const MSG_ANTPV2 = [];
let numerodono_ofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", 'gi'), '');
let nmrdn_dono2 = setting.numerodono.replace(new RegExp("[()+-/ +/]", 'gi'), '') + "@s.whatsapp.net";
let numerodono;
function _0x5c257a(_0xcde4d1, _0xc3795b, _0x490652, _0x380c34, _0x4752cf) {
  return _0x491c(_0x4752cf + 0x58, _0x490652);
}
process.on("uncaughtException", function (_0x253770) {
  console.error(new Date().toUTCString() + " uncaughtException:", _0x253770.message);
  console.error(_0x253770.stack);
});
function apenasNumeros(_0x38d9e1) {
  return /^[0-9]+$/.test(_0x38d9e1);
}
function removeSecondSpace(_0xd6f8cd) {
  if (_0xd6f8cd[1] === " ") {
    return _0xd6f8cd[1] === " " && _0xd6f8cd[2] === " " ? _0xd6f8cd[0] + _0xd6f8cd.slice(3) : _0xd6f8cd[0] + _0xd6f8cd.slice(2);
  }
  return _0xd6f8cd;
}
const diacriticsRegex = /[\u0300-\u036f]/g;
function _0x491c(_0x491c10, _0x7b48dd) {
  const _0x4ad19c = _0x2177();
  _0x491c = function (_0x1ffa30, _0x17e3d2) {
    _0x1ffa30 = _0x1ffa30 - 192;
    let _0x529b69 = _0x4ad19c[_0x1ffa30];
    return _0x529b69;
  };
  return _0x491c(_0x491c10, _0x7b48dd);
}
function RmvSimbolosLmn(_0x414422) {
  return _0x414422.toLowerCase().normalize("NFD").replace(diacriticsRegex, '');
}
const {
  set
} = require("lodash");
async function webp_mp4(_0x382c00) {
  try {
    let _0x52977d = new FormData();
    _0x52977d.append("new-image-url", '');
    _0x52977d.append("new-image", _0x382c00, "image.webp");
    let _0x5bba14 = await fetch("https://ezgif.com/webp-to-mp4", {
      'method': "POST",
      'body': _0x52977d,
      'headers': _0x52977d.getHeaders()
    });
    if (!_0x5bba14.ok) {
      throw new Error("HTTP error! status: " + _0x5bba14.status);
    }
    let _0x3cdf55 = await _0x5bba14.text();
    const _0x5a678d = cheerio.load(_0x3cdf55);
    let _0x1f2768 = new FormData();
    let _0x48558d = {};
    _0x5a678d("form input[name]").each((_0x24f025, _0x1f030d) => {
      const _0x576802 = _0x5a678d(_0x1f030d).attr("name");
      const _0x16a499 = _0x5a678d(_0x1f030d).attr("value") || '';
      _0x48558d[_0x576802] = _0x16a499;
      _0x1f2768.append(_0x576802, _0x16a499);
    });
    if (!_0x48558d.file) {
      throw new Error("Arquivo não foi processado corretamente pelo ezgif");
    }
    let _0x2ef64a = await fetch("https://ezgif.com/webp-to-mp4/" + _0x48558d.file, {
      'method': "POST",
      'body': _0x1f2768,
      'headers': _0x1f2768.getHeaders()
    });
    if (!_0x2ef64a.ok) {
      throw new Error("HTTP error! status: " + _0x2ef64a.status);
    }
    let _0x33dc52 = await _0x2ef64a.text();
    const _0x251bf7 = cheerio.load(_0x33dc52);
    const _0x3180a3 = _0x251bf7("div#output p.outfile video source").attr("src");
    if (!_0x3180a3) {
      throw new Error("Não foi possível encontrar o vídeo convertido");
    }
    const _0x2751c1 = new URL(_0x3180a3, _0x2ef64a.url).toString();
    return _0x2751c1;
  } catch (_0x24aca5) {
    console.error("Erro na conversão webp_mp4:", _0x24aca5);
    return null;
  }
}
function calculateTimeDifference(_0x552c58, _0x336c59) {
  const _0x290e02 = _0x336c59 - _0x552c58;
  const _0x1617a6 = Math.floor(_0x290e02 / 60000);
  const _0x37b178 = Math.floor(_0x1617a6 / 60);
  const _0x1b74e1 = Math.floor(_0x37b178 / 24);
  const _0xa474ec = _0x37b178 % 24;
  const _0x475598 = _0x1617a6 % 60;
  const _0x3705fc = Math.floor(_0x290e02 / 1000 % 60);
  return _0x1b74e1 + " dias, " + _0xa474ec + " horas, " + _0x475598 + " minutos e " + _0x3705fc + " segundos";
}
const webp = require("node-webpmux");
function _0x2177() {
  const _0xf52abf = ['bZKbm', 'hShJK', 'Whbka', 'AuRhG', "nces ", 'rg_al', 'layNa', 'M_MSG', "M gol", " ?, ?", 'lDOJJ', 'T_QUE', 'clEIc', 'ecuqe', 'hXtrn', 'tqXHP', 'bcKIg', 'gsGol', " 𝐎𝐔𝐓!", 'bRRyE', 'aId', "p não", ':-1:-', 'ldiKm', 's/sim', "STE P", 'ortei', " vale", 'eplyM', 'kDeta', 'hnpqY', 'BCGlc', 'oClbL', 'vvqgS', 'yNcwl', 'qBgdk', 'aEVbE', 'OXxWb', 'vIZYn', 'tipv2', " de L", "ma fi", 'ExifW', 'NkAiY', "as ma", 'VtQVS', " WHER", 'MXsiy', " VALU", "ç𝐨𝐮 𝐚", 'akcxF', 'XO_RE', 'prmBW', 'cassi', 'vESUH', 'syMTy', 'LIZAC', 'nsRes', 'ivo', 'QYaaZ', 'blish', 'LHmyy', 'iqueK', 'nize', 'QYKCr', 'UqtwO', 'hosas', 'euoWt', 'UcOdy', 'iJBTH', "ra re", 'nome', 'conn', "rro a", 'da_im', 'odono', 'gsZWr', "\n┃ ", 'aUecL', "ndo s", 'act', 'isGro', 'menus', 'xcUtA', 'phone', 'imitO', 'QzbSx', 'HJFpk', 'vZzeV', 'pfBtI', 'RXANZ', 'adm', 'ocFOo', 'tkjEC', 'flush', '/webp', 'rfefw', 'jAIsu', 'JcbHM', 'TWrjf', 'DmxZf', 'YMMmz', 'ard.s', 'gwjQv', "ra tr", 'ified', 'NSAGE', 'IfVbq', "de mo", 'ANSCR', 'AUTOM', 'Agent', 'GRXTO', 'conve', 'lRSlN', 'rVkmt', 'mYpLH', 'xJrSl', 'lTGEe', 'mbers', "│⎋ Re", 'aZWmA', 'fQMve', "15 -l", 'ObULC', 'vEjIO', 'EWQxL', "ÃO LE", 'tmmzw', 'a_afk', 'lUAxI', 'GrHoi', 'imit', 'ks:', 'nkHIZ', " de p", 'FjsWp', "𝐚 𝐯𝐞𝐥", 'hasSe', "ga pa", 'QUAND', '•𖧹❀⃘࣭࣭', 'mQLla', "= ?\nW", 'BdRLi', "no si", 'ZgoPM', 'gXQXh', 'ento', 'ticke', 'GxJyv', 'AJHjR', 'YjIHB', 'as.js', 'aYicr', 'sHoYW', "a man", 'apare', 'CONTA', 'JARak', 'qIzSk', 'eIjpu', 'METeD', 'WhdkA', "e esp", 'isPre', 'ViOLI', 'jogui', " simp", 'OVspY', 'rwRIb', 'ZlonH', 'sageV', 'nREkY', 'XxFoW', 'mYKJf', "? ORD", 'qCbjc', "olão ", 'GEM_D', 'arQCe', "em at", 'ecurs', "sh 2", 'Lengt', "ual m", 'CkeDq', "ie se", 'kGemS', 'DLT_F', 'vpFhb', 'yyInz', "AND u", 'UIqPq', '=fps=', "╏ 「 ", 'Pzsol', 's/dam', 'uário', 'BOmWR', 'xtlvR', 'OjvXs', 'r_fil', 'ZnTeL', 'minut', 'NMFPT', 'antia', 'SCvuO', "gold ", 'YZvWf', 'BkFwv', 'YBocn', "seu n", 'uKDBI', "⏰ *Au", 'Siyzt', 't0x7Z', 'ClQOt', "ao in", 'nsBuf', 'nmvuI', "da de", '*XP:*', 'Stbjk', 'GIydz', " *Men", "E con", "ro AP", 'nalAd', 'iVBtF', 'taOUk', "S (?,", 'abrac', "ê foi", 'XO_IM', 'RWAHg', 'serid', 'muito', 'rMVFt', "es pa", 'gem', 'TUSYO', 'vRmSL', 'w.fac', ":*\n\n", 'GgLRD', 'wDDhv', 'cipan', 'TrHNr', 'IWNeP', 'DTbzY', "xp + ", "ERE s", '.me/', 'RcjGf', 'mento', 'RYbXt', 'JXjIc', 'afoIX', 'dium%', 'EDirR', " prem", 'QIVpF', 'ha.js', 'uario', 'odhxL', 'izaçã', "ora t", 'dolKB', 'conso', 'ROVey', 'kILkM', 'eTime', 'steja', " 𝐄𝐌𝐏𝐀", "kpot ", 'ncluí', 'KuuUj', 'sound', "rde a", 'RCE_T', "oram ", "dos d", 'hvpij', 'gbFYZ', 'ils', 'EKuRp', 'ZJldL', 'IBOki', 'DsVFn', 'dedTe', 'FJAwU', " fize", 'utput', 'eoleZ', 'QzKBH', 'green', 'EuTnx', 'os_re', 'LFPou', "oi am", 'comec', "𝐫𝐚 𝐣𝐨", 'd_use', 'OISxv', " 𝐃𝐢𝐬𝐩", "ocê u", 'DD/MM', 'xETMS', " PREM", 'jQGcU', 'n/pal', " vida", 'tic', 'eHkcm', 'jHShQ', 'rGtoq', 'XOnKY', "nhos ", 'rces', 'rYYlo', 'yWBId', 'VRKsl', 'svOUw', 'MfDxV', 'allIm', 'WGWyy', 'NCHQT', 'zJYzt', "r lin", '━━━', 'bxLHd', 'timeo', 'Yblol', "anto ", '|2|0|', 'BGQVT', 'ZOPpt', 'Backu', 'aily', 'xMirF', 'txiKb', 'dwaAB', " bani", 'qbQug', 'd/f/A', 'Fjmxx', 'chanc', 'oRqeF', "hor. ", 'mCCTj', 'trVtk', 'XYqkB', 'Wvesa', 'FWIRB', 'ay.go', 'XBATa', 'uTeGm', " pelo", 'Yscxq', 'ausen', " as c", " CONC", 'remov', "NO] E", 'ansfo', 'objec', 'FDdyM', 'id144', 'dciQy', 'MxBlf', 'IoabO', 'OYfOk', 'sBSJd', 'hedLU', 'KBZgb', 'aYcvF', 'ck-na', 'CRYkF', 'Url', 'vLJCI', "ROM l", 'mRBof', 'lizeI', 'grGGO', 'dMNYF', "s ene", 'tsApp', "a noi", 'wfExo', 'ada', 'sxFln', "apaz ", 'ROmiQ', 'KGIhh', ", pla", "ara o", 'sBKJY', 'Rewar', '[PERM', " seja", 'ame', "!\n╰━━", 'psvTt', "AO] E", 'yqzzf', "ERE c", 'bot#', 'grKsT', 'arqui', 'VVXWx', 'wmhRr', "AND v", 'RgQvF', " Tipo", 'xrdnL', " ORDE", 'xoNvk', " p.ou", 'BPyUV', 'load', 'ceMen', "oi pr", 'reali', 'Etcca', 'SELEC', 'dos_g', 'UPJCE', "nds W", 'fstik', 'ebfUN', "Link ", 'bType', "e mai", "💡 Bai", 'HpPFa', 'JHpYD', 'r/sti', "msg s", 'zbXXq', "E Con", 'Aqkys', "ao at", "os\n┃ ", 'p.com', 'getEm', '_GOLD', 'getEx', 'SrEgA', 'utf-8', 'agens', 'MVNFK', 'sxfXd', 'LvhOO', 'XtHeW', 'aLPWq', 'BgeNd', 'kmeQt', 'aKsEM', 'msSTL', " os o", 'tZERC', 'bot', '&resp', 'qKzmW', "rgia ", 'criad', "o ain", " suce", 'rkMyJ', 'naxka', "do te", 'Kcslt', 'UMTbd', 'YeoFY', 're-li', 'YFXoY', 'wzzbc', 'emium', 'DYJHj', "a mel", "ND in", '.vip/', 'tSLBb', '[VERI', '𝐦𝐞𝐧𝐭𝐞', 'mqxDb', 'ajThe', 'ensag', 'ÁRIOS', 'npytP', 'lido:', '@lid', ':ss', 'no.mp', 'vador', 'VYMtI', " Que ", "M opt", 'sUMLf', "s: [", 'flsto', "ente ", 'ão:', 'foero', 'IaHRJ', 'yvUEM', 'RcmhN', 'lfwLI', 'mover', 'aleSt', "nha m", 'paten', 'pp-st', 'exFCQ', 'ZIeAH', "ne se", 'tir', 'nsert', "ndex ", 'dPzbV', 'anco', 'findI', 'CJUJb', 'opçõe', 'tedRo', 'czgoV', 'XvOkg', 'uUYta', "= 'at", 'uxviV', 'RLDuV', 'sYxVb', 'IqBNn', 'novam', "= 1", 'XhktR', 'MzEum', "rro g", 'YJuiU', 'UyhNV', 'wYMif', 'Zqylr', 'SrQDk', 'TxVcm', 'IwgdP', 'VUFTU', 'RVIiU', 'ath', 'SOwZU', "UP] B", 'XOAEm', '#pref', 'findS', 'xECLA', 'ck-pu', 'gmHGv', 'ADM_C', 'ferre', "𝐡𝐚 𝐞𝐧", 'round', 'dvert', "ele: ", 'UgjYc', 'zteWw', 'rsknL', 'da_lo', 'zDGSE', 'zkXlK', 'CkSKY', 'LsMgG', 'dFQBc', 'LEzZE', 'Nome', 'sorte', 'HEwqL', "ovas ", 'eGMka', 'juBzT', 'WFmoL', 'XBvBQ', 'RIqBP', 'pName', 'bRbMF', 'pZGlB', 'nspir', 'dDocW', "ras s", 'paMlM', ',fps=', 'somem', 'ciais', 'tOOHu', 'tCmid', 'VCEmP', "u cor", "『 Rec", "le po", 'kvDlc', 'HCrRL', 'ewOnc', '#nume', 'noteM', "endo ", 'dDocu', " povo", "='min", 'Dmghe', "afé e", "las p", 'mRJrK', 'zerad', 'gIbPx', 'KANDx', "v fps", 'IFBOU', 'do:', "HTTP ", 'floor', 's/gam', 'aRFUC', '_matr', " → ", 'shnuA', 'mlLUG', 'dNNvl', 'mpeza', 'PByKQ', 'EAZdU', 'texto', 'TcVye', " ?, l", ", tim", 'eChoi', 'FigAu', 'aRjGg', 'iVZUQ', 'CWCFz', 'id-ap', " canc", 'eCust', "hã pe", 'JYgIS', 'exec', 'ZUkEu', 'searc', 'wsZql', "arem ", 'mber', 'WrNTM', 'yXyJQ', 'xCnLn', 'sSvpu', 'QtsZh', 'chalk', 'CZjPq', 'viVJX', 'spoti', 'MJASA', " o re", 'daily', 'iorsj', 'IXQwY', 'ência', 'fHVzw', 'MnAGy', 'NLqly', 'rAddM', "sers ", 'PJRsK', 'heade', 'GUdZH', "𝐚: ", 'strin', 'Remov', 'da_vi', 'kaZir', '-loop', 'IyMOa', 'EDIDO', 'umKBF', 'UCETB', 'blYQZ', 'MGvjy', "es de", 'UBiRW', 'QIkkq', 'sole', 'xcpvs', 'oonOc', 'requi', 'IruVS', 'XpSub', 'ssLev', 'ctive', 'jpg', 'get', " ✨\n", "ada) ", 'nePay', 'HjkWR', "isos ", 'n_id,', 'EwGxG', "po e ", 'KwRjE', 'PQyJC', 'ouISJ', 'xHosl', 'PlUlR', " Mant", 'qJfVq', 'fwNkE', 'JLfZg', 'JkzdH', "\n├𝐂𝐨𝐦", 'confi', 'readU', 'com.m', 'MoRaq', 'IfuTj', 'RFRtY', 'udio2', "ha ao", 'trarF', 'sas.', 'fRvoP', 'qUCIn', 'join', 'talXp', "o def", 'rnati', '*erro', 'IwnGK', 'tJCdO', 'TPDwc', 'KQZwz', 'der', 'ilumi', 'RuJIA', 'rDCuX', 'utVuS', 'soluç', "sar m", 'ounde', 'OJkPc', " pres", " ?)", 'Jwisc', 'TaIbv', 'UNygb', '@s.wh', 'thCqu', "ente\n", 'FfqCr', 'USUÁR', 'ttsLv', 'PECÍF', 'ucHch', 'jwJgs', 'yaULo', 'LxXrQ', 'IZxNB', 'nceMe', '_inc', 'keqvF', 'NWrJO', 'xhpfu', "00 ", 'enha', "E lin", 'MPcDw', "ar\n┃ ", 'QqRIF', 'uzVZX', " cora", 'sqvOg', 'ytmp4', 'TXkiS', 'lSyeK', 'Datzp', 'fxONp', 'data', "uto t", 'XbDVZ', 'CAduW', 'casam', 'MuMgE', 'HLorA', 'lafWj', "━━┃\n┃", " um n", '[SYS_', 'TemaM', 'UoQRy', 'bfqaL', 'pJRwR', 'OXLjl', 'FdXBS', 'singl', 'q_2', 'Mbyag', 'XqcqK', 'WnCgc', 'afwse', 'aBIWk', 'ckEqy', 'ssLin', 'lYTCa', 'rrjTv', 'ZYuUp', 'gFFKN', " 3️⃣ ", 'POwfR', 'ZalTs', "* est", " 𝐒𝐮𝐚 ", "ar ex", 'NKNkt', 'rsVWm', "o ine", 'eDNwt', 'eWarn', 'SGGUZ', 'GvQPg', " não ", 'xZRpf', 'VAcjl', 'ook_a', "ia. B", 'EGEZH', 'zxrqX', 'hUahW', 'kSync', 'LcNfE', 'bAjsA', 'lPuSn', 'AkPqd', 'fIHWz', 'AnTgM', 'cido.', 'oite', 'vfbEX', 'WgXIH', 'ática', 'JeaEx', 'UbEVW', 'eUhLO', 'find', 'CSYUs', 'PrPkl', "Boa t", "? LIM", 'conta', 'canEx', 'IPhon', 'ovFdW', 'la/5.', 'Anjvs', 'SIdEg', '2️⃣', 'HyMzO', '┅❆─━─', 'sTKHp', 'tedVi', 'uncau', " ┃ ", 'icarN', 'KKgKV', 'zdcCz', 'KpyPm', 'lFiFs', "rme. ", "r do ", 'Eita,', 'wwdQv', "RE ti", 'vAhbe', "amp D", 'FRsjh', 'ZAeUf', 'VruYQ', 'figur', 'ral:', "m con", "RE ke", 'EMmOi', 'OuOrd', 'vDPzR', 'er:', "de ag", " 8️⃣ ", 'fKYXe', "eja s", 'PAhQM', 'TmUQg', 'Ycvro', 'jid', " => {", 'setGa', 'mYqzW', 'IdOfM', 'com/', 'qJDKR', "e as ", 'orekw', "20 XP", 'recol', 'SsBSa', 'wEmoj', 'Ukhhc', 'ocmd', 'fqFNu', 'zYNVG', 'KnTzF', 'wellc', 'ecYGo', "inha ", 'PbzFZ', "E id ", 'stane', 'ibWsV', 'guard', 'brSrM', 'pbXwW', "nita ", " 」\n╏", 'cIlPS', "ET ja", 'qgXLN', 'NomeD', 'JQJeL', "𝐫 ", 'Rowid', "s = '", 'bado', "p, me", 'RCGje', 'Json', 'mPvoX', 'RMAT', 'NTeiv', "ou, t", "ma de", 'gPFUl', 'Times', 'zJIGU', "TO op", 'mageA', 'BrXVQ', 'HDvmF', 'from', 'sim', '𝐫𝐫𝐚𝐝𝐨', 'kdtJZ', 'jwEkG', "er (k", 'ExifV', 'rKusW', 'kimet', 'FipFD', '═┉✼┉╝', 'antic', 'dutiv', 'VQLfo', 'satis', 'plano', "rupo ", 'xInde', 'hawNw', 'GzBoa', 'refus', 'href', " DESC", 'ExpIT', 'rFrom', 'Mhrmn', 'lizeS', 'NaNiU', 'ponto', 'lqUcw', 'ponse', "na co", " 𝐉𝐎𝐆𝐎", 'qNqNh', 'READ_', 'IGUS', 'tarUs', 'yGzoX', 'OItst', " um r", 'pJgpn', 'E_CAR', 'KGqhE', "a é f", "o um ", 'nKmWz', 'posit', " bril", 'Uaqhn', 'ssage', 'GdhEY', 'OBDRF', 'cepti', 'conte', 'xzUXB', " minh", "ROM u", 'BDyBh', '/mpeg', "╭「 📢 ", '𝐜𝐞𝐢𝐭𝐨', 'GHxRa', 'GgQsT', " (?, ", 'IJqXA', "bot n", 'KjYPd', 'qxqNo', 'zymsO', 'fcuRZ', "e o s", "ssos ", 'VlrSN', "o do ", "\n║ ⭐ ", 'lZIkr', 'QxJxP', 'mKmKw', 'bVhDd', 'rxsZB', 'ytmp3', 'Membe', 'kJvgq', 'JcJvx', 'EM_GR', '(grup', 'geTim', 'aOVrV', 'tadad', " repl", "Cada ", '𝐁É𝐍𝐒!', " })()", 'Olevr', 'dor:', 'GiEAQ', 'ateBu', 'minem', 'fwPGd', 'd_sys', " limp", 'hJrWA', "UP] E", 'fUtCv', 'VeDGc', "Id, n", 'nick', 'fffff', 'zNsrm', 'fWUmf', 'Syste', 'xBvuZ', 'vJnyg', 'uanto', " de r", 'membe', 'lastA', 'fileP', 'VMggB', 'HwQWF', 'TVvgz', 'VRlTk', 'RrFMo', 'Respo', " choc", 'mium', "╏ 〔 ", "a, po", 'zZlJJ', "bash ", " 'ati", 'KTNtI', 'vbTIW', ':tran', '800:8', 'rce', 'mByte', 'wBLQh', 'MvEXi', 'menu_', 'BpUNI', 'tuali', 'sXjEn', 'RDDdl', 'ovFKz', 'QEvnf', 'pkyDP', "Name ", 'kStat', 'UIcLI', '9️⃣', 'fer', '#rewa', "MSG S", 'pRQVy', 'yLIHS', 'OaKTb', 'nPMhA', 'JWciX', 'Eslld', '-mp4', "a é c", 'FlSEX', '_ofc', "r com", 'fIBgw', "┃\n┗━━", 'fLBEb', "ET nu", 'AURQr', 'EcaNw', 'eStre', 'is_do', 'pdate', 'bdQHN', 'miwUx', 'oYEDO', " muta", 'XNZPb', 'XNjat', 'oeoHI', 'fsbaO', 'mente', 'OEYzJ', 's/vel', "a: \"", 'BiXoi', 'doces', 'IJjGi', 'HqeFX', 'WeDOo', "o est", 'osybM', " bola", 'Tjrjd', ".\n\nco", "📱 rem", 'times', 'lodas', 'fryrR', 'verif', 'banid', 'ideo2', 'tvXiS', "te tu", 'ER_MS', '320,i', 'EZiMv', 'marsv', 'lSzHf', 'xUOUV', ". Bom", 'Vcoen', 'getHe', 'hlmxV', 'dica', 'feren', 'XO_PR', 'AsGAc', 'eJid', 'IUWuW', 'dwwGP', 'XnxeK', "com s", 'rde', 'eDisp', "de vo", 'tSRrd', 'assar', 'ndos', 'IzsiQ', 'roZlU', 'Bmibe', 'ADSMQ', 'forme', " mere", 'MCCyS', 'OShwy', "do (a", "Que o", 'lqRTV', 'QHCOv', 'ctt', 'aLnOz', 'xxQIa', "nse b", "ê ser", "ia co", 'queno', 'QwoGJ', 'UCAIM', 'yeJHO', 'htenC', 'RLbcZ', 'anscr', 'wcYoT', 'xthjL', '[()+-', 'rLarg', 'piraç', 'ario.', 'kPsky', 'fzMuK', 'ios_r', 'pDzzj', 'mIyrP', 'linkh', 'uIBVw', 'FonKy', 'CUGKz', 'SGwEo', 'pTZfM', 'DONO_', 'wUqUA', 'ngUpd', 'imgbe', 'xtos.', 'WRLQD', "✨ Use", 'PHUpf', 'PcimP', 'xhebI', "e de ", 'kUzjZ', 'eFile', "pou p", '༺◈✼🎉✼', 'oJBiV', 'REckw', 'ZGfiR', 'aPVFV', 'aCzLL', 'qZmdH', 'tamp)', 'zOWJI', 'UwsUX', 'sendV', 'mLaRr', 'FxmNv', 'dono3', 'XmOcR', 'rdGiv', 'uFpqb', '_grou', 'enAUO', 'RWSyF', 'kDGNT', "r, pa", 'ypNZf', "ivo F", 'tHwdA', 'tapac', 'yksCq', 'DtsXX', 'ers', 'PuTYf', 'LapfB', 'erted', "de ad", 'gLUtY', 'joinA', 'uGzgj', 'nfigu', 'oldDa', 'dono1', 'qYXSv', 'HFUnq', "as fo", 'jdzhX', 'bzyYH', 'negra', 'bzctv', 'oUNYo', 'toLoc', 'hUEUd', "oi po", 'nZWZk', 'gAIrW', 'TSiBf', 'TBIaL', 'YtYSi', "❌ Voc", 'jnQUs', 'itati', 'x_num', 'Umkqo', 'cyBnZ', 'owwNq', 'zWoZq', 'hnEsM', 'tring', 'UYcAn', "form ", "por a", 'CWElp', 'TiLwN', 'SjoyW', 'Cacha', 'ughtE', 'stema', 'PThzr', 'ICdZG', 'POjPo', 'ttonR', '://tw', " da p", 'zBOZT', " será", 'YaHXj', 'RBmEc', 'msg', 'ynruE', "sync ", 'VCYLQ', 'rSsZc', ") \nVA", '[ATUA', 'utMin', 'tMap', "M Con", 'CANCE', 'nsfw', " do s", 'inkgp', 'AAcdE', 'wId', "_por ", 'tYSUJ', "gem i", 'mmNOe', 'CIuJw', 'bangp', 'UzmKC', 'byBoJ', 'fLyOF', 'OwQaI', 'xeNev', "la op", " ener", 'count', 'title', 'MI_FA', 'wiWHD', 'Fxpyo', "na li", 'xOScB', 'numer', 'YRZsu', 'JkPyB', "da no", 'eWoZj', 'iIEUg', 'simil', 'fill', 'uHBMk', 'ident', 'KJsgW', 'onarI', 'XwEId', 'jiCsd', 'gBAmu', 'tzrSW', 'tunid', 'ZoEzL', 'RvOUf', 'da_in', 'LVHqD', "u son", 'rZmKp', 'injLK', 'arKLT', 'rYRdh', 'cRyIZ', 'quant', "/3 ⚠️\n", 'lSUAM', 'IRTEi', 'sCybj', '/YYYY', 'AMLQa', 'uklOc', 'qqkNK', 'AviZg', 'FmiDh', 'VkvNY', 'FXhEh', "ção r", "𝐚 𝐩𝐚𝐫", "heio ", 'TrZZu', 'UOlHl', 'Whats', 'TlaHB', "Boa m", '-mp4/', 'readM', 'e_key', 'FSDMV', 'UBXug', 'ted', 'ESDEA', 'yycbV', "r_id ", 'butto', 'fohGT', 'ovaFv', 'lxtNR', 'OWdNJ', "dos (", 'proto', "upo d", "údo p", " de f", 'origi', 'FIYPL', 'thumb', 'HkbCe', 'rnkco', 'ZESQm', 'DdLAk', "m_id ", 'qUuVz', 'imggo', "\n│𝐍𝐚̃𝐨", 'pImSu', '7️⃣', 'czcaz', 'taWAx', "\n╚┉┉┉", "las s", 'OsbIw', "ter u", 'MGibB', 'tDECC', 'itter', 'mbpSt', 'Prefi', 'nWAKC', "sua v", 'SZzsW', 'pAiog', 'VQuLK', 'DBgRb', 'recar', 'Res_S', 'zmcYO', "ao li", 'hxvGv', 'iInwM', 'Todos', 'nPwJJ', " 2️⃣ ", 'ujTIK', '.jpg', " Boa ", 'ChQQx', 'Erro.', 'kBDxP', " Bom ", 'ckets', 'dio', 'FJQST', 'tionM', 'ticas', "ço de", 'deo', 'OuJow', 'rnCNq', "ê de ", 'OmfgG', 'rUfoK', ", adi", 'UPO', 'hDKMX', 'FHaDg', 'WlTlA', 'AhTCY', " inde", 'selec', " pode", " stat", 'IDThw', 'ubmen', "va na", "ing t", 'CqBuW', "vos n", 'tTODV', 'OUND', 'press', 'gjCED', "15, p", 'PAGAM', 'zohcK', 'xMAYk', 'Ojeii', 'rDpZC', 'ODwZx', 'MiFuR', 'kVXRK', 'WyKhG', "ão do", 'nmrdn', 'bp_mp', 'mmonS', 'JKPBn', 'LFeSc', "az e ", 'ZgxYm', 'oSPQy', "ar fi", 'RvCkx', 'cmd_m', 'hdyic', 'QKdUb', 'PscFJ', 'lHKvz', "\n╰━━━", 'yLZEo', 'XItae', "𝐢𝐭𝐞 𝐮", 'eogxs', "O sor", 'eymsf', "tas a", 'brilh', 'SKQxg', 'mp4', 'DVGgV', "e boa", 'IUcRz', 'TSwnU', 'GoBBx', 's@bro', 'xJcwt', 'ix#', 'cSkHb', 'OCjEW', "ry) V", 'ifDkT', 'ftYDd', 'toStr', "nus, ", 'YkZPP', 'rific', 'RAO_M', 'LjPwS', 'eppwK', 'refle', 'vídeo', " aind", "d: \"", 'wOnaI', 'oEZej', 'xwYXc', 'uxuMC', '://ap', 'TJoWc', "elo d", 'vzuqs', 'EOuqd', "oa no", 'tLWZk', 'LZjgg', 'bpyWa', 'IIAav', 'yTzyz', 'desca', "I par", 'sxLnj', "do ou", 'doYzN', 'botNu', 'JtZjB', 'sonha', "a voc", 'GVQiG', 'incrí', '*PARA', 'mbiyi', "AO] P", 'UqelM', 'UXUMJ', 'da_me', 'EMmxC', " 9️⃣ ", 'rmed', 'levEM', 'SKdpB', "p -fi", "G] Er", 'ração', "ão é ", '┉┉╝', 'momen', "ance ", "like ", 'dex', 'charL', 'ssíve', 'onWha', 'tedMs', 'lateA', "ss 1 ", 'GwOVy', " ⭐\n", 'QsqQG', 'MMBld', 'GhkKr', 'oCXcl', 'nDoQC', 'ExRCZ', 'hasAn', 'MGUtz', 'tOrUp', 'WWUFP', 'hBpaU', 'ZYkIw', "M sti", 'mtvIa', "ões e", 'rJfiY', 'form-', '𝐟𝐢𝐚𝐧ç', 'cPWtX', 'thor', "ueça ", 'rmina', 'qzVVq', 'qyRpf', 'cesso', 'XKvGX', 'HaxVD', 'vrRcw', 'KcxGg', 'jSiXf', "E sti", 'gVKZP', 'pvVLo', "tes s", 'jSSQw', "upo! ", 'lugue', 'leBuf', 'wcJzZ', 'adici', 'RyYQx', 'Ketql', 'WbwEg', 'idos', 'sPPnt', 'LCKMp', 'Acord', 'antiv', 'tsUpd', 'GobrP', 'LLsOg', 'VBlyr', 'longa', 'pNvEm', 's.jso', 'OLKRy', 'uWZgD', 'WunAu', 'tedSt', 'cker', "redo ", 'ha:', 'YnAKD', 'zMZpq', 'PBfNZ', 'nfpMX', "_num ", "MSG (", 'xwmnW', 'uohTh', 'qfGPI', '3Dsti', "O seg", 'PvFrm', 'esRqu', 'isFle', "a sej", '_O_SI', "ROM m", 'G_XP:', 'YiIMY', "de en", 'kOPZQ', 'Hvbun', 'icBdD', 'contr', 'tiP', 'super', 'iWmfd', 'nkgp', 'text', 'LbAzF', "dmin ", "\nSET ", 'NzSSM', 'mpXbh', 'UCrzL', 'new-i', 'AixGX', 'vBSjW', 'ozpxD', 'NSvPu', "ak:* ", 'forma', 'os/or', 'UyinU', "o ao ", 'LMMbE', 'WTqEO', 'WBvdw', 'meimP', 'ens', " 6️⃣ ", "em fr", 'Kbbvo', 'KYQQy', 'fetch', 'some', "ã é u", 'attDn', 'uwTxE', 'yknLk', 'oINDQ', 'IXXgF', 'eraçã', 'edLim', "\nUPDA", 'alias', 'nGiQk', 'cjzpM', "gar a", 'copli', 'sNldx', '8️⃣', '^_^*', 'guvNy', 'audaç', "ue ho", "𝐚𝐧𝐝𝐨 ", 'ZahjJ', " 📝 *M", 'MjAQz', 'muMQh', 'EVAL', 'bEbfu', 'IqwFJ', 'ão.', 'lUbdQ', 'kQAik', " (sor", 'VAyEb', 'Mozil', 'WbPjQ', 'ensam', 'RZqMN', 'ict', 'r-mak', 'coraç', 'einic', 'sWith', 'OOJXV', 'fFgAn', 'S_GER', 'aku', 'or=wh', "ao ve", 'jdexy', "ão ac", 'yKtiE', 'KzkVY', 'SoeeL', 'gwtoQ', 'MJYdJ', 'KgwOx', "ROM C", 'vSByE', 'PquMJ', "uel] ", 'Nenhu', 'FEPzn', 'Group', 'Pasta', 'ntera', 'jeTbP', 'cance', 'ctsAr', 'pupLx', 'exter', 'trada', "\n╚━━━", 'LMDeO', 'inks_', " vide", 'ExBuy', 'andos', 'suces', "foi r", 'HYfVg', 'vmode', 'lafvg', 'OZIof', 'ExifI', 'jxcGb', 'PBxTq', 'OdeDO', " 📈 *L", 'scale', 'XTfIL', "6) Ap", "e cad", "🎯 Alt", 'TuRhk', '_buff', 'vqayj', 'OUSdZ', 'all', 'setti', 'ckpot', " time", 'IuqgB', 'rRqUo', 'TmqTj', "s em ", 'CKFNO', 'boaTa', 'XvJiF', '.png', 'dGM_P', 'EKwSU', " razõ", 'HSWEB', 'eWrit', 'tados', 'lBZAV', 'do.', 'QDvdC', 'dProc', 'obter', 'qWLOk', 'PUFAC', 'tir2', 'idade', 'gMfsV', 'ndom', 'ges', "e pro", 'menti', 'calcu', 'VHeqM', 'gKeoU', 'MXAJL', ':00', '&perg', 'posta', 'XsuXx', 'MIoCx', 'SoDon', 'ARTSN', "o, ti", 'vfZXH', 'quXzZ', 'rrorW', 'AhxnE', "A vid", 'uSLmI', 'om/', 'wwBJV', "\n┃\n╰━", "ara c", 'KVMGe', "T cha", " dúvi", '𝐞.', 'reset', ".0, s", '━━╯', 'PEncD', 'start', 'sUSIu', 'jsbGQ', 'XEocL', " feli", 'mNXQz', ". FNC", "y = ?", 'RHUHJ', 'RXiSe', 'UvWEM', 'SkwvV', 'PROCE', "> ?", 'aotXU', 'BVxmD', "e sem", 'QzmCD', "ão bo", 'kMARf', 'PpqoW', 'UAfBY', 'dor_u', 'encon', "[❗] E", "rças ", 'restr', 'pushN', 'ate', 'ACERT', 'aVcwp', "dos f", 'ANlho', 'HOwra', 'ore-l', 'cOhpR', 'veita', 'eling', 'pKXhR', "𝐢𝐧𝐝𝐚 ", 'tFCfy', 'hNYQd', "; [b]", 'forEa', 'nXQPV', 'mPVXi', 'himen', 'winne', "guir ", '0|2|1', 'omman', 'tPncF', 'JGyzJ', "𝐧𝐚̃𝐨 𝐚", 'KStfJ', 'Messa', 'xists', 'rigin', 'ios-a', 'RRnCn', 'qjjUt', 'glSlR', 'fgogl', 'urpre', 'kfjbx', 'rada', 'FsCdQ', 'zObnw', "ao sa", 'oveit', 'OEOZD', 'emovi', 'forwa', "r o v", 'RCE_C', 'hOMpw', 'tvJCb', "𝐞 1 𝐚", 'libwe', 'cbDBZ', 'entoc', 'PDsyw', 'ICaGA', 'spect', 'API', "𝐨𝐠𝐨 𝐝", 'Usuár', 'HjaGM', 'maker', 'ldIXd', "el qu", " tota", 'BIsQr', 'dEIts', 'OdIwa', 'JFWdX', 'eReso', "𝙲𝙸𝙰 」", 'JAFWg', 'ncont', 'ngs', 'addEm', 'local', "om mu", 'A3AR9', "O con", 'DEjml', "ta de", 'KcgMI', "NO] S", 'jBecc', 'mwLjy', 'qvABW', 'd.js', 'mojiG', "ição ", 'nsexX', 'svuVt', 'NAtyR', 'quote', 'TulpV', 'TmDrt', " Gold", "! sta", "São ", "eu ce", 'iUjtJ', 'UlCUk', "sado ", 'roup:', '━━━━┓', 'zjyAa', 'xible', "s pre", 'BmssN', "rmar ", 'imila', 'ifVoK', 'bjVxk', 'mmonP', "TO st", "as co", 'sWmeQ', 'woFYb', 'onfir', 'react', "️❬ ✔ ", 'VruCk', 'atual', 'EmPPt', 'mVzLy', 'JJzhd', 'exten', 'iData', 'KUrtS', "a ilu", 'syTWa', 'ANTI_', 'avras', 'tore/', 'UNcgM', 'nBrUF', 'nlEtf', 'spHii', 'n/leg', 'SxfCg', 'doc', 'BTzVN', 'os/se', 's/sgl', 'MiDCg', 'hKIZl', 'UapNB', 'TFEDq', 'EspLF', "de pa", 'JOgje', 'sGUbM', 'ilahy', 'aaDmK', 'LSQMa', 'AuWEh', 'y=JOS', 'Pbkwp', 'y.co/', 'mage-', 'KyRhj', 'puxar', 'run', 'BVOqk', 'QzuUN', " um s", 'Agcfv', 'GLypA', 'ZRkxj', 'ingUn', '[SEND', 'ÁTICA', "vo', ", 'rte', 'Xjobj', 'posiç', "tos e", 'JBZNl', 'MENSA', 'pbqMs', 'bKdXT', 'diacr', 'ZIJJZ', " ao u", 'yMQYS', 'PwzpJ', 'TVgkq', "⚠️ Pal", 'UIdaE', "┉┉╗\n║", "Que a", 'UtgDp', 'n_dev', 'tGFuM', 'UiJDZ', 'aymen', "= ? A", 'MGkCk', 'cdhdp', "ndo b", 'dWcuf', 'ono', 'ifyRe', "a men", "tus =", 'tiCwo', 'ings', 'XpLWb', 'gSQyY', 'ftHEQ', "𝐨𝐮 𝐞𝐦", 'csutU', 'crypt', 'WrgmN', 'pmxaQ', 'lhob', 'anças', 'QHWzr', " deix", 'onfig', 'bCtfX', 'gQlRx', 'yts', 'HicWV', 'nRaas', 'gify', "O lin", " -ar ", " tard", 'PoXDq', 'CWhrB', 'sVrdd', 'JAapZ', 'TSXQp', 'attr', 'lLUco', 'qFrdy', 'onLev', "gem c", 'Jqkav', '-vsyn', 'da_li', 'NAO', "\n╠━━━", "mp < ", 'ZHqaA', 'kEPLd', 'vtAQZ', 'sharp', 'arity', "f [p]", 'kmFlx', 'mençõ', 'ontad', "\n┃\n┃ ", 'MsZCp', 'SytoT', 'SLzuO', 'APnvx', 'not_a', 'jNhSy', "o foi", 'lidad', 'SNhQn', 'fKWvQ', 'FUhjh', 'KYiLZ', 'readF', 'olor=', " 💰 GO", 'lWcVj', 'TzsUX', 'OPgXr', 'yNIAn', 'aQyCg', "dade ", 'qabTv', 'temen', 'T_URL', 'TxAIn', 'esso!', 'iznhS', 'ivado', 'GeAhB', 'delay', 'encim', "dono ", "𝐭𝐫𝐞 @", "args ", 'mih2', 'KYewL', 'oESSN', 'PdVvL', 'cVDnz', 'wiCvW', 'uemko', 'PiVAX', 'FAILE', '_num', 'HIZhn', 'xRvYS', 'samen', "a rec", 'Dados', 'qqCoF', " banc", "R BY ", 'kPkFA', 'DXJXs', 'HwOZi', 'LszWh', 'yhRIH', " de s", "tre e", 'uando', "e tor", 'bxwXe', " 𝐓𝐨𝐝𝐨", 'ca/Sa', 'IqzXN', 'aLsFz', 'ZxErH', 'MkDlH', 'kBkVn', "ste c", 'cHxUr', 'WAJtx', 'jzDYu', 'ebook', "e inv", 'qgWkw', " 𝐕𝐈𝐓Ó", 'bROOv', 's_pre', 'vmSZa', 'GgVDZ', 'siste', 'ks_re', 'bUcwH', '-ss', 'qIUvL', 'isnit', 'yuHWV', 'yjmOw', 'comma', 'ge_ke', 'xoCzX', 'NegRu', 'qMEJj', 'MDjYF', 'yqRjl', 'dCnAz', 'beewn', 'TmqiC', 'wbPDD', 'uqgIR', 'AnEhE', 'WwfAR', 'petVz', 'upLin', 'ente!', 'FPFBf', " hora", 'FkBDh', 'UuQcb', 'jtBSS', 'prfBg', 'conca', "de de", "Id = ", "ER2] ", 'ereni', 'lsgES', 'k_vid', 'er_fi', 'RIysI', 'IcxrI', 'ados', 'gLPjJ', "stá n", "ld: ", 'CgIeH', 'AvYLp', 'XVnUo', '𝐚𝐧𝐝𝐨𝐬', 'rnkgo', 'nhas:', 'rOMlD', 'gswhd', 'elect', 'VsMZx', 'tdlLN', "UP] A", 'nal_a', 'ZxVxF', 'sleep', 'oXVVU', "ão o ", "tome ", 'ToWeb', " $: ", 'pPTQk', 'tFile', 'novas', "na ex", 'HuYEU', 'yYbcX', "s inv", 'UGoHl', '.mp3', "o aus", 'sível', 'durma', 'rvDAb', 'uted_', "rro n", 'DELET', 'pquov', "e e s", 'FPCbw', 'BQxHH', 'TCKSH', "ece q", 'OtgYD', 'beEWe', 'jVeVq', 'URuOM', 'QcgzZ', 'FICAÇ', "ios p", 'uffix', 'vSTvM', 'seBvS', "ono d", 'lRsQF', "io nã", 'WQEul', 'forwh', 'gWACu', 'lKvST', 'menu', "e emb", "\" \"", '6️⃣', "enha ", 'jtEkL', 'LdsXC', 'jeDVK', " (com", 'drCks', 'gkimr', 'essad', 'WqpSE', 'NvoRZ', 'PtZcn', 'JDvXo', 'upo_i', 'JWNvc', " carr", 'Simih', 'Andro', 'rsIuA', 'crxSD', 'isCom', 'KFVru', 'stoso', "vo an", 'dias/', 'WlgGh', 'FXLaR', 'name', "┃\n┃━━", 'isLin', "o Wha", 'qFyWR', 'FnGOq', 'HgYeE', 'utomá', "m em ", 'FNiNf', " 𝐞𝐧𝐜𝐞", 'ealiz', 'tidas', 'EfaxA', 'CabmW', 'ErzgL', "seu s", 'bPusk', 'fKpDH', 'ZvLyc', 'ErbXv', 'fKKMn', 'certo', 'VcwBT', 'ezgif', 'RMAR', 'eKsey', " 👑 *", 'JStRT', 'CgPrW', 'nicia', 'ngbot', "\n╔┉┉┉", 'dataG', " '..'", 'taXvL', 'uheFp', 'mdGNd', 'iiNnp', "m suc", 'nica', 'da_au', 'GVGWb', 'hajII', 'vuKQM', "E lev", 'rnkpa', 'gAXiR', " 𝐟𝐨𝐢 ", 'PyeSi', 'PGeZA', 'talog', 'ype', 'IgIYe', 'PbhKC', 'vpyJx', 'Ameri', 'XgxJf', 'qTLGu', 'rComm', 'SERI', '[ERRO', 'inici', 'lqAUq', 'xahPj', 'nidad', 'RUGbr', 'rJVst', 'HFjFt', 'QyCSg', 'yikqp', 'autor', 'pdJZO', 'getUn', 'fundo', 'nPjPv', '━━━━━', 'wpRBf', 'TWHZg', 'dcCWh', "ções ", "ha lá", 'true', 'Rnrue', 'dmini', " e be", 'fação', 'WoByK', 'aDGxb', 'Uilym', 'Vinga', 'gvRbh', 'KqSxE', 'antil', 'munit', 'fazen', 'mhECo', 'QnFfZ', 'ulYcH', 'catal', 'mJsmv', 'iguri', 'MENCA', 'phZZG', "gia d", 'MFWkQ', 'sQvBL', "ar op", 'xGctL', 'wrXmj', 'Zeqwg', 'Conti', "ar pa", " 𝐜𝐨𝐦𝐞", "ar us", 'basic', 'eCMXi', 'inyOe', 'LINK_', 'JfuwY', 'jvLCA', "os co", 'hiYLU', '_ERRO', "❌ Err", 'étodo', "no pa", 'qvkcZ', 'ZMpSV', 'xzWSg', 'YrarS', 'xiste', 'atuVa', 'EyEOm', 'JACCA', 'exif', 'qNTbN', " proc", 'Dkndl', "pelo ", 'XzyHI', 'Optio', 'KnxOf', 'EhKcf', 'IVO', 'herli', 'zfkjd', 'JuTJl', 'VhtPt', 'edit', 'SAR_X', 'ziTYA', " remo", 'back', 'raçõe', '[CGJK', 'xvvjG', 'AArWR', 'wzwhp', 'whQkp', 'nqzgr', 'nviar', 'vHUdl', 'scess', 'trans', 'PtGQK', 'hEoUJ', 'sHQTJ', 'bfEdi', 'and', 'AAXPM', 'kvhcu', 'KRtrh', "rs WH", "ue o ", 'OqdTS', 'RAUQb', 'GxYXQ', "AO] S", 'infod', 'ibweb', "s ilu", 'HqNlt', 'ifczL', 'anfiH', '𖧹•─━─', 'DTdse', 'tiva', 'IAwwO', 'TMkRI', 'aixar', 'gbjyC', 'lastD', 'xlYFz', 'mgold', 'ium', 'HuAkr', 'QqflW', "ento ", 'ensht', 'las!', 'refix', 'ih2', 'kYBvb', 'allCo', 'xgQyp', "⚠️ 𝐋𝐈𝐌", 'forca', " o pr", 'r=utm', 'KNSfT', "vo' A", 'txt', 'UfuYe', 'noite', 'iWVdg', 'arch', 'state', 'getRe', " 𝐝𝐞𝐬𝐚", 'hDkyI', 'scans', 'stamp', "o lev", 'uTPCD', 'dyGHr', 'npzmT', 'base6', 'pxlzj', 'eUOsB', " admi", 'PKYnh', 'pYZew', 'docum', "𝐧𝐭𝐫𝐚 ", "ar re", "na ad", "boa n", 'subje', 'gPKBV', 'pMJIM', "o seu", 'pjoxX', 'aMUuX', 'rzvKG', 'ailef', 'nWJOB', 'multi', "is co", "o cor", '#emoj', 'har.', 'KmZLA', 'nquis', 'desmu', 'aWhZe', 'oTVNL', 'estam', 'alMod', "de FR", 'CSCTs', 'FigPa', 'zRDMj', 'chang', 'vmKCz', 'IZWxT', "amp F", 'vwOzf', 'zftGO', 'quist', 'ncy_c', 'Grupo', 'ZGSdX', 'ssarS', 'fix:', 'tiODH', 'DENKc', 'skoRe', 'alugu', 'baHVi', '://wa', 'turns', '.com/', 'Uskzg', 'elado', 'consi', 'OYBgN', 'dquir', 'rolet', 'lidId', 'ZoDTJ', 'LYwNx', 'qvwev', "a de ", 'YiYrt', "nd = ", 'TInFI', "└──⭓\n", "𝐨𝐢 𝐫𝐞", 'hKSqt', 'ecuta', 'tqYvd', 'AiuJi', 'BANCO', 'GNipB', "e voc", 'nta', "seu c", 'BnoJV', 'date', 'lZtRb', "\n║ 🏵️ ", 'ODQvJ', 'ync', 'buffe', 'GPJDf', 'yaetq', "Não f", 'saveS', 'dCome', " Erro", 'autob', 'sPtpr', 'cvDTz', "to vo", 'args', 'xWYAJ', 'SSING', 'YSqEt', 'cmdpr', " tão ", "o\n┃ p", "eja t", 'CXeBq', 'oMlxa', 'EJVnS', "um mo", 'qTzFp', 'akJvi', 'GDTve', "go in", 'siAJX', 'rio.', "s par", 'da_do', "#, se", 'mysen', 'gurin', '980874lNwRQV', "━━━╝\n", "ar co", " 👮‍♂️ *A", 'annou', 'DUuFy', 'fXkGc', 'pers', 'UYMJq', " ser ", 'stk', 'euAHH', 'aylVC', 'wWwgn', 'mitaç', 'lZczz', 'dfLxE', 'qHEaj', 'CKNuN', 'ojiGo', 'tensi', 'jEyfk', 'getRa', 'SjFjD', './out', 'ardGi', 'FdbnB', "]; [a", "🔍 isG", "\n╭━━━", " É ES", 'Resou', 'tkKyb', 'defau', 'gunta', 'tdLbc', 'yBtYh', 'EPwUM', 'bfUen', 'YVTUG', 'AIKxZ', 'tqkTR', " e tr", 'tJslI', 'dMsg', "ar ca", "!\n┃\n┃", 'IdwNl', 'PVMGl', 'OFESh', 'gvnjJ', 'BLDlM', 'simi1', "𝐟𝐢𝐨 𝐟", 'teios', 'wygtr', 'Pkwdk', 'iVIbT', 'orMSG', 'ltwFU', 'icalU', 'XZCnf', " SET ", 'yeMUO', 'VGdTE', 'acred', "les. ", "s com", 'sYnfJ', 'qoiYn', 'frase', 'zDWxH', "hor e", 'anUDI', 'MiYuv', 'rio(s', 'eight', 'EKFpT', 'NHgjW', 'clglq', 'SdLlw', "heia ", 'wozkp', "ar li", 'ywvBg', 'FLIGq', 'rqqtQ', 'PKydz', 'vItIs', '-hZIV', 'has', "🚫 3 a", 'tedAu', '15947', 'gPLhA', " ? LI", "s pen", 'SccXH', 'DZbny', 'jGTfv', 'TnalR', 'ikDPc', 'VHKnU', "𝐄Ã𝐎: ", '48000', 'XLUJQ', 'cker_', 'QNKSM', 'HlYqj', 'vdkmP', 'ACTER', 'venci', 'nnoun', 'BgaZs', 'vado.', 'g.wha', 'DMPTi', 'data_', 'bTMKn', 'kdqnN', 'asta:', 'bros', 'hkqcg', "━━━╣\n", "𝐞𝐮 𝐚 ", "s pro", 'CSgKh', 'UAcBM', 'CjIrA', 'sSync', 'E_SO_', 'RAWwe', 'Emoji', "\n\n𝐎 𝐣", 'EIcnr', 'rMDvr', 'PffbO', 'admin', 'BDMrz', "et go", 'BBCgG', 'QrxPJ', 'nol', " opor", 'lizaç', 'nVeVv', 'UgXiu', "eja a", 'vDcGG', 'xXpZR', 'kGzfk', "dia t", 'sVIxu', 'Tzfyc', " para", 'uffer', 'BQZpv', 'EGmTs', 'remiu', 'HaXjN', "ver o", './con', "ted) ", 'iXHKv', 'leByI', 'JSWmI', '𝐄𝐑𝐓𝐄̂𝐍', '[DT]', 'GhuOY', "r WHE", 'TJowN', '𝐩𝐚𝐭𝐚𝐝', 'cJldB', "𝐚𝐫: ", 'jis', 'JdJaz', 'UmYUT', 'lAfda', 'os/te', 'lqNpU', 'laHEX', 'hTavg', "lvar ", 'NqGdw', 'cFowg', 'reagi', 'pFIyb', '_ADM', "ra, s", 'mp3', 'LIMIT', 'lastI', 'nhos.', 'wxGon', 'Jeqln', "nto >", 'getMa', 'ALLOW', 'REsSt', 'vFIkr', '(stic', '[a][b', 'zhzax', "m um ", 'po_id', '_dono', 'YgPpX', 'oDkCN', 'cemXM', "r sta", 'aeXRb', 'UARDE', 'TdIub', 'vKTju', "io mu", 'QpkHU', 'loSLf', 'ite', 'tipv1', 'i.bro', 'IHXel', 'ncrív', " 𝐈𝐍𝐈𝐂", '.ogg', 'vNStr', 'gens:', "gem m", "no se", 'rzooP', 'Comec', " = to", 'qzLiX', 'nYqUv', 'BEMeo', 'lDB', 'rrega', 'qkIwN', 'ion', 'uGBvl', 'rbxrM', 'mmvVy', 'ras', "𝐬 𝐎𝐬 ", 'TxYKH', 'nquan', 'yFUGo', 'OkyJc', " ver ", 'Bqapo', 'oBrsJ', 'ossle', "\n┃ 🔨 ", 'VNqjh', 'cfjlf', 'imgve', "mp) V", "𝐨* ", 'XAEyW', "zar c", 'LInPb', 'QXjCl', 'MSbVx', 'pgcAM', '@whis', 'NVlzF', " atua", 'ys/si', 'mjJuB', 'apple', "ers W", 'alett', 'NT(*)', 'adas:', '_EMJ', 'FTpWT', "iw)':", 'uTttw', 'nXVvg', 'spgni', 'proce', 'dFWCy', 'uJgwW', '𝐧𝐭𝐞𝐬!', 'LCzZh', 'UVWsu', 'e_id,', " leve", 'rkVjV', '(((.+', 'KIoYt', 'pLVYo', 'dROqE', 'aVDiu', "a uma", 'Etdgk', 'ZWxKB', ", las", 'erThu', 'kgnvQ', "│⎋ Us", 'auLev', 'inha:', 'path', 'adver', 'TGdWT', " alte", 'ucqmY', 'G_XP]', "RRO: ", 'OPmOK', 'ccETF', 'gKEnV', "tos s", 'XGbOI', 'dwREl', 'apply', 'ewlhi', "ara s", 'vRemk', 'whaVH', 'msimi', 'eKIRD', 'PTQVt', 'rojUV', 'onten', 'itaçã', 'iUWXy', 'upaçõ', 'turn', 'edTex', 'Reply', "ar qu", 'rpWQf', 'LhaOu', 'WHERE', 'JoZvA', "les W", " capa", "ia! H", 'lyUBy', 'datet', 'Desca', "Olá, ", 'QwAZR', '(320,', 'EUgpX', 'rforw', 'Cache', "𝐮 𝐨 𝐝", 'enu:', "T use", 'skiCP', "e:* ", 'ç𝐨𝐮!', 'deoMe', 'OXIhB', 'o.jso', 'oibid', 'os/li', 'VgVoO', 'nLmnw', "_id =", 'bPsAs', 'dex_n', 'uXYie', 'CshEk', 'init', "ps WH", "e des", 'write', 'regis', 'toFor', ": @", '*Stre', 'zvosl', 'nceme', 'roupI', 'DffKY', 'EvwMN', 'rAGYJ', " é um", 'separ', 'pMRXD', '𝐗𝐂𝐄𝐃𝐈', "o fal", "FROM ", 'Cibxo', "ao de", 'uncoe', 'WZnMt', 'pesyt', 'qQwDb', "ND fi", 'ageMe', 'QlrFZ', 'ufOnW', 'gGalh', 'ined', 'DBbBy', "r usu", 'SEND_', 'DCxXn', 'SSSfZ', 'MdShy', 'os/mi', 'rfgeL', 'ASxXB', 'TR_MD', 'uxUOE', "a o g", 'zKcLu', 'també', '◈༻═┉✼', 'kIVPF', 'delet', '𝗘𝗡𝗧𝗘:', 'PltpS', 'cXufF', 'erPre', 'kLUcm', 'RBqHC', " o se", 'a%26u', " 𝐯𝐞𝐧𝐜", 'o_Pau', 'regar', 'CQdmn', 'ySerQ', 'MwLcP', 'GpWYx', "ades ", 'zZTrU', " figu", 's.js', 'utube', 'wGHIu', " mant", 'GOvCP', 'QQYVl', 'assig', 'lho', 'muted', 'EqtnZ', 'gra', 'GeTCl', 'lxlXt', 'hmpdq', 'EaRev', 'QoIfg', "um = ", "T INT", 'lPCze', 'eGrou', 'SkXSX', "gria ", "ono s", "no mo", 'errou', 'pszCe', "e seu", 'jZISa', 'Locat', "s, en", 'rOBUD', 'FTaty', 'O_MSG', 'WERhY', "ND me", 'NixiB', 'ode', 'lerma', '&imag', 'rodon', 'qpnLh', "ono\n╰", 'GNxgQ', 'caAlM', 'bVuza', "us ", "m aco", 'boata', 'filte', '_MSG', 'rId', 'wjJMk', '_comm', " 0 -p", 'erHel', 'qbzlc', 'gistr', 'ome', 'LTYTj', 'STKOb', 'mSbBc', "de gr", 'XwFIM', 'gener', 'pRNfu', "T ven", 'rd#', " gold", 'uUUoo', 'ccJPa', 'seEiM', 'NDoXw', 'QzBVM', 'ad=32', "z e s", 'rFCZV', 'hweTs', ", ?)", 'avjnC', 'hjgXL', 'ijXoJ', 'VyeWK', 'zação', "a est", 'sIDLv', "🛡️ Res", 'ONecn', "mine ", "et de", 'fOjlr', 'mt2', 'oximi', 'kIson', 'LfGwE', "d = ?", 'oggXD', 'onarM', 'xLfVT', 'dOcpr', 'padEn', "a mai", " | fr", 'tUpda', 'pFsxv', 'Setti', "tus: ", 'UtJAA', 'SaApi', 'cinto', 'icado', 'NBxjm', 'XHzur', 'WikuT', 'DMUym', 'atalo', 'lsdna', "nso e", 'SuQOU', 'Axllo', 'lFnvj', 'rno', 'ogrup', '[SODO', 'da_co', 'ZaKJx', 'KjrgJ', 'setGp', 'nçoad', 'QXmTK', 'PtFEF', 'vziIT', 'lXoFw', 'lUazv', 'essag', 'pwkul', "om me", "21 Sa", 'lxALe', 'msHor', 'SIxky', 'evJrz', 'RDeKt', 'aJSbg', "ar es", 'eVide', 'pNolk', 'ário:', '╔━━━━', "er pe", 'FhkvJ', "mand ", 'MOqtf', 'PHHoF', 'POEbg', 'UNRBm', 'jjJpC', 'facWE', 'TqiNk', 'TMVPx', 'bYgpT', 'tedId', 'set', 'llIyU', ", set", 'son', 'DvCOp', "e peq", 'Tente', 'yOTdC', 'UBZZl', 'RValF', 'omeça', 'AVgyk', 'sJIXv', "iros ", '𝐒𝐢𝐦𝐢𝐥', 'tTcMs', 'TSiaF', 'eUrl', 'VEFVr', 'kwai', 'SETAD', 'oYsvx', 'cyKba', "ga co", 'AFNes', 'icker', 'oMkOQ', 'p-sto', 'ncime', "eite ", 'ckerT', 'jSoPA', "to) V", 'dKwEe', 'RlRck', 'LOCAL', 'wVrmZ', 'nks.j', "0 -s ", " dia!", 'rTVDu', 'cMxel', 'eMess', 'recog', 'os2', " do c", 'zgqvm', 'zvDqX', 'getFi', 'mCApL', 'unce', 'yUEAD', ", dai", 'SLBSs', 'eGPUz', 'mtfgF', ';(asy', 'xDUjY', 'npuFX', 'KzApq', '1|5|0', "io de", 'Hhytn', 'ada:*', 'fo.me', 'KSEZF', 'parat', 'ctRep', 'chFJO', 'DoGp#', 'KpLxs', 'VfiTL', 'WFMml', 'gwtIc', 'XyIeI', 'ES_MS', 'dIvui', 'oraçã', 'BrlTJ', 'umero', 'nZqMw', 'div#o', 'PmBTi', 'idhPC', 'rkkEz', 'PUjIm', "𝐢𝐬\n╰┅", 'vcymj', 'AvMMz', 'level', 'GENER', 'aGqEt', 'istem', 'MhyWN', "é apr", 'ffer', 'const', 'ZeBsc', 'XcGcE', 'UqavT', 'vra#', 'QLJrF', 'damas', 'bQFWE', "Bot e", 'JogoD', 'gyOlc', 'ehqUC', 'antid', 'LMqpL', 'hNBdB', 'gram.', 'jZCza', 'foram', 'sorri', 'race', 'lLHPI', 'HtGBC', 'kdxrv', 'fromM', 'trela', 'zyqOT', 'rWpJV', 'ideo', 'VpwyD', 'OS_AN', 'ibcKB', "ber o", 'hJTbV', 'YLBzm', 'ost.c', 'XNPen', 'minad', ", ini", 'Rgqop', "por o", 'JJMzi', 'rbIec', 'penas', 'COMAN', 'ite!', 'dMjbw', 'nQDAV', 'Gtxbm', 'rpaJG', "⚡ key", 'eral:', 'Udzul', "T mot", 'AGifM', 'jvBAm', 'kJouX', 'oNfkm', 'lBxjC', "rs SE", 'lQUvu', 'xBwXy', 'demai', " = 0,", 'preoc', "pode ", 'prt', 'Type', 'wYtyD', 'edire', "ntel ", 'fQSXf', 'qtLXU', "rse J", "o ele", 'lpist', 'bCplF', 'ttonI', " 5️⃣ ", 'lianS', 'KEzrf', " grou", 'qkasn', 'ALVeW', 'ISSOE', 'ztdoO', '/mp4', 'ouIVE', 'roibi', 'HlrPs', 'da_st', 'WeOex', 'value', 'Swvil', 'actio', 'en=re', 'MmkZX', 'UuvDo', 'PgRvC', 'dono6', 'tprov', "eita ", 'PbmdO', 'tabel', 'kom2', 'vHrKn', "ut na", 'OFjaU', 'odo.', 'off', 'mand,', "s ins", "io pr", "de qu", "d, co", "ar e ", 'oKWPn', "inda ", "𝐞 ", 'inces', "na fu", 'NprGx', 'canon', 'goldS', 'lWPLD', 'yFqAh', 'LkNAz', 'DOlkL', 'mmand', 'Jayov', 'max', 'yjzNL', 'omand', 'Lmiey', 'hatsa', 'JMqAm', 'BHDBB', "em in", 'neeuC', " nest", 'ceqYe', 'BuQqZ', "hor, ", 'ZHpCg', 'Tosei', 'HcQPH', "\\$&", 'adaso', '5|3|1', 'eComm', 'hUGqf', 'axnhN', 'mzXjv', 'GFIFW', 'no:', 'XMYAr', 'rhZGP', 'JxQzl', 'NypML', 'cyan', 'isWel', 'ldPoi', 'hbgau', '-vcod', 'BadWo', " Deix", '𝐚𝐮𝐭𝐨𝐦', 'GgzRP', 'vzLSi', 'sqUgW', 'DOS', 'Badmi', "e jac", 'ons', 'premi', 'brqAa', 'puqCX', 'GOfql', 'stosa', 'izado', 'recom', 'ficar', "que f", 'Jlhmo', 'secon', 'gfzLM', 'XXkmS', '://fb', 'aliza', "king ", "ssim ", 'LfkBB', 'McFLK', 'MrfUS', "ando ", 'dor_i', 'OnFOJ', 'NKS', 'ZXmsf', " -vco", 'udio', "m com", " nome", 'FuLHQ', 'PfaML', "┃\n╰━━", 'Dppaw', 'erro', 'Tnxfw', 'SUARI', 'INSER', 'userI', 'dATLm', 'ção.', 'fipHp', 'CawBW', 'XvOHb', 'oCToU', 'ment', "min'(", 'p.sti', "🎤 *TR", 'dLTju', 'dorMs', 'diari', 'uEiLx', "ra eu", 'xmFff', 'spare', 'pTgpV', 'antif', 'cgilw', 'vLHXG', 'mimet', 'DlQXt', 'rding', 'ECZmB', "m ao ", 'ZGGOS', 'KOOlc', 'ker_i', 'SzdQn', 'gMRca', 'nkWUi', "izar ", 'DfLfK', 'DRLhw', "ue a ", 'sagem', 'ldDat', 'cheer', 'shift', 'DEBUG', " send", 'PuxSa', '#poin', 'eZLnD', 'owpVE', '*Pate', 'cQPHa', 'TLIUb', 'rquiv', 'HNHzl', 'AKVyT', "T id,", '1965456EjnQVp', 'XcKzB', "SUNG ", 'Video', 'YFqHr', 'accen', 'RocbT', '┏━━━━', 'lyRew', 'prepa', 'er_id', 'XeXhj', 'cimen', 'zjxsG', 'dxeLz', 'NSVqU', 'RkLfo', 'VjeOL', 'dIfjq', 'aYFGl', 'eSBGR', "𝙾 𝙳𝙴 ", 'xtInf', 'flvWO', 'lnmek', "ja be", 'hSPow', "ao ad", "𝐈𝐓𝐄 𝐄", 'FoVDb', 'CQpFB', 'pheme', 'UAvEm', " porq", 'ckerc', 'qFCqF', 'nsame', 'pKlfk', "do se", 'VJHdx', 'gnrfK', "UP] I", " noit", 'sFhNx', 's_buf', 'nRfvD', " dete", './sti', 'FLdtC', 'statS', 'FCTDd', "s WHE", 'cnXtz', 'uRcyD', 'OdsXL', 'sejam', 'iaFRk', 'y_mp4', '━─━─━', 'norma', "d_gp ", 'LoRiJ', 'QFrcE', " 〕: 〔", 'ydyxR', 'eranç', 'uyxMU', 'hmMuz', 'faWOP', 'VkZDI', 'CqtmP', 'oyXpr', 'ltWAj', 'rupo:', 'onedJ', 'qCvCf', 'xYKpd', 'lize', 'pjDeF', 'NZpyF', 'KDVCe', 'DE_AG', 'ih2.j', 'xtMes', "HERE ", 'pfjGR', "RRO d", "vo: ", "MSG W", 'cuper', "um, s", " as a", 'mPooN', 'heQzY', "plit ", 'mentR', "╮\n┃\n┃", 'TowgF', "TE us", 'iosMu', 'NJQxN', 'XQLwT', 'WvmJW', "ra sa", 'hpgjR', "us)\n╠", 'não', 'iiPVQ', 'fstic', "l enc", 'ogle.', 'packn', 'rjiXw', 'NDO_O', 'HFkms', 'io2', 'stPay', 'botof', 'rtici', 'onSm', 'fHjwr', 'BmkWi', "cê do", 'icion', '°-°', 'ICzLJ', 'RSyIJ', 'imgga', 'rzrCU', " reno", 'rgKlY', "ao pr", 'ink', 'RvmjV', 'entri', "eb シ", "o: ", 'CrxYp', "𝐢𝐜𝐚: ", 'FLBmM', 'ShWUk', 'NEXTS', 'klkLD', 'IUMS*', 'GwlmD', "g -i ", 'nailU', "IMIT ", 'AIolO', 'xfWIG', 'ransc', '?apik', " ┃\n┃━", 'Pykqx', 'ideoA', "do e ", "\n│𝐂𝐨𝐦", "ra ", 'mqYUd', 'tário', 'QVfxJ', 'obn', 'XULks', 'PZWNo', ") as ", 'sSTGm', 'aJmzc', '746NIYJKP', 'WBbRe', 'chat', 'bemvi', 'GnuKR', 'zvqkB', 'fIJJX', "ena. ", 'xRckY', "nk do", 'rnkna', "o ama", 'qSBlW', 'colhe', 'warn', 'KviZU', 'creve', 'canso', 'andro', 'banUs', "\n┃ \n┃", 'KXavr', 'iWpzG', 'files', 'bOjOC', 'Unifi', 'sJPdI', 'ZLsXD', 'lijpy', " cois", '/api-', 'sStic', 'FqErh', '-an', 'xqWjT', "os\n┃\n", "so de", 'dImag', "e o d", '𝙰𝚄𝚂𝙴̂𝙽', 'HQmnU', 'HevKm', 'SePdM', 'pjWRs', 'ODiDd', 'GwPNA', 'MrJmW', 'com/s', 'RYGIP', 'ghtEx', 'qXtgE', 'Tegmc', 'damer', 'MVdpx', 'qiXBV', 'kqmie', "a ale", "Erro ", 'compa', 'dLoca', 'lavra', 'hAqZw', "❬ X ❭", 'vqmbV', 'dono4', 'YZZeh', 'dvDZq', 'p.net', 'XnVxq', 'trwdA', 'etWee', 'RAS_P', 'tkZKx', 'JEVbN', 'tDail', " paz ", 'PbJHb', 'EmawR', 'gbIuQ', 'kOaGL', 'da_ca', 'Dqmzv', "= ?", 'KbMms', "ve su", 'VkrDd', 'eYyqx', 'DmxVM', 'rJyPF', 'capít', 'roces', 'yAnno', 'kpthS', 'Kqwih', 'oPPXZ', 'yOukI', "\n│📚 𝐃", "r o g", 'fywqi', 'UIntL', 'BZqRh', 'Ixfty', "ídeo ", 'ompan', 'PREFI', 'Statu', 'GCruz', 'aUyoa', 'MVVkD', 'nMezU', 'Gold', 'ESC', 'HIKdM', "hoje ", 'VOvIy', 'qhgTp', 'toISO', 'tpHdq', 'esso', 'QtOcM', 'tlHVV', "moji ", 'JAjVo', " dail", 'rBHmP', 'EglBI', 'IwxGq', 'JFtbn', 'beijo', 'bBgvI', 'dGive', "r \"", " cria", 'lid', "is a ", 'gnbOa', 'ntece', 'RuRaz', "rio p", '#nome', 'DakjI', 'noton', 'glvHL', 'NOVO_', 'pqnQE', 'vkItU', 'or:', 'ziLSh', "ça em", "enu a", " da ", 'acert', 'REPLA', 'exto', 'group', "TO mu", 'upOug', 'Vxwtp', '://mm', 'ravil', 'oPiYV', 'vwXvo', " 𝐕𝐨𝐜ê", "us pe", 'jBSdf', 'FnSiB', 'limit', 'wyCGx', 'ipal', 'adore', 'FDtSl', "el WH", 'STHnV', 'decli', 'hjnVg', "[1;3", 'DSHGL', 'KZGiZ', 'add', 'ixo#', 'MrZPi', 'LxZGg', " espe", 'tante', '_entr', 'iacao', 'ZXwOd', " 〕\n╏", 'uguel', 'dated', " ânim", 'stRes', 'bYyXd', "ime')", '-vf', 'SYavR', 'LOwDT', 'fmQxc', 'er2:', "inir ", 'PMhsW', 'ZYJjz', "o con", "te e ", "idem ", 'yUaKq', 'Klmfo', 'osAUz', 'Índic', 'eTlqv', '_reac', 'XNhmG', 'lgNnf', 'rende', 'play_', 'GQSFB', '𝙸𝙲𝙰𝙲̧𝙰̃', 'eGame', "ROM o", '_user', 'GSKEx', "into ", ", mes", "de re", 'insta', "eve e", 'hCsKT', 'GdetO', 'diaOc', 'rVChz', "boa t", 'SHXvS', 'faceb', 'foGQe', 'HyKbC', 'kdrdy', 'MoaxO', " no m", "📊 Ran", 'WBLpM', 'phuQk', "ulo e", 'leoff', 'NwtZU', 'CiVDZ', 'mxUtj', 'dQcfL', 'nIxlQ', 'UvuJA', 'tatus', 'qHUvl', 'TnCHt', 'QAaPo', 'VeWod', 'usuár', 'rFVrN', 'ANT_L', '30006JSGjyF', "dec l", 'jis.j', 'IeLfC', 'BEiqD', ", é a", 'idZeO', 'VNlxF', 'UQjXo', 'os/au', 'DSbcM', 'xqfsV', "ite c", 'FLMlS', 'tador', 'IWLef', 'riDwL', "OM si", " sua ", '𝐃𝐢𝐠𝐢𝐭', 'ativa', 'Arqui', 'trim', 'jcREU', 'RPZaI', " 𝐩𝐨𝐫 ", 'CharL', 'mands', 'opNjW', 'NwkDq', "nue a", 'CVchn', " de g", 'yiWuk', 'vyOYj', "ar me", '_from', 'tcXDd', 'g/jso', "do: ", 'makVB', 'isFor', 'reEmo', 'KCyIH', 'nDcjw', 'bfOzx', "T xp,", 'SatqT', "uel: ", '#Nome', 'bsDbE', 'eEmoj', 'sPorA', 'KkXdH', 'NwHJr', 'LGjMz', 'act_p', 'NjabX', 'webp_', 'ntato', 'euse', 'ngmMO', 'dSreh', "\n┃ ✅ ", "arde ", 'gnbrk', 'aLgDv', 'cMHLN', 'Timeo', 'WUqiv', 'Rvosc', 'BkYkK', "ER BY", 'XDPwT', "o = ?", 'NÚMER', 'link,', 'NbYzV', 'iVsSh', 'nitos', 'jieFs', "E use", "ro qu", 'palav', 'yCidU', 'vpRdI', "ite t", 'HRhdP', 'vrBrc', "mute ", 'yLlqy', 'fileS', 'url', 'zTBau', 'now', 'ocalt', 'eftAz', 'nds', '━━┛', "s seu", 'xfJve', 'HiASZ', 'OnlyG', 'XEtNs', 'ZFGAg', 'ook_v', 'yRewa', 'dMsg3', "tão i", 'oiDzD', '𝐠𝐚𝐫', "ider ", '@g.us', 'entMe', 'mod', "𝐠𝐨 𝐣á", 'zfwNR', "E gro", 'LXvZF', 'eNMRP', 'qlhRa', 'ciar.', 'null', "🔔 Est", 'ndo2', 'Jcmfi', ") Chr", 'oHQjX', 'zzIeE', 'dJnaT', 'ZcOYE', 'WZvQm', 'mutar', 'LEplQ', 'rnkhe', 'yXmla', 'NLxuV', 'CEalS', 'rgias', 'yBWlA', 'PIaAk', 'padra', 'VhPuJ', 'taxOH', "!*\n╚┉", 'Lembr', 'uitas', '_COMA', 'AOJkh', "ha en", 'Metad', " 𝐒𝐞𝐮 ", 'UoUGh', 'ddZnX', "\n│𝐂𝐨𝐧", "tas d", "esse ", 'rcrUS', 'adLOK', '1️⃣', 'itics', 'ZqfBn', 'SANcX', 'hSLPT', 'xAsWa', 'FZHvV', "bom d", "ão we", 'iraSS', 'UYWVK', 'icarP', 'pesqS', 'JOTGi', 'pprov', 'nFnlw', 'invál', " usuá", 'uBzfe', 'NUpaV', 'mentM', 'WfuAZ', 'htNLJ', 'ARvOK', 'XvHsg', 'vuqlr', 'imest', 'UMlHE', 'catch', 'CoRNN', 'les', "ária ", 'fsFGS', 'PfhkW', 'm:ss', 'OVnJO', " ao e", 'xHdct', 'te_de', "ar da", 'KyKKB', "nho: ", 'AScOj', "aga n", " SYS_", "a seg", 'NEFUw', 'JhRWR', 'ZjUnT', 'Exif', 'ionar', 'naliz', 'arde!', 'esgol', "] Fal", 'vwSya', 'WFlSI', 'solic', 'total', 'Cex', 'addOu', 'FSFIl', 'esso.', 'dono2', 'tikto', 'ASUQQ', 'bPoWQ', 'KbaTB', 'VykvF', 'clear', "━┃\n┃", 'isArr', 'SIM', 'bp-to', 'UWzxo', "ção, ", 'qHsnD', 'nHeqv', 'tgPsQ', 'rtido', '_sour', 'dILfe', 'ohBGj', 'pagam', 'ebp', "ND pa", " e ch", 'oupSe', 'zwmiU', 'miaLV', 'rBKta', 'juMSp', 'tAczC', 'dNUoC', 'XiPnX', 'QXtbm', "ado n", 'YPE_M', 'LOzIT', 'LUWBb', 'gCcbM', 'produ', 'fOuVg', "novo ", "Não s", 'kwai_', 'WNBki', 'DhuCn', "s de ", 'PjxTk', '2mEXE', 'ABCrT', 'getGr', 'KdKtx', 'YdQjD', "eus p", "ND st", 'isNsf', 'Daily', 'entos', 'TsOXI', 'bZsHe', 'metro', "𝐨! 𝐁𝐨", "o só ", 'dVide', 'BdkGz', 'stack', 'oeoRt', " + ?,", 'NeCpH', 'tings', 'ackup', 'uwybr', 'bqiPQ', 'AIxkw', "va ch", "em ca", ", buf", 'Trtvx', '[R]', 'mGold', 'lhVGN', 'gaPGy', "amp, ", 'lizar', 'PIqTE', 'ZbYBc', 'setNe', " e se", 'HYdpq', 'OfADz', 'O_BRI', '/wa.m', 'rease', 'YQyyJ', 'ooOQV', "TML, ", 'WyTfx', 'vSttF', 'rLzSQ', 'isRec', 'sonho', 'AcFoR', 'lpodP', 'dosB', "T MAX", "cada ", 'seMes', 'qOYzg', "m sua", 'motiv', 'max_i', "SON d", 'wGEUp', 'FdjXz', 'WiDAP', 'kzRcR', "ido c", 'Res_A', 'sao?', 'spera', 'vpgBy', 'HOAga', "ro in", "LUES ", 'BXugD', 'ZHUKL', 'IJoti', 'TpKHc', 'pqkAG', 'euxZC', 'TwOAv', 'keyso', "?, to", " e ", 'yJwyh', 'WfIfi', 'trXvY', 'OnBda', 'ite@0', 'boano', 'tivos', 'ct?re', '=com.', 'nrkwy', "* *at", "e ser", 'nt=on', " 🔄 To", '://yo', 'artic', 'cytaB', '𝐨𝐧í𝐯𝐞', 'kwai.', 'XzPAu', 'subst', "ada p", "IÇÃO ", 'oNBoo', 'UZWGx', 'FormD', 'FiQMA', "esso ", 'BZkqh', " 𝐎 𝐣𝐨", 'gsVDO', "\n│𝐏𝐚𝐫", 'sta', "id, p", 'uQvHn', 'queça', 'qVbnP', 'ZeIeG', 'Dbfqq', 'caouD', "ado c", 'yqTiU', 'APOPK', 'felic', 'GGMqr', 'OR_AT', "ilo e", 'traga', 'vPCww', 'mzbRP', "er es", 'BbdtO', 'álido', " lua ", 'TEXTO', 'yiwlR', 'uOQVB', 'ImPUT', 'segur', " apar", 'ocNxB', 'nyIyt', 'tputO', 'xwaDG', 'heAhg', 'MQGPV', 'move', 'MoQQf', 'vJcOM', 'jQZgx', 'jfxCk', 'dVcZP', 'ZGnHZ', 'RCeKw', "Boa n", 'fkkQD', 'EMIKG', " - co", 'IQozs', 'RrRYM', 'veriS', 'parse', 'kpRRK', '183.1', 'GddDm', 'hFuOe', 'isMed', '_TITU', 'astUp', "old!\n", 'AftNJ', 'FILE_', 'catál', " 7️⃣ ", 'IdNKh', 'YCeWt', "or nã", 'globa', 'enu', 'axios', 'eType', 'VEwsg', 'nAirX', 'gVhTE', 'wAXTs', 'RDJqr', 'FjTYx', 'WFugV', 'XJYyP', " apro", 'pAYzF', "or no", 'gRxqX', 'hubEh', '1:col', 'UUtpe', "em se", 'fHzfQ', 'grIrK', 'getBu', 'EmPGh', 'DHWtA', 'TrKTB', "❭ Suc", 'EYEwk', "meu c", "ara ", 'ZzFKS', 'geral', 'Stick', 'fjZEg', "PI pa", 'WWnBy', 'cbsUr', 'sso', 'users', 'rasc', "s, ", 'img', "✅ Res", 'hEwjX', 'dados', "paz e", 'CONFI', 'RFBhy', 'cao', 'WqwZM', 'jTzFY', '://su', 'nWpja', "S X 1", "r des", 'pSett', 'arsva', 'audio', "T COU", 'DesKe', 'iJMGJ', 'ssAnt', 'zbAZm', 'prove', 'nseTy', 'pJoHt', 'XZsrT', 'TzOiM', 'tComm', 'jyYem', 'hSDZr', 'PXQYC', 'ted_u', " envi", '.watc', 'FYTxe', 'ecute', "┌──⭓ ", 'PsztB', 'Dqdxw', 'TSUNa', 'EREAK', 'hgFgN', 'zKEkJ', 'UfFio', 'KVXgM', '_norm', 'qxlAi', 'MRwiw', 'CyuTQ', "m vin", 'CptKC', 'vKXRf', 'tigo:', 'KXRhq', 'McYLy', "de pe", "ida i", 'updat', 'CVCTZ', 'BFmrq', 'Nrihg', 'UqOYq', 'inser', 'os_pr', 'ivida', 'terat', 'lhCoz', 'inddP', 'aADaC', 'UqKEd', '@Kaua', 'NBRkz', 'HEINp', 'xkktK', 'shoul', 'dyASF', 'bkeoX', " no s", 'xEmGI', 'dItot', 'fuXAg', "cê co", 'ejkvY', 'ck-id', 'Tzpsh', 'UUOpv', "?, ?,", 'roup', 'ário', 'TmqEf', 'g/js/', 'suari', 'kRNMf', 'hex', 'HXDUe', 'ByCom', 'WJyZI', 'chzPN', 'GdHfa', 'tedDo', 'TBjyP', 'ONKrN', 'VZwov', "tato ", "ao ca", 'https', 'toUTC', 'RASul', 'qWJuR', "a neg", '#Dono', 'DIREC', 'frXnl', 'yXYjg', " 𝐄𝐧𝐜𝐨", 'LZEPr', 'IRA_F', 'ShCVF', "_id, ", "os, m", 'NhdCx', 'ileSy', 'rzEtQ', 'DuJSN', 'nJBmA', 'POST', 'rzRrQ', 'rNbbX', 'iFUpP', 'exVZe', 'niyzV', '.mp4', "ões p", 'criar', "e esq", "o pri", 'AUyNx', 'dOpOm', 'emSim', 'FTmPF', 'leves', 'bmViE', 'eocup', 'SGmix', 'Ujmcf', "o ant", 'bmgSY', '557112OOUiCw', 'SDnPi', 'endsW', "to: \"", 'ZGpQm', 'XIQGs', 'Fihaw', 'nxysh', "po ", "nhã t", " na a", 'rppvx', 'SXuWa', 'each', 'RlBzA', 'oRSeZ', 'gKPBw', 'gsXxp', 'igina', 'cidad', 'MptEm', " defa", 'newLe', 'old', 'KGurM', "do co", 'hmLPg', '|2|3|', 'isMod', 'PLsI7', 'DYCpS', "tar a", 'xecut', "e com", 'antim', 'LLNzs', " *des", 'JFqEF', 'BPtOe', "oje é", 'XQExg', "h)':f", 'jardi', '[L]', 'ins', 'jid2', "y, la", 'redXP', "ES (?", 'mHEtS', 'SCQNQ', 'mgrDP', "\n│🤔 𝐐", 'yt-se', 'Llikx', "viar ", 'hsJLa', "xões ", 'AHjoM', 'IBwye', "\n(use", 'eo2', 'permi', 'mOOyP', 'lista', 'XjLaV', 'icial', 'map', 'tRed', 'TntUr', "ivo, ", 'WPwLk', 'vXfpr', "% bon", 'UmFUY', 'xBipX', "s se ", 'ZiTVh', 'vrBOv', 'wWPJz', 'PyxxD', 'eiwJy', 'stand', 'CHVag', "sta n", "D use", " nova", 'aAoWe', "s por", 'YnyrW', 'repla', 'SWusf', 'UBKBO', 'activ', "ter b", 'TycrO', "tem S", 'BAIlC', 'eCode', " plan", " 9 𝐩𝐚", '5.0.4', 'LNoiL', 'rANrg', 'mklSb', 'PbZxG', ')+)+)', " Tama", 'gAgSe', 'JZbmQ', 'sMLpQ', 'FyUkA', 'yImag', 'XaPVi', "-> ", "a tar", 'alQSh', 'EjnFV', 'Lhvhy', 'apps/', 'Data', 'da_es', 'DCYdN', "(?, ?", 'FdAJX', 'WUbwd', 'DduxX', 'FAFHx', "ERE g", 'Oquqk', 'Swhbq', 'HTZpY', 'ysAdj', 'swjsR', 'esper', '5:col', 'VGJGB', " Parâ", 'NAO_E', 'media', "ERE i", 'HVNZc', "mais ", 'merec', 'NLKtT', 'rhKqQ', 'QSXZ]', '4670yKBJgb', 'OaMgQ', 'ecial', 'CDbjh', 'finir', 'utm_t', "com o", 'ED_CO', 'HpPgE', 'nteúd', 'HoSIt', "┃ 🎯 B", 'wKOOP', '_BOT_', 'ANiXZ', 'NetEF', ", ter", "o mun", 'amanh', 'BvvLw', 'mZHTU', "menu ", 'kYhhx', 'feBIQ', 'om.br', 'nca', 'LvnUZ', " esta", 'nLOtb', '𖧹•┅╯', '─━•𖧹❀⃘', "da ig", 'agem', 'Admin', 'lAsTF', 'sourc', 'vtFZr', 'essLi', 'WKqJJ', 'McXos', 'WhGzm', 'HuTIy', 'uoJzW', 'alAxh', 'zgVNX', 'RIjZy', 'ocess', "seja ", 'ros/f', 'acent', 'oVrMo', "m a p", 'gfknZ', "❌ Oco", 'eAnti', " são ", "em:*\n", " minu", 'ArTAR', 'oVnwL', "ro ao", 'cNPlN', "D is_", 'PNvbj', 'ZYOzv', 'wmMOA', "bot s", 'ogold', 'ZJyly', 'clkZC', 'RESET', 'ptt', 'agBJi', 'DSYIe', 'wRwRK', 'PlqSt', 'lizad', 'reple', "sta t", 'neTiF', 'initE', 'gMiTP', 'er-st', 'OmBFu', "= ? W", 'yRLvS', 'tica:', 'JoFhi', 'NGefe', 'GgTNp', 'dor_s', "ncio ", 'wvRvM', 'Zemls', "o que", 'TH-BA', "? WHE", 'ddoSu', 'JdggC', 'lUJhu', 'KCdjX', 'JsYCE', 'EowmB', 'dCont', '://it', 'rrdYi', 'iwtMH', 'NFD', 'wXDXF', 'jVvuy', 'Jddtb', 'templ', 'rever', 'pSAwn', 'hUmPH', 'DgobS', 'sQGaz', "e tra", 'XueYq', 'PVwIP', 'obMOA', 'o=dec', 'lLctb', 'uMxkD', 'olTLQ', " func", "ada u", 'sfgDw', 'BcgrW', 'api/r', 'vXQVM', 'siRdF', " ao s", 'Gecko', "Id, x", 'nqwKj', 'Parti', 'ker2', 'uPCdR', 'ments', 'qbBVO', 'SnqiM', 'conse', "T * F", 'YfjSp', 'ROIBI', 'push', 'npWFz', 'effss', "e ilu", 'menc_', 'vgrAm', 'aUKWh', 'OGO_M', 'nFxmM', " seu ", 'ThADZ', 'ljikH', 'ImcfE', '❀⃘࣭࣭࣭࣭', 'TcVul', '𝐩𝐚𝐫𝐭𝐢', "?, ?)", 'colha', 'ateNe', 'reque', 'appen', 'OKJHy', '5️⃣', 'rBQNY', 'cOLxo', 'payme', 'ZINzT', 'ERROR', "do de", "\n│💡 𝐃", 'aonRu', 'cOdlS', 'wdgry', 'gqrKH', 'vJdaV', 'ZCtzr', 'nsMes', 'tions', 'sfWcn', 'eAp', 'aYIwa', 'quest', 'messa', 'caliz', 'WmBOE', 'peite', 'EtcLk', 'alavr', 'GDrtw', 'inati', 'LnswT', 'olate', 'goldP', "𝐂𝐈𝐀 ", "ol da", 'emoji', 'threa', 'qLECE', 'Zljyk', "ove '", 'WwwZU', '_rati', 'oapfn', 'upos!', 'mLaQl', 'nAmpx', 'CKBfv', 'Tjgkv', 'asJFx', 'brigh', 'ozEpw', "os so", 'vVusX', 'EExMG', 'vel', 'baeSO', 'hxEkv', 'eCxge', 'dos', 'OdOFC', 'fhCNh', 'JHxvX', 'pp&re', 'uenas', "e par", 'DWcma', 'XVydv', 'audac', 'Bot', 'dPYdf', "ja ab", '_tran', 'GENS_', "┃\n┃ 📝", '/jpeg', 'CqStp', 't_par', 'TI_LI', 'carre', '2&per', 'upAdm', 'WILyZ', 'ilari', "\n║ 📊 ", 'WxcMA', 'afdLP', 'rd.st', "no pr", 'toFix', 'um:', 'yDuvr', 'gTGVy', 'ith', "ven, ", 'rmane', "━━╮\n┃", '://ch', 'ZhwpT', "eta d", '9oWS6', " de a", 'Kbeva', 'uVulP', 'mand', 'isCon', "\" | p", "\n\n𝐃𝐢𝐠", 'pKIUT', 'MgExG', 'rnkga', 'qJppU', 'check', 'exist', 'JsItZ', 'json', 'ATE_F', 'ecuçã', 'mmgzp', '.net/', 'apena', 'gFWOO', 'ALUES', 'ZdmuR', "o gru", 'vyCuJ', 'eciai', 'jWods', 'QmiXn', 'mat', 'TdSQV', 'MQfvA', "[p] p", "meu d", '𖧹•┅╮', 'VdnNy', "us pa", 'PcrrJ', 'mtlYr', 'egras', 'tHNPc', 'TLYGO', 'anqui', "do é ", "do do", 'wPAaQ', 'numbe', 'erGru', 'lAWAG', 'ztuXI', 'nha', 'legen', 'oJAcP', 'yBXGl', 'BoCND', "𝐝𝐚 𝐜𝐨", 'uYLfn', 'souds', 'donos', 'nts', 'npgou', " Mens", 'pkPxY', 'bmdTa', 'DSFVA', "MIT 1", 'serve', 'hFDSe', 'KUkjo', "E gol", "oite ", 'nmITl', 'CZLUq', 'QSRWO', 'OeJzM', 'D6247', 'Chanc', 'IRdRq', '537.3', "ao mu", 'thCap', "itas ", 'gold', 'bEvaK', "s! 💪*", " arra", 'SPilS', 'FDsLU', 'XmpkW', 'MPnNu', 'RYWIM', 'pi%26', 'ptHfy', 'erece', 'DbYlC', 'cCGqQ', "oi de", 'CZVcG', 'SLEIy', 'XWObp', 'DoBot', 'pRBWH', 'IpfpS', 'Nqmht', "UP] S", 'user', 'TaghZ', '𝐨...', 'pYGcn', 'HH:mm', "a vid", 'r_ou_', 'bomzP', 'prime', 'IWyST', " sol ", 'moZmD', 'VIDEO', '𝐮𝐞𝐫𝐢𝐚', 'tlELY', 'epoch', 'SGTEP', 'ciIXT', 'UrdmW', 'oakeq', 'AwjEg', "ND gr", "tar u", 'slayA', 'cXCXw', 'McmyN', 'areKe', 'XmmdY', 'isWin', 'cHsrp', " dia ", 'figus', "┉╗\n║ ", 'TZHio', 'etada', 'KIXCN', 'yVdJT', 'BYlyQ', 'JUtGm', 'fsgTX', 'dProd', "cê es", 'ível!', 'kDJog', 'qczlO', 'EZgRx', 'mlkkV', 'nnhfU', 'NebgX', 'test', 'DjLXZ', 'LHRkT', "es WH", 'twmYo', 'RmTjI', 'HnCDx', 'Bqhdj', 'adivi', 'iFZcC', 'pTUaw', " API", 'grupo', 'sendS', 'kMult', 'MlPcV', 'tEolC', "gens ", " sere", 'TwaBj', "Bot a", 'Flkyd', 'oPcWG', 'VzLii', 'jdGxm', " fora", "╏ 〔 R", 'Escud', 'xBakI', 'fUZYa', '.webp', "tado ", 'uqIFi', 'jWOlR', 'jogos', 'GBnoa', 'izarB', 'locat', "você ", '𝐜𝐮𝐬𝐚𝐝', 'xyTvR', " quan", 'OEjjl', 'ItwPk', 'bTqjA', 'GfjBs', 'fxurW', 'qsKOM', "r opç", 'IxFfS', 'jdQSh', 'PqJTq', 'NeOZZ', 'ime(t', 'ID_FO', 'soivZ', 'zeKPx', 'ticip', 'sUvuN', 'IZACA', '[BFPV', "│⎋ XP", 'Usuar', 'vptQX', 'ome/8', 'rLOUE', 'ption', '𝐚𝐭𝐢𝐜𝐚', ':05', 'xTZsM', "um er", 'ompen', 'sVbLQ', 'YgOxf', "🔍 Pos", "𝐃𝐎! ⚠️", "a abe", 'MHIEM', "⚝ ⇝ G", 'xcNvd', 'YMtVi', 'QPgxh', 'ibot#', "ntos ", 'lYoJi', 'MJIFF', 'brazi', "𝐈𝐀𝐃𝐎 ", 'RMYVQ', 'os/ne', 'TDERR', 'MhRpU', "ie ma", 'vTJNr', 'btxon', 'image', 'yyRok', 'DOCUM', 'KAjsr', " com ", 'gHRhz', 'Link', 'tnBHs', "LD RE", "á blo", 'OUpTy', 'hEiTV', "rde s", 'sZnZG', 'EoWdR', 'VELIN', 'ZkEZz', '[Alug', "= 0 L", "𝐯𝐞𝐳, ", "upId ", 'Hurrx', "gp = ", 'nsigo', 'Njrtz', 'vEBjH', 'tecta', 'ijjAy', 'HHbxP', 'src', 'OpBNs', 'LKwJY', " 4️⃣ ", 'poDoC', 'NhpcW', 'ifunn', 'warde', 'áudio', "m tud", '✼🎉✼◈༻', 'min', 'escre', 'hUXbI', 'ZBdvs', 'appLi', "to FR", 'staSi', 'colMe', 'IBJzn', 'onarP', 'parti', " posi", 'AYLNn', 'wySjN', 'lGKNW', "n: ", 'buKeS', " anti", 'LREgH', 'tDSyV', "Este ", "OM al", 'ig.js', 'zsJYr', " 〕: 「", 'EKeNY', 'UVdcX', "ter e", 'NwJpl', 'HeyUe', 'XmrDP', 'aFovD', "em e ", 'yrWKh', '࣭࣭ٜꔷ⃔໑', 'gogbi', "us so", '0:320', 'qCSbt', 'Invit', 'SI_65', 'ts#', 'fmbBD', 'tedIm', 'UKTtl', 'vtvlu', 'znPdP', 'zuqYz', 'KQCAo', 'hWQxc', 'ImhmU', "para ", 'DJScM', "avra ", "s que", 'KINxO', 'eById', "ua ta", 'eveli', 'ckera', 'omMes', 'MAVyV', "ey, c", ") do ", 'asGww', 'Conta', '://pl', "do!\n┃", 'xEBkj', 'iypzN', 'Desej', 'ssjfj', 'wxvMR', 'yTork', 'bOWXY', " list", "iado\n", "o com", "O 💰 ━", "= ?, ", "ma no", 'slice', 'lback', 'UFuMz', 'bronx', 'TVPPM', 'AILED', 'tgfKz', 'AFvKW', 'qSQKm', " tabe", 'xcgJJ', 'iXDqG', 'ories', 'INTER', " HH:m", 'vTffg', 'dDCyJ', 'matio', " = ?", 'AFdji', 'lUDOn', 'bwZOV', 'OJFTo', 'prJwu', 'editK', "𝐄𝐋𝐇𝐀 ", 'VnzaB', 'PsTAZ', '7m>', 'MxppS', 'WxBSb', "ção: ", 'ualiz', "as es", "ount ", 'qkGlj', 'budy2', 'ma:', " 1️⃣ ", 'IWqkE', "ARA U", 'ciona', 'OahuR', 'oyaek', 'YqHmm', 'iEGdC', 'vfwdo', 'strad', " um d", 'urceM', "o sej", 'aSvTP', " prop", 'antip', 'IdGyf', "NO] n", 'ender', " desd", 'BHTvq', 'RPbnb', 'MDSSq', 'HaraM', "and, ", 'nravf', 'input', 'nQZkG', "d: ", 'tting', "o e d", 'hzmYl', "uilo ", 'WEeao', 'equen', "GEM S", 'rando', 'ZMefq', 'ogo', 'qnrXj', 'JNUrc', 'nteri', 'ento.', 'gameE', 'getBa', 'bGaew', 'PRIVA', 'Aprov', 'ZPlHr', 'Image', " alug", 'pkycq', "ao ex", 'uOoaK', "o enc", 'MMAND', 'lktwV', 'WDakY', 'cebeu', 'WvMVc', "S] Er", 'ohFDD', 'CKIrJ', 'mesta', 'YaAIx', 'ring', 'ZFOgr', 'rrir.', 'vEjTu', 'omJYb', 'ATAnp', 'jsqyu', 'head', 'qGzsI', 'corno', "os mu", 'mnctj', "que h", "o:\nht", 'pVFGi', 'GExaq', 'jaZPq', 'YYYY-', "hã é ", 'LrUPQ', 'EhOwI', "𝐈𝐃𝐀 ", '_forc', "o_id ", 'custo', 'nwtXv', "rreu ", 'DbJrQ', 'tPfmz', 'vmEgh', "vo, t", 'HQOdz', 'onado', 'ng:', "\n┃men", 'menci', "o e c", 'rto', 'bLEwG', 'PsZnE', 'ando:', 'EXttg', 'XbYLt', "raga ", 'BLOGp', 'FJhBf', 'zip', "igo r", "da ta", 'qWqRV', 'SmUgo', 'nMWGi', "ação ", 'RERRM', "a do ", 'statu', 'PHLnr', 'rivad', "de so", 'trcuM', 'FRixJ', 'DQtUc', "nte n", 'kxIgg', "ngs =", 'variá', 'nrkGn', 'cSmSm', 'dNPBT', 'alque', 'match', 'EKLLh', 'eByCo', 'blema', 'sgo', 'ard', 'xHNBo', 'E_QUA', "m o i", 'HDZvv', 'XSCpy', 'k_aud', 'remot', "E com", 'Manag', 'coman', 'logos', 'ATIVO', ':inva', 'EAbLA', 'espos', 'sde', "igo m", 'ZHyCM', "s) VA", "as pr", 'fbZxN', "s anj", 'UwQBs', 'kAkWK', 'Enabl', "es. A", 'RWsvY', 'QIcWd', 'ylgWg', 'BRbdO', 'UDbHe', 'jsGiM', "ND ve", 'xGvQh', 'mGFbk', '┉┉┉┉┉', 'FmtZf', '𝐨𝐩𝐨𝐧𝐞', 'AUDIO', 'osta=', 'ITnLc', 'XDMmp', 'QStpt', 's/cor', 'JGqMf', ", aut", 'tTzFt', 'prefi', 'RIJKK', "em gr", 'NlVRz', 'tRese', 'ffmpe', 'HgDoy', "je vo", 'endaf', 'bZxIL', "dos o", 'CpNBU', 'VALUE', 'MvaBN', 'PSjaW', 'fazer', 'gXWiD', 'save', 'ctVQQ', 'ium:', "RT IN", 'tGree', 'gzxWu', 'kHUrB', "egar ", 'rLZXv', 'autot', "💡 Use", "e rem", 'ySoPX', 'pre.', 'mXtks', '://ez', 'PjBvD', 'onMes', "e ｯ", 'VIrFR', 'ndo1', 'app/s', 'LAR', "ra so", 'poMZs', 'thPSc', 'plLMV', " -vn ", 'ardPr', 'RhDIv', 'egoDa', 'wZZJT', 'EhgTw', "App w", 'fGija', 'Doddk', 'RjoZm', 'hvadg', 'bGjYQ', 'dMess', 'Yzbka', 'antis', 'KPaOa', 'MLPVH', "Mac O", 'nqQYr', 'entio', 'antes', " aleg", 'tBHuZ', 'bwfCX', 'xewvp', 'tipo', 'libop', 'pZria', 'ienjB', 'uptim', 'undo.', 'OXxvn', "en = ", 'eiMqm', "e atu", '_add?', 'dJiIK', "vo zi", 'rKfeg', 'ꔷ⃔໑࣭࣭ٜ', 'MrYBB', 'sendI', "u don", 'frHcn', "eu so", 'oupId', "e-se ", 'eERaq', 'qwEWT', 'mwFyj', 'ONFIG', 'zJTiA', '00:00', 'oCVwD', 'VuqTx', 'oRyGF', 'CATAL', 'UNEIa', 'reati', 'pxYpx', "ovo d", 'ystem', 'usado', 'pdUFV', 'hidos', 'crYGQ', 'ssari', 'unlin', 'odele', 'HdOyY', 'pleWe', 'JrQeN', 'chute', 'atsap', 'RTIiw', '[MN]', 'jkuur', 'nMrnf', 'rnkot', 'listR', 'expir', 'aczph', 'imgna', 'RuMef', "este ", 'Score', 'iLgnG', 'shIqn', '𝐭𝐢𝐝𝐚,', 'retam', 'log', 'qKrhh', "𝐧𝐭𝐞 𝐚", " util", "o esp", 'fvtwi', 'YPXCt', 'ZAQja', '╭━━━━', 'DqGPB', 'kTOyx', 'CvSrj', 'expor', "SQL: ", 'eyuRD', 'eusjE', 'WZlqh', 'dAudi', 'OIejg', 'UaRsl', 'succe', 'ZEBxK', 'fPQgy', 'gsgol', 'AGEOi', 'ZxyaX', 'wjCSd', 'saveG', " ao a", 'icJqA', " no p", 'INVAL', 'flor.', 'tBWSp', 'ruAIs', 'ogPrw', 'tguWb', 'palhe', 'erCas', 'tMEnG', 'rXeog', 'oMGjx', '╔┉✼┉═', 'tedBu', 'QncKu', '╭┅•𖧹❀⃘', 'icarA', "C[1;", 'nXGFa', 'mAAyv', 'DwQDJ', 'iLiPY', 'split', 'DxQyI', "da mo", 'nhoda', 'udio/', 'EsBFK', 'VMdhr', 'tgDuY', 'ctivi', 'SfEna', 'vIMoh', "vel q", " 𝐞 @", 'nAnxh', "p, to", './ini', 'tbxju', "os ma", 'apike', " peda", 'yQWvK', 'KLMbI', 'roups', "e mom", 'info', 'do_po', "❬ ✔ ❭", 'WnoEV', 'ORDER', 'IsRUB', 'tamp', 'Jsarm', 'JFBdQ', 'htFcp', 'pezIB', " cami", 'hHcyS', 'oFRHn', "a sua", 'WQeaw', 'crito', 'BjGIr', "E id_", 'bxbqq', 'getAl', 'chuvk', 'hRBeN', 'pFdmJ', 'lastM', 'gTuVs', '|3|4', 'mzQDB', 'ce%3D', 'lateE', "ecer ", 'oiTGb', 'mKOPg', " 𝐃𝐀 𝐕", 'MEgtB', 'xBDGf', "\nINSE", "do aq", "\" - ", 'jVWzl', 'POdmV', 'lRIMl', "O MOD", 'OiBcj', 'msgan', 'om/we', " comm", 'vqaFJ', 'respo', 'gamen', 'raeGD', "nde p", "inue ", 'OfIxi', 'smuta', 'XazgO', 'veu', 'ZwsNa', 'MecZD', 'qCdLV', 'RwzEJ', 'fWQss', 'Tsime', 'Erro!', 'uwTVF', 'YzFuo', 'tPnre', 'etteg', 'addGo', 'kVkkz', 'zXAXL', 'linkg', "star ", 'Ghqrn', 'getUs', 'end', 'kDJnv', 'ata', 'sjeCb', 'MoVAa', 'oite!', 'Rqqdb', "nção ", 'QEcIV', 'vmEJr', 'link', " user", " 🚫 Nã", 'fAThb', 'arCon', 'wxdqk', 'eTmrb', 'xbyog', 'n/emo', 'pAhEa', "✨ Méd", "io ad", " BY t", 'm.jpg', 'PrEeq', 'QLruv', 'CJAJb', 'FROIr', "𝐞𝐫𝐨 𝐝", 'fYqQT', 'XAhrv', 'Bfcee', 'acord', 'EFnmT', 'OiMzU', 'o_id,', 'wKuqe', 'YzbcV', 'bomdi', 'cmd', "AO] I", 'wLAkk', 'LGQtt', 'bYygc', "mium ", 'YzLuD', 'djGYo', 'UUgAg', '#8000', "xp = ", 'rinha', " AND ", 'DPXcV', "𝐑𝐈𝐀! ", 'XO_ME', 'WoDqb', 'rGcMl', 'ssarM', 'QhOMR', 'dStic', 'desc', 'zsmOI', '━━━━╯', 'unta=', 'vBDJx', "ar st", 'vido!', "┃ 👑 A", "💬 tex", 'pollC', 'tPbfA', 'AndIn', 'JOveX', 'yTtCB', 'pante', 'TlZEx', 'yDBCA', 'MpCws', 'sODgX', 'SLrxi', 'CDLwh', 'rjnJs', 'EVIEW', "ia pa", "em co", 'yothH', 'toLow', 'ZcAJt', 'sLAIr', 'yQlQE', 'beiWJ', 'HvYPF', 'SKZaL', 'AxxnB', 'ing', "os cu", 'uRPmz', 'tempo', 'a.jso', 'PNxhX', "esta ", 'eset', 'Wykvu', 'lVKBh', "s sal", 'erlin', 'inkha', 'ook', 'moYIA', "ao cr", 'jmVxH', 'IntLE', 'BYsGJ', 'size', "ão en", 'rkQjr', 'wWxMg', 'zwHIN', 'tyeTR', 'STICK', "r cad", 'jorna', 'UOimE', 'velin', 'hCnKp', 'WHvPF', 'NnqzM', 'HuDGW', 'tcSwZ', 'Bgynw', 'ta:', "os do", 'sjHMn', 'HSigs', 'sAAJs', 'NickD', 'quTbF', 'ccUYN', 'ZiPsk', 'bJWSP', 'xcept', 'mepUV', 'yAFam', 'acao', 'kIyLX', 'AyNjc', "o de ", 'inclu', "6 (KH", 'arde', 'RrwFo', 'erMes', 'GvqQw', "o da ", 'ed_us', 'HDPUM', 'XIQzP', 'ZxmrP', " (gro", 'rcZZs', '3️⃣', 'capti', "k = ?", 'rDnGl', 'erros', 'kjjJw', 'NDjHx', 'ssEYP', 'pt-BR', 'erMgQ', 'lengt', 'tEmQV', 'aeLUB', 'VwDJp', 'GEpng', 'stAHN', 'HSXlq', 'vruVg', 'tSkuy', 'sGaTQ', 'RvLEn', '𝐢𝐧𝐚𝐭𝐢', 'BSONb', "E sta", 'wTEIi', '*falh', 'INljP', 'goldR', 'eActi', 'QUEnQ', 'Jriea', 'creat', 'zePrl', 'kLGjG', 'hFgiP', 'UANJm', "O sti", 'pipe', 'cAYai', " \n┃ ", 'VJvjJ', " Cont", 'Hbegp', 'yPnoX', 'aVelh', 'vFtBo', 'DonoO', 'dKWoy', 'jgfqX', 'sente', 'MdvrB', 'Final', 'inSFj', 'LIMPA', "a\nusu", 'dcLsK', "bot q", 'nBfLM', "dos p", 'UPDAT', 'uxVQy', 'UvhNQ', 'RKSTy', "ult -", 'rietá', 'TciJF', 'izar.', 'Figur', 'aJVLg', 'rheWl', 'JJXGH', 'RkJtt', 'jNTlW', 'VAQnT', 'nesce', 'ENCEY', '4️⃣', 'sende', "ER] E", 'oyvOi', 'mage', 'nskPh', "━━╗\n", "eia d", 'tbkyV', 'Dqftd', "r* 0 ", 'NCADE', 'aIwck', 'WydFR', 'qOLmy', 'ey=JO', 'GcozK', 'hUHgV', 'XsXxX', "M mut", 'sage', './dad', '[name', 'Qiiem', 'mDvRt', 'jeeDc', 'mxkbc', 'ouvAQ', 'rupo_', 'pvcfM', "T 1 F", 'xMatc', 'qkDDi', 'plvr', 'keENw', 'hzzZI', "ng WH", "𝐨𝐠𝐨 𝐭", 'iFPqZ', 'para', 'nte:', 'hkPtV', "𝐦 𝐧ú𝐦", 'LUÍDO', 'KBLHu', 'XCKKO', "ands ", 'JLtYw', 'e_des', 'sGrlE', 'hpnEE', 'unes.', 'type', 'Os_Re', " 𝐏𝐀𝐑𝐀", "a não", 'mCXfC', 'SVRPN', " mens", 'QDZGv', " foi ", 'key', 'rayMe', 'LsFFy', 'sKkdH', 'ddkJs', 'YeOLj', 'yello', 'MaNqV', 'eques', 'UNZaN', "no = ", 'ZbCCs', 'tcZtl', 'vPtkN', 'iVIPZ', 'dINgl', 'Qagqg', "link ", 'xos', "kly) ", 'velha', 'xwAZM', 'iSxjt', 'tvtqL', 'CuEJv', 'ERjhe', "seu d", 'sYiAp', 'etvio', 'pPpZC', 'USDJG', 'twJbE', 'ZzCTQ', 'stanz', 'kQYuP', 'kom', 'ZDpKx', 'WATTR', 'rXfor', "ores ", 'tenci', 'EUhmW', 'Name_', "/ +/]", 'frent', 'PCGSU', 'orce_', 'aMDXc', 'inter', 'fNKhY', 'pobiM', 'nwAQH', 'nte:*', 'kbbHx', 'autos', 'jxjna', 'iFYsB', 'ryjmP', 'DESAF', 'jiPlz', 'OXqwh', "a e c", " = ? ", 'QaJSy', 'KCxKR', 'BuHes', "eu co", 'allVi', 'XwSKP', 'aRlxJ', 'rXUdC', '41845', 's/gtt', 'rQaPn', 'UzUli', ':-5:-', 'block', 'ioDuA', 'jzIIq', '_G_XP', " PARA", 'rias.', " mais", 'EVUob', 'zjOaJ', 'dGCKx', 'elvTD', 'uUiVQ', 'sdxnj', " do b", "ei qu", 'ylGMT', 'norad', 'ZrjRy', 'GwStk', 'VRFjn', ": \"", 'UkIvd', 'NDO', 'short', 'KHqyR', 'oiOKD', 'Bkasq', "vo nã", 'jJEFh', 'epara', 'rxvLL', 'ncao', 'kCEhC', 'WDVSY', 'NoNAh', 'jcyhE', 'jlCSd', " 𝐓𝐈𝐌𝐄", 'r_com', 'kXOCF', "to um", 'NmGpY', "uito ", 'INdsy', 'EMOJI', 'AWGFt', 'aXdmu', "omo p", 'array', 'YEBkF', 'file', 'CTgqa', 'vNfls', 'age', 'amyrL', "or da", 's/com', 'nPBxz', 'viTGW', 'sendM', 'Game', " *𝐒𝐞𝐮", 'CJxAR', 'eys', 'ipant', 'eSele', 'TiGzn', 'zista', 'ling*', "o rem", "ao ob", "do o ", 'oiMuE', "de gu", 'cChGS', 'fvrST', 'VuDMx', 's/sis', 'trang', "ir, f", 'autom', 'zAnLZ', 'quead', 'PWTsq', 'dwRST', 'rmake', 'mHiEf', 'hiWAi', 'unc.j', "ROM c", 'ZiQpQ', " Espe", 'UAVsi', 'Conte', 'yTETr', 'nho.', 'PGSou', "s esp", 'ros/s', "atus ", 'exact', 'qtgRd', "el ", "EM SE", 'yuRYX', '#pala', 'ontra', "ICO P", "EM FR", 'kXqco', 'NDER:', 'rEiOL', 'getCo', 'iKTDV', "ts da", "e dis", 'proib', 'Pebpb', 'orDif', 'whcuV', 'O_MOD', 'dade.', 'USAR_', 'Amanh', 'jMOxY', 'CDSyS', 'mAfyL', 'qlzxa', '𝐞𝐫𝐦𝐢𝐧', 'princ', " as r", 'rIJhs', "𝐓𝐄! ", 'wINsN', 'tarde', "⚠️ 𝐀𝐃𝐕", " [❗] ", 'IfKKA', "𝐚 𝐕𝐞𝐫", 'MKMyU', 'ficia', "zado ", 'HjCae', 'azsVp', 'IuFMh', ".' or", 'user_', 'DA_DE', "vo' \n", 'lastR', 'k.com', 'ida.', 'WDiBa', " Núme", 'direc', 'Fdgdy', 'Vnjuj', '.json', 'jXSRn', " : @", 'WXQye', 'OKZzp', 'dMsg2', 'lhos.', 'Oasmn', 'RQyQB', 'gkEIL', 'RCIjx', 'IlDIe', 'ações', 'LQpso', 'ZisTZ', 'BgSfa', 'yrVUl', 'PscmQ', "os se", 'tfile', " manh", 'GRUPO', " o pô", 'Strin', 'WHpdP', 'lance', "╝\n║ *", 'ator', "', 'l", 'qzZkT', 'body', 'io...', 'aZGdz', 'PVFoK', 'Clean', "━╮\n┃ ", 'XwmmH', 'rpAEm', 'ionMe', 'hour', "das e", 'kybVs', 'snqBC', "não e", 'whats', "á aus", 'YcUYj', "o env", 'dGutt', 'at.wh', 'acess', 'xruIC', 'eImag', 'bWuOO', 'vkOEf', 'URL', '(inde', 'wZxlK', 'ucess', 'aDhME', 'ILlEE', 'XyVEu', 'BSZjc', 'oBot', 'HlpnK', 'SYDDY', 'faJVI', 'vSioH', 'TIGoB', 'xMsGr', "ança ", " você", 'RoTJN', "sh; I", "ário ", "IT 1", 'bnRvV', 'ScbHa', 'pLink', 'JlWwA', "á mut", '𝐧𝐭𝐫𝐚𝐝', 'isOwn', "'unix", 'lter:', 'PGVYf', 'ativo', "cio, ", 'GuYSc', 'DVwEx', 'fefxs', 'AWWNn', 'NCuNJ', 'WYqSE', 'bkajy', 'lv.js', 'ral', 'Mkkuu', "eu di", "om su", "iar s", 'subme', 'ra_of', 'iXJOM', 'video', "ga tr", 'simi2', 'des', 'SkGfC', 'xyagk', 'KGJRN', 'Ahtuk', 'QqYck', "ia! Q", 'fdQid', 'mMkSN', 'strea', 'is.', 'ELnDo', "E gru", 'iUpEI', 'yAFry', 'Vrixu', 'ZZrqu', 'sxJab', 'tEQty', 'lPaym', "Hoje ", 'kFvVa', 'VMMeo', " vent", '𝐯𝐢𝐝𝐚𝐝', 'isBan', 'xlnVh', 'rTGNI', 'dPugR', 'Mowsv', 'ogRSx', 'ssibi', 'BjLcn', 'gSynL', 'PYAbg', 'vkmLJ', 'apaga', "ao ar", 'qBdwD', 'utos', 'axbGZ', 'mazen', 'aders', 'ziHUj', 'yFVkt', 'finit', 'WiXcb', 'YCVgZ', 'entWi', 'us:', 'fWJVv', 'ztViF', 'zaçõe', "e. Bo", 'Inici', 'jzJFZ', 'XOEiN', 'eUrl=', 'GGyMX', 'aottI', " 𝐝𝐢𝐳𝐞", 'Zuddf', '࣭࣭࣭࣭ٜ', 'dia!', 'YLJNS', "rro A", 'utf8', 'txMXv', 'fy_mp', 'HkwVk', " dias", 'INIT_', 'dlSMw', 'case', 'DERCk', 'alize', 'HUvrj', 'WmEnC', "e na ", 'NjnoP', 'radec', 'zIsUB', 'Qgujp', "ê é c", " ┃\n┗━", 'XjVGX', 'pFuPh', 'eYMRb', "no, s", 'modo', 'lJapt', 'PDHJS', 'wREDG', "-c:a ", 'bFdlf', 'pbQdF', 'echar', "nc ()", 'quiz', 'gif.c', 'fSXGl', 'kDays', "Que s", "o pre", 'QYuuC', 'valid', 'stick', 'FdrQW', 'sauda', 'antii', 'LYBHB', " zera", 'ranqu', 'OwNiP', 'tMess', 'YaznJ', 'ifOov', 'JalJl', 'dUDTn', 'chat.', 'XcmUv', 'node-', "ra pr", 'dQwZx', "a Sys", 'geStu', 'bomDi', 'undef', "ida t", " *lev", 'KJkeZ', 'DkBLD', 'kfJbJ', "em Ad", 'mAOzT', 'nkhar', 'EstaN', "Hora ", 'ament', 'OHXmz', 'sMent', 'ANJNY', '*leve', "ria d", 'ntent', ". Voc", 'teio_', 'nItJw', 'trado', 'HsvDk', " unca", " 𝗣𝗘𝗡𝗗", 'swOtm', 'sol.', 'gTAWs', '0_15_', 'POQcs', 'IMAGE', 'oaeNL', 'rNWsY', 'sendE', 'yMUCZ', 'WJMEu', 'cemen', 'cxSyK', '2174fRCYIh', 'xKNOp', 'iplie', 'OhcSS', "é um ", 'FtxQS', 'rsati', 'WBXHS', 'ftTxo', 'YLgbi', '/bail', 'cloud', 'vSwQu', 'vuopo', 'ZfjmU', 'rKysy', 'orAce', 'PHiNv', 'gram', 'ake', '[BACK', 'TFUZg', 'hQrRt', "id = ", 'YnVCp', "ro ge", 'bNdyw', 'ions_', 'dZCHj', 'wURrU', 'WHUFt', 'fVFkd', 'rGUXb', 'iGuvX', 'tores', 'ctMes', 'dSwMe', 'index', "lta. ", 'ObWwY', 'uYCyO', '࣭࣭ٜ', 'cYmsN', 'tMage', 'AGEM_', "is bo", "sto v", 'JLroe', 'oXQBb', 'entRe', "ido ☹️", 'tVJfo', '_SUBT', 'PBiTg', 'TdGPf', 'dvanc', ", ?, ", 'lBepR', 'pktnE', 'jkAPg', 'KfNGm', 'nLuFu', 'FoSIF', 'IkbQf', 'bVgEm', 'DVuju', 'keys', 'portu', 'IdmZj', 'RESOU', 'erm%3', 'CXdCR', 'LCeDZ', 'PKuFq', 'zFabg', 'pamSw', 'toUpp', 'aMkRR', 'UWfBj', 'MM-DD', 'sqlrN', 'CrTfx', 'NOT_F', 'over.', "ar le", 'suári', '─━❆┅', 'nce', 'rao', "*! 🚀\n", 'IXtON', 'zalxL', 'urant', 'TO_MS', 'você.', 'DTGsW', 'detai', 'evel:', "do, e", 'alOom', "eact ", '://ww', 'TMIko', 'TyXdO', 'isMul', "ale c", 'sTBCz', "o não", 'ructo', 'ha256', 'inha', "Olá #", 'upId,', 'HcQip', "r, ti", 'FQFhP', 'Name', 'kMSPV', 'close', 'RDOCN', 'jsjeX', 'Falha', 'EPKbs', '━━━╯', 'qDqQG', " e os", 'tero', 'hyMDa', " seus", 'do*', " um u", 'serId', 'nGuQE', 'eBVOm', 'autho', 'openw', "pId =", 'IDBjH', " ? AN", 'HqKMc', "RE gr", "ai ac", 'I_652', 'nCmVd', 'hvROI', 'WNjSO', 'CEjUv', 'UyeEp', 'SqiBK', " silê", 'rBDqq', 'xZcBF', 'ugDFq', 'colhi', '6574099VfBgAq', "sa Di", "fer, ", 'viewO', 'ls?id', "O Con", 'aYipF', "veis ", 'oprie', " sonh", 'ds.ne', 'wXwkE', 'Lsgbh', 'abs', 'ivDYY', 'FcRZz', 'EAÇÃO', "iar m", "an -v", 'jvWmG', "rrir ", 'jsQNZ', 'AQYsC', "ste é", 'hUFgP', 'ype.j', 'mGduP', " É SO", 'NDUNY', 'zoPWr', "isas ", 'Sorri', 'tSyte', 'SEIiD', 'ONSEG', 'ker', 'WByWd', 'DFdHv', 'yAIad', 'JQLGI', 'hKBrf', 'opjvi', 'aImoU', 'ençoa', 'xnNDI', 'naKER', "sta a", 'KYWhs', 'YWPun', 'dono5', 'User-', 'Produ', 'tAssu', 'fcJZp', 'webp', 'MhNLX', 'flAAS', 'rSovk', "na tr", 'vzIGM', "ser u", 'isBot', 'sDuSz', 'lícia', 'SNET', 'Erro:', 'pyDNV', 'tMwkY', "as po", 'fy.co', 'uWcRN', "ter m", "so, e", 'sRKWy', 'pushn', "r res", 'app.c', ", sta", "do só", 'fwtxJ', " segu", 'wHhkI', 'QdRRr', 'LEnDg', 'eLWLE', 'imgfe', 'webpm', '𝙽𝙾𝚃𝙸𝙵', 'isLev', 'ooRpS', 'MZPYi', "e rea", 'QTAgZ', 'error', 'fari/', 'olher', '✼┉═༺◈', "o uma", 'stanc', 'FXCeo', "os, i", "ivo' ", 'jPHZd', 'tBlue', "az se", "over ", "sem t", 'ctory', "E FRO", 'usent', 'fnIft', 'pCjbV', 'mZXXf', 'EgyaC', 'PAYMn', 'nnXTc', 'nfCJV', 'cXlZk', " sorr", "id ツ", 'bWtmg', 'sktbW', "ntre ", 'Ojpbm', 'edite', 'ndex', 'RhtDo', 'FlLmD', 'KDIsh', 'adcas', 'aIGdi', " veri", 'ggQyc', 'Ohuge', 'raios', 'vdyWu', 'ion:', 'mqMbT', 'AReaG', 'HTFYd', 'suhlX', 'rPrem', 'SMgSS', 'RbxlN', 'kPGYy', 'ovKRA', "O lev", 'bHbCM', '37m', 'WnsLE', 'oDono', 'jglHH', 'Qorxt', 'isQuo', 'event', 'umXNu', 'vGnwp', " tudo", 'yBllG', 'sts-f', 'azqfh', 'MMvcy', 'nXIJQ', 'xuVMf', 'XYXcP', 'XPh0P', 'play', 'sWWPM', 'VscWZ', "ão co", "mo os", 'YfRFP', 'LaMON', 'tsapp', 'WlpDX', 'fqlRu', 'uct', "TO us", 'MnaIS', 'qKDYW', "as ho", 'mp_cr', 'categ', 'envia', 'loc', 'eswVU', 'oteJi', 'yVide', 'jEvyI', "m mod", '33268', 'RwsRd', 'eFJvj', "ao re", 'mAcTE', 'espon', 'esetC', "] pal", " quen", " hoje", "u mel", 'Menu', "o sou", 'BXdcr', 'iZSKn', 'oCquc', "T OR ", 'keybo', 'UHIwD', 'ld:', 'te!', 'wqJnI', '2372XOgBle', 'YYWmx', "ocê m", 'uMFGC', 'uYYNB', 'OFXJk', 'JLavJ', 'mYpgh', 'eiro', 'zBhdf', 'kyun', 'LaiHA', 'reply', 'ões:', 'NBqNG', 'aBaFj', 'YtaWG', " moti", 'fig_g', 'QjhPv', 'CKUP.', "traz ", 'umber', 'QXomM', 'DmqON', 'MSG', 'mando', 'boaNo', 'CwQNp', 'rcwXs', "da ma", "o é e", 'DviPZ', 'lTUzj', 'gsBVK', "que v", 'eBloc', 'Dirqr', 'eguin', "ROM s", 'DMQlK', 'MgkXk', 'ugGLQ', 'taIKL', 'GBEue', 'qbPen', 'lular', 'ITULO', 'nsage', 'SHVEb', 'LlaBV', 'UIR_U', "ão: ", 'sCxFY', '_conv', 'YkZNL', 'inval', "ao en", 'jzLQS', 'BOT', 'iMBWS', 'mais.', 'SUyTe', 'uXNZu', 'tion', "CE IN", 'lBDCh', 'ojIxk', 'bfMmr', 'mensa', 'tm_me', 'matar', 'visuU', '://x.', "ue ❌", 'QYoJW', 'twitt', 'UsxYK', 'itand', 'NaExQ', '0nM.e', " *Lev", 'SdSRY', 'optio', 'JWuaq', 'GQPus', 'miUPc', 'XJzHH', 'Olldg', 'WUvjZ', 'KEzvR', 'SdBBk', "r! ❌", "zip -", 'handl', 'AqoUH', 'gvxIi', 'tJMKD', 'adrug', 'bRtlU', " grup", "e con", 'PQNCA', 'cumen', 'edSim', " já n", 'as.', 'soadm', 'pensa', 'ceAll', 'nvers', 'jYzIR', 'BzQyE', 'y_pre', 'PMNcH', 'iSyst', 'FLBjD', "o são", 'GHdLh', "Que e", 'zpByD', 'FciPf', 'dpFmc', 'then', 'mMezL', 'pzzXx', 'NQsUI', 'why', 'VSAbX', 'oZGgQ', 'ezniv', "0 (Ma", " cons", 'qFNkh', '𝐞𝐬𝐚𝐟𝐢', 'SKIpI', " invá", 'HVHtR', 'ywSYB', 'TDOUT', "│⎋ Go", "ejam ", 'NytDk', 'BlGJB', 'BÉNS,', 'OeoSi', 'WGjfg', 'czDwB', 'FileS', '-pres', 'tes', 'fPrhR', 'GSPoe', 'kKPUb', 'axwYC', 'visua', 'Files', "_afk ", 'WUsCr', " = ?,", 'kJNBz', "oras ", 'minis', 'qmyIs', 'ido:', 'tps:/', 'URQOM', " cubr", 'lmZdM', 'CcdyO', 'omMe:', 'YBrwt', 'cSdSt', "lXp F", "o os ", 'lXIKy', 'SFsJZ', 'BrmRJ', 'einDi', "ade d", 'ekQPm', 'wVjWP', 'er-pa', "uma o", "T id ", 'HJIAw', 'wcSbD', 'HlVuJ', 'poeiH', "Bom d", 'kofnY', "\n\n- V", "urta ", '𝐢𝐠𝐢𝐭𝐞', 'ENTO_', 'wjsKl', 'ODFuM', 'nváli', 'xfTFV', "old. ", 'Xeczu', 'giltU', " 𝐏𝐀𝐑𝐓", 'histo', 'VzkCT', 'vcakg', " *USU", 'Dbvvd', "odas ", 'opOTB', 'afio.', 'nnKZS', 'tema', 'dZVbY', 'rdsOr', 'imgco', 'UsnhR', 'Audio', " 𝐂𝐀𝐌𝐏", 'CWYYh', 'PALAV', 'da_pa', 'uxbhn', 'mbnai', 'r_id,', 'bKit/', 'oAqEK', " dire", "ndo p"];
  _0x2177 = function () {
    return _0xf52abf;
  };
  return _0x2177();
}
async function imageToWebp(_0x3251fb) {
  const _0x6a8501 = Math.floor(Math.random() * 10000) + ".webp";
  const _0x254082 = Math.floor(Math.random() * 10000) + ".jpg";
  fs.writeFileSync(_0x254082, _0x3251fb);
  await new Promise((_0x395f00, _0x5b8297) => {
    ffmpeg(_0x254082).on("end", () => _0x395f00(true)).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-5:-5:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"]).toFormat("webp").save(_0x6a8501);
  });
  const _0xcee4aa = fs.readFileSync(_0x6a8501);
  fs.unlinkSync(_0x6a8501);
  fs.unlinkSync(_0x254082);
  return _0xcee4aa;
}
async function videoToWebp(_0x486d04) {
  const _0xa4efde = Math.floor(Math.random() * 10000) + ".webp";
  const _0x4cea82 = Math.floor(Math.random() * 10000) + ".mp4";
  fs.writeFileSync(_0x4cea82, _0x486d04);
  await new Promise((_0x28a394, _0x440ae2) => {
    ffmpeg(_0x4cea82).on("end", () => _0x28a394(true)).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse", "-loop", '0', "-ss", "00:00:00", '-t', "00:00:05", "-preset", "default", "-an", "-vsync", '0']).toFormat("webp").save(_0xa4efde);
  });
  const _0x5edcbb = fs.readFileSync(_0xa4efde);
  fs.unlinkSync(_0xa4efde);
  fs.unlinkSync(_0x4cea82);
  return _0x5edcbb;
}
function _0x1fa2eb(_0x5a22e3, _0x10cc1e, _0x5273d9, _0xcdad22, _0x590f9c) {
  return _0x491c(_0x5a22e3 + 0x25c, _0xcdad22);
}
async function writeExifImg(_0x255f85, _0x59d817) {
  let _0x4189be = await imageToWebp(_0x255f85);
  const _0x5cd77c = Math.floor(Math.random() * 10000) + ".webp";
  const _0x53f6df = Math.floor(Math.random() * 10000) + ".webp";
  fs.writeFileSync(_0x53f6df, _0x4189be);
  if (_0x59d817.packname || _0x59d817.author) {
    const _0x4a70f0 = new webp.Image();
    const _0x3bcce2 = {
      "sticker-pack-id": "@Kauan_dev",
      "sticker-pack-name": _0x59d817.packname,
      "sticker-pack-publisher": _0x59d817.author,
      emojis: _0x59d817.categories ? _0x59d817.categories : ['']
    };
    const _0x388b2b = Buffer.from([73, 73, 42, 0, 8, 0, 0, 0, 1, 0, 65, 87, 7, 0, 0, 0, 0, 0, 22, 0, 0, 0]);
    const _0x31f5e1 = Buffer.from(JSON.stringify(_0x3bcce2), "utf-8");
    const _0x176505 = Buffer.concat([_0x388b2b, _0x31f5e1]);
    _0x176505.writeUIntLE(_0x31f5e1.length, 14, 4);
    await _0x4a70f0.load(_0x53f6df);
    fs.unlinkSync(_0x53f6df);
    _0x4a70f0.exif = _0x176505;
    await _0x4a70f0.save(_0x5cd77c);
    return _0x5cd77c;
  }
}
async function writeExifVid(_0x7fc618, _0x3ad622) {
  let _0x4cf61d = await videoToWebp(_0x7fc618);
  const _0x16392b = Math.floor(Math.random() * 10000) + ".webp";
  const _0x57f16e = Math.floor(Math.random() * 10000) + ".webp";
  fs.writeFileSync(_0x57f16e, _0x4cf61d);
  if (_0x3ad622.packname || _0x3ad622.author) {
    const _0x313618 = new webp.Image();
    const _0x51cc69 = {
      "sticker-pack-id": "com.marsvard.stickermakerforwhatsapp.stickercontentprovider 1594741845",
      "sticker-pack-name": _0x3ad622.packname,
      "sticker-pack-publisher": _0x3ad622.author,
      "android-app-store-link": "https://play.google.com/store/apps/details?id=com.marsvard.stickermakerforwhatsapp&referrer=utm_source%3Dopenwa%26utm_medium%3Dstickerapi%26utm_term%3D6247",
      "ios-app-store-link": "https://itunes.apple.com/app/sticker-maker-studio/id1443326857"
    };
    const _0x83198b = Buffer.from([73, 73, 42, 0, 8, 0, 0, 0, 1, 0, 65, 87, 7, 0, 0, 0, 0, 0, 22, 0, 0, 0]);
    const _0x2129ef = Buffer.from(JSON.stringify(_0x51cc69), "utf-8");
    const _0xdd4e67 = Buffer.concat([_0x83198b, _0x2129ef]);
    _0xdd4e67.writeUIntLE(_0x2129ef.length, 14, 4);
    await _0x313618.load(_0x57f16e);
    fs.unlinkSync(_0x57f16e);
    _0x313618.exif = _0xdd4e67;
    await _0x313618.save(_0x16392b);
    return _0x16392b;
  }
}
function _0x3a2eb7(_0x2b9848, _0x319f72, _0x1bc8b7, _0xb9b772, _0x44439f) {
  return _0x491c(_0xb9b772 - 0x10, _0x2b9848);
}
function _0x57439b(_0x4084c1, _0x194301, _0x3028e5, _0x5db53f, _0x59b7cc) {
  return _0x491c(_0x3028e5 + 0xc6, _0x4084c1);
}
async function writeExif(_0x334005, _0x521336) {
  let _0x46b301 = /webp/.test(_0x334005.mimetype) ? _0x334005.data : /image/.test(_0x334005.mimetype) ? await imageToWebp(_0x334005.data) : /video/.test(_0x334005.mimetype) ? await videoToWebp(_0x334005.data) : '';
  const _0xbb7883 = Math.floor(Math.random() * 10000) + ".webp";
  const _0x5a59c5 = Math.floor(Math.random() * 10000) + ".webp";
  fs.writeFileSync(_0x5a59c5, _0x46b301);
  if (_0x521336.packname || _0x521336.author) {
    const _0x30d380 = new webp.Image();
    const _0x1fb49c = {
      "sticker-pack-id": "com.marsvard.stickermakerforwhatsapp.stickercontentprovider 1594741845",
      "sticker-pack-name": _0x521336.packname,
      "sticker-pack-publisher": _0x521336.author,
      "android-app-store-link": "https://play.google.com/store/apps/details?id=com.marsvard.stickermakerforwhatsapp&referrer=utm_source%3Dopenwa%26utm_medium%3Dstickerapi%26utm_term%3D6247",
      "ios-app-store-link": "https://itunes.apple.com/app/sticker-maker-studio/id1443326857"
    };
    const _0x1a0601 = Buffer.from([73, 73, 42, 0, 8, 0, 0, 0, 1, 0, 65, 87, 7, 0, 0, 0, 0, 0, 22, 0, 0, 0]);
    const _0x807b2e = Buffer.from(JSON.stringify(_0x1fb49c), "utf-8");
    const _0x373331 = Buffer.concat([_0x1a0601, _0x807b2e]);
    _0x373331.writeUIntLE(_0x807b2e.length, 14, 4);
    await _0x30d380.load(_0x5a59c5);
    fs.unlinkSync(_0x5a59c5);
    _0x30d380.exif = _0x373331;
    await _0x30d380.save(_0xbb7883);
    return _0xbb7883;
  }
}
async function writeExifWebp(_0x53ee6a, _0x34721f) {
  let _0x20087f = require("node-webpmux");
  let _0xaeccf4 = require("crypto");
  let {
    tmpdir: _0x3cad6c
  } = require('os');
  let _0x47ff28 = path.join(_0x3cad6c(), _0xaeccf4.randomBytes(6).readUIntLE(0, 6).toString(36) + ".webp");
  let _0x23c303 = path.join(_0x3cad6c(), _0xaeccf4.randomBytes(6).readUIntLE(0, 6).toString(36) + "_converted.webp");
  fs.writeFileSync(_0x47ff28, _0x53ee6a);
  if (_0x34721f.packname || _0x34721f.author) {
    let _0x276852 = new _0x20087f.Image();
    const _0x2f4b6d = {
      "sticker-pack-id": "SUNG BOT",
      "sticker-pack-name": _0x34721f.packname,
      "sticker-pack-publisher": _0x34721f.author,
      emojis: _0x34721f.categories ? _0x34721f.categories : ['']
    };
    let _0x43d5f1 = Buffer.from([73, 73, 42, 0, 8, 0, 0, 0, 1, 0, 65, 87, 7, 0, 0, 0, 0, 0, 22, 0, 0, 0]);
    let _0xe58eaa = Buffer.from(JSON.stringify(_0x2f4b6d), "utf-8");
    let _0x518b64 = Buffer.concat([_0x43d5f1, _0xe58eaa]);
    _0x518b64.writeUIntLE(_0xe58eaa.length, 14, 4);
    await _0x276852.load(_0x47ff28);
    fs.unlinkSync(_0x47ff28);
    _0x276852.exif = _0x518b64;
    await _0x276852.save(_0x23c303);
    return fs.readFileSync(_0x23c303);
  }
}
const {
  handleCommand
} = require("./outros/funcoes/commandsManager");
const processarMensagens = async (_0x2aed8a, _0x3b3c6d, _0xb5c337) => {
  try {
    for (const _0x1f574b of _0x2aed8a?.["messages"] || []) {
      if (_0x2aed8a.type === "append") {
        return;
      }
      if (_0x1f574b.messageStubType) {
        return;
      }
      if (!_0x1f574b.message) {
        return console.log("msg sem info.message: " + JSON.stringify(_0x1f574b));
      }
      const _0x2e4f16 = _0x1f574b.key.remoteJid;
      if (!_0x2e4f16?.["trim"]()) {
        return console.log("MENSAGEM SEM FROM");
      }
      const _0x56a33e = _0x2e4f16.endsWith("@g.us");
      async function _0x73359a(_0x58187a) {
        if (!_0x58187a || typeof _0x58187a !== "string" || !_0x58187a.endsWith("@g.us")) {
          return null;
        }
        try {
          const _0x5dbb88 = new Promise((_0x2a8fce, _0x3a18c6) => setTimeout(() => _0x3a18c6(new Error("Timeout na API")), 7000));
          const _0x5026c0 = _0x3b3c6d.groupMetadata(_0x58187a);
          const _0x30639c = await Promise.race([_0x5026c0, _0x5dbb88])["catch"](_0x3f67d0 => {
            console.error("Erro ao obter metadados do grupo " + _0x58187a + ':', _0x3f67d0.message);
            return null;
          });
          if (!_0x30639c || !_0x30639c.id) {
            return null;
          }
          setTimeout(() => {
            const _0x3ac027 = {
              'id': _0x30639c.id,
              'desc': _0x30639c.desc || '',
              'announce': _0x30639c.announce ? 1 : 0,
              'restrict': _0x30639c.restrict ? 1 : 0,
              'subject': _0x30639c.subject || '',
              'participants': JSON.stringify(_0x30639c.participants || []),
              'isCommunity': _0x30639c.isCommunity !== undefined ? _0x30639c.isCommunity ? 1 : 0 : 0,
              'isCommunityAnnounce': _0x30639c.isCommunityAnnounce !== undefined ? _0x30639c.isCommunityAnnounce ? 1 : 0 : 0,
              'joinApprovalMode': _0x30639c.joinApprovalMode !== undefined ? _0x30639c.joinApprovalMode ? 1 : 0 : 0,
              'memberAddMode': _0x30639c.memberAddMode !== undefined ? _0x30639c.memberAddMode ? 1 : 0 : 0
            };
            atualizarOuAdicionarDB("DadosGP", _0x3ac027, 'id', _0x30639c.id)["catch"](_0x638d63 => {
              console.error("Erro ao armazenar metadados do grupo " + _0x2e4f16 + ':', _0x638d63);
            });
          }, 0);
          return _0x30639c;
        } catch (_0x3278c6) {
          console.error("Erro em AddGM_P para grupo " + _0x2e4f16 + ':', _0x3278c6);
          return null;
        }
      }
      async function _0x860de1(_0x43e78b, _0x22f78e, _0x9d9802) {
        if (!_0x43e78b) {
          return '';
        }
        try {
          return (await puxarGrupo(_0x22f78e, _0x9d9802)) || (await _0x73359a(_0x9d9802));
        } catch (_0x181ff6) {
          console.error("Erro ao obter metadados para " + _0x9d9802 + ':', _0x181ff6);
          return '';
        }
      }
      groupMetadata = _0x56a33e ? await _0x860de1(true, _0x3b3c6d, _0x2e4f16) : '';
      const _0x26d2bb = _0x56a33e ? groupMetadata?.["subject"] || '' : '';
      const _0x157177 = _0x56a33e ? groupMetadata?.["subject"] || '' : '';
      const _0x24d1f3 = (() => {
        try {
          if (_0x56a33e) {
            const _0x5b5000 = [_0x1f574b.key.participant, _0x1f574b.participant, _0x1f574b.message?.["key"]?.["participant"], _0x1f574b.key?.["participant"]];
            let _0x59b8e7 = null;
            for (const _0x138917 of _0x5b5000) {
              if (_0x138917 && _0x138917 !== "null" && _0x138917 !== null && typeof _0x138917 === "string" && _0x138917.includes('@')) {
                _0x59b8e7 = _0x138917;
                break;
              }
            }
            if (!_0x59b8e7) {
              return null;
            }
            return _0x59b8e7.includes(':') ? _0x59b8e7.split(':')[0] + "@s.whatsapp.net" : _0x59b8e7;
          }
          return _0x1f574b.key.remoteJid || null;
        } catch (_0x28fce0) {
          console.error("[SENDER] Erro ao definir sender:", _0x28fce0);
          return null;
        }
      })();
      if (!_0x1f574b.key.fromMe && !_0x24d1f3?.["trim"]()) {
        console.log("MENSAGEM SEM SENDER: " + _0x24d1f3);
        console.log("🔍 isGroup: " + _0x56a33e + " | fromMe: " + _0x1f574b.key.fromMe);
        console.log("📱 remoteJid: \"" + _0x1f574b.key.remoteJid + "\" | participant: \"" + _0x1f574b.key.participant + "\"");
        console.log("💬 texto: \"" + (_0x1f574b.message?.["conversation"] || _0x1f574b.message?.["extendedTextMessage"]?.["text"] || "sem texto") + "\"");
        console.log(_0x1f574b);
        return console.log("⚡ keys: [" + Object.keys(_0x1f574b.key).join(", ") + ']');
      }
      const _0x21f527 = (() => {
        try {
          return _0x24d1f3 && typeof _0x24d1f3 === "string" ? _0x24d1f3.split('@')[0] : null;
        } catch (_0x2964c0) {
          console.error("[SENDER2] Erro ao definir sender2:", _0x2964c0);
          return null;
        }
      })();
      const _0x515c1d = {
        acertos: 0x0,
        erros: 0x0,
        palavra: [],
        escreveu: [],
        palavra_ofc: 0x0,
        dica: 0x0,
        tema: 0x0
      };
      const _0x280642 = {
        errou: 0x0,
        acertou: 0x0,
        numero: 0x0
      };
      const _0x56ee3b = {
        id: _0x24d1f3,
        ChanceG: null,
        ChanceAp: null,
        ChanceR: [],
        Vinganca: null,
        cassino: 0x0,
        quiz: [_0x280642],
        roletadasorte: false,
        Cachaca: 0x1,
        Escudo: []
      };
      const _0x8c3933 = {
        modo: 0x0,
        palavras: []
      };
      const _0x1b368c = {
        quantidade: 0xfa0
      };
      const _0x4312bb = {
        name: _0x157177,
        groupId: _0x2e4f16,
        x9: false,
        antiimg: 0x0,
        antivideo: 0x0,
        antiaudio: 0x0,
        antisticker: 0x0,
        antidoc: 0x0,
        antictt: 0x0,
        antiloc: 0x0,
        antilinkgp: 0x0,
        antilinkhard: 0x0,
        anticatalogo: 0x0,
        antiinteractive: 0x0,
        sistemgold: 0x0,
        antifake: false,
        sistemGold: false,
        visuUnica: false,
        registrarFIGUS: false,
        autotranscrever: false,
        soadm: false,
        rg_aluguel: false,
        nsfw: false,
        advertencias: [],
        listanegra: [],
        advertir: [],
        prefixos: ['!'],
        comandosB: [],
        advertir2: [],
        legenda_estrangeiro: '0',
        legenda_listanegra: "Eita, estava na lista negra, sinto muito, terei que remover.",
        legenda_documento: '0',
        legenda_video: '0',
        legenda_imagem: '0',
        legenda_audio: '0',
        legenda_sticker: '0',
        legenda_contato: '0',
        legenda_localizacao: '0',
        legenda_catalogo: '0',
        legenda_interativo: '0',
        multiprefix: false,
        recolherlinkgp: false,
        forca_ofc: [_0x515c1d],
        Chances: [_0x56ee3b],
        ausentes: [],
        forca_inc: false,
        comandos_gold: [],
        antipalavrao: _0x8c3933,
        limitec: _0x1b368c,
        wellcome: [{
          'bemvindo1': false,
          'legendabv': "Olá #numerodele#, seja bem vindo (a)",
          'legendasaiu': 0x0
        }, {
          'bemvindo2': false,
          'legendabv': "Olá #numerodele#, seja bem vindo (a)",
          'legendasaiu': 0x0
        }],
        simi1: false,
        simi2: false,
        autosticker: false,
        autoresposta: false,
        jogos: false,
        bangp: false
      };
      const _0x15152a = [_0x4312bb];
      function _0x1a4a3b(_0x149b8f, _0x49a748, _0x393ad6) {
        try {
          const _0x3957b0 = Date.now();
          const _0x5046d3 = JSON.stringify(_0x393ad6);
          const _0x20de80 = BANCOP.prepare("SELECT * FROM config_groups WHERE groupId = ?");
          const _0x202a9e = _0x20de80.get(_0x149b8f);
          if (_0x202a9e) {
            const _0x6ef952 = BANCOP.prepare("UPDATE config_groups SET groupName = ?, settings = ?, lastUpdated = ? WHERE groupId = ?");
            const _0x1a5001 = _0x6ef952.run(_0x49a748, _0x5046d3, _0x3957b0, _0x149b8f);
            return _0x1a5001.changes;
          } else {
            const _0x5db139 = BANCOP.prepare("INSERT INTO config_groups (groupId, groupName, settings, lastUpdated) VALUES (?, ?, ?, ?)");
            const _0x4cda2c = _0x5db139.run(_0x149b8f, _0x49a748, _0x5046d3, _0x3957b0);
            return _0x4cda2c.lastInsertRowid;
          }
        } catch (_0x27f750) {
          console.error("Erro ao atualizar configurações para o grupo " + _0x149b8f + ':', _0x27f750.message);
          return null;
        }
      }
      const _0x1924ef = await getGroupSettings(_0x2e4f16);
      if (_0x56a33e) {
        if (!_0x1924ef) {
          await _0x1a4a3b(_0x2e4f16, _0x157177, _0x15152a);
        }
      }
      var _0x3c04e4 = _0x56a33e ? await getGroupSettings(_0x2e4f16) : undefined;
      if (_0x56a33e && !_0x3c04e4) {
        _0x3c04e4 = _0x15152a;
        await _0x1a4a3b(_0x2e4f16, _0x157177, _0x3c04e4);
      }
      const _0x3225f0 = !!_0x1924ef;
      async function _0x771fff(_0x130685) {
        const _0x5937ad = {
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36"
        };
        const _0xf23a71 = {
          responseType: "arraybuffer",
          headers: _0x5937ad
        };
        axios.get(_0x130685, _0xf23a71).then(async _0x5d6430 => {
          fs.writeFileSync("imagem.jpg", _0x5d6430.data);
          const _0x1a4ac1 = {
            url: "imagem.jpg"
          };
          const _0xd357bf = {
            image: _0x1a4ac1
          };
          const _0x1f487a = {
            quoted: _0x1f574b
          };
          _0x3b3c6d.sendMessage(_0x2e4f16, _0xd357bf, _0x1f487a);
        })["catch"](_0x189631 => {
          return _0x42aca2("Erro!!");
        });
      }
      const _0x402d55 = require("@whiskeysockets/baileys");
      const _0x476b60 = _0x402d55.getContentType(_0x1f574b.message);
      const _0x31a2b4 = JSON.stringify(_0x1f574b.message);
      const _0x41e4e0 = _0x1f574b.pushName ? _0x1f574b.pushName : '';
      if (nescessario.visualizarmsg) {
        _0x3b3c6d.readMessages([_0x1f574b.key]);
      } else {
        if (_0x2e4f16 != "status@broadcast" && !_0x2e4f16.includes("status")) {}
      }
      const _0x37d233 = _0x3b3c6d.user.id.split(':')[0] + "@s.whatsapp.net";
      let _0x17334e = false;
      let _0xdc960c = null;
      let _0x1d4dce = {};
      function _0xb03687() {
        if (_0x17334e && _0xdc960c) {
          return _0xdc960c;
        }
        try {
          _0xdc960c = {
            'getAll': BANCOP.prepare("SELECT * FROM options_buffer"),
            'insertOrUpdate': BANCOP.prepare("INSERT OR REPLACE INTO options_buffer (key, comandos, message_key, timestamp, menus, history) VALUES (?, ?, ?, ?, ?, ?)"),
            'delete': BANCOP.prepare("DELETE FROM options_buffer WHERE key = ?"),
            'deleteExpired': BANCOP.prepare("DELETE FROM options_buffer WHERE timestamp < ?")
          };
          _0x17334e = true;
          return _0xdc960c;
        } catch (_0x49000a) {
          console.error("Erro ao preparar statements da tabela options_buffer:", _0x49000a);
          return null;
        }
      }
      _0xdc960c = _0xb03687();
      function _0x1b6f94(_0x2bd15b, _0xe44e9d) {
        if (!_0x2bd15b || !_0xe44e9d) {
          return "error:invalidIds:" + Date.now();
        }
        return _0x2bd15b + ':' + _0xe44e9d;
      }
      function _0x58c71f() {
        try {
          const _0x78f792 = _0xdc960c.getAll.all();
          _0x1d4dce = {};
          _0x78f792.forEach(_0x18ba44 => {
            try {
              _0x1d4dce[_0x18ba44.key] = {
                'comandos': JSON.parse(_0x18ba44.comandos),
                'key': JSON.parse(_0x18ba44.message_key),
                'timestamp': _0x18ba44.timestamp,
                'menus': _0x18ba44.menus ? JSON.parse(_0x18ba44.menus) : undefined,
                'history': _0x18ba44.history ? JSON.parse(_0x18ba44.history) : undefined
              };
            } catch (_0x522760) {
              console.error("Erro ao processar registro " + _0x18ba44.key + ':', _0x522760);
            }
          });
        } catch (_0x9450d3) {
          console.error("Erro ao carregar opções:", _0x9450d3);
          _0x1d4dce = {};
        }
      }
      function _0x363d78() {
        try {
          BANCOP.transaction(() => {
            BANCOP.prepare("DELETE FROM options_buffer").run();
            for (const _0x18b30c in _0x1d4dce) {
              const _0x503adc = _0x1d4dce[_0x18b30c];
              _0xdc960c.insertOrUpdate.run(_0x18b30c, JSON.stringify(_0x503adc.comandos), JSON.stringify(_0x503adc.key), _0x503adc.timestamp, _0x503adc.menus ? JSON.stringify(_0x503adc.menus) : null, _0x503adc.history ? JSON.stringify(_0x503adc.history) : null);
            }
          })();
        } catch (_0x21e3f1) {
          console.error("Erro ao salvar opções:", _0x21e3f1);
        }
      }
      function _0x56b31e(_0x14d171) {
        if (!_0x14d171 || !_0x14d171.message) {
          return '';
        }
        if (_0x14d171.message.buttonsResponseMessage?.["selectedButtonId"]) {
          return _0x14d171.message.buttonsResponseMessage.selectedButtonId;
        }
        if (_0x14d171.message.listResponseMessage?.["singleSelectReply"]?.["selectedRowId"]) {
          return _0x14d171.message.listResponseMessage.singleSelectReply.selectedRowId;
        }
        if (_0x14d171.message.templateButtonReplyMessage?.["selectedId"]) {
          return _0x14d171.message.templateButtonReplyMessage.selectedId;
        }
        if (_0x14d171.message.conversation) {
          return _0x14d171.message.conversation.trim();
        }
        if (_0x14d171.message.extendedTextMessage?.["text"]) {
          return _0x14d171.message.extendedTextMessage.text.trim();
        }
        if (_0x14d171.message.imageMessage?.["caption"]) {
          return _0x14d171.message.imageMessage.caption.trim();
        }
        if (_0x14d171.message.videoMessage?.["caption"]) {
          return _0x14d171.message.videoMessage.caption.trim();
        }
        if (_0x14d171.message.documentWithCaptionMessage?.["message"]?.["documentMessage"]?.["caption"]) {
          return _0x14d171.message.documentWithCaptionMessage.message.documentMessage.caption.trim();
        }
        const _0x4853f4 = (_0x2f1136, _0x8afe10 = 0, _0x32dc12 = 3) => {
          if (!_0x2f1136 || typeof _0x2f1136 !== "object" || _0x8afe10 > _0x32dc12) {
            return null;
          }
          for (const _0x4e3ba7 in _0x2f1136) {
            if (["text", "caption", "conversation", "selectedButtonId", "selectedRowId", "selectedId"].includes(_0x4e3ba7) && typeof _0x2f1136[_0x4e3ba7] === "string" && _0x2f1136[_0x4e3ba7].trim()) {
              return _0x2f1136[_0x4e3ba7].trim();
            }
            if (typeof _0x2f1136[_0x4e3ba7] === "object" && _0x2f1136[_0x4e3ba7] !== null) {
              const _0x9009ee = _0x4853f4(_0x2f1136[_0x4e3ba7], _0x8afe10 + 1, _0x32dc12);
              if (_0x9009ee) {
                return _0x9009ee;
              }
            }
          }
          return null;
        };
        const _0x13374c = _0x4853f4(_0x14d171.message);
        if (_0x13374c) {
          return _0x13374c;
        }
        const _0x2d8c30 = Object.keys(_0x14d171.message)[0];
        switch (_0x2d8c30) {
          case "conversation":
            return _0x14d171.message.conversation || '';
          case "imageMessage":
            return _0x14d171.message.imageMessage?.["caption"] || '';
          case "videoMessage":
            return _0x14d171.message.videoMessage?.["caption"] || '';
          case "extendedTextMessage":
            return _0x14d171.message.extendedTextMessage?.["text"] || '';
          case "documentWithCaptionMessage":
            return _0x14d171.message.documentWithCaptionMessage?.["message"]?.["documentMessage"]?.["caption"] || '';
          case "buttonsResponseMessage":
            return _0x14d171.message.buttonsResponseMessage?.["selectedButtonId"] || '';
          case "listResponseMessage":
            return _0x14d171.message.listResponseMessage?.["singleSelectReply"]?.["selectedRowId"] || '';
          case "templateButtonReplyMessage":
            return _0x14d171.message.templateButtonReplyMessage?.["selectedId"] || '';
        }
        return '';
      }
      function _0x42e0d1() {
        try {
          const _0x464455 = Date.now();
          let _0x3e62aa = false;
          Object.keys(_0x1d4dce).forEach(_0x56b24c => {
            if (_0x1d4dce[_0x56b24c]?.["timestamp"] && _0x464455 - _0x1d4dce[_0x56b24c].timestamp > 60000) {
              delete _0x1d4dce[_0x56b24c];
              _0x3e62aa = true;
            }
          });
          if (_0x3e62aa) {
            _0x363d78();
          }
          return _0x3e62aa;
        } catch (_0x2faff6) {
          console.error("Erro ao verificar opções expiradas:", _0x2faff6);
          return false;
        }
      }
      function _0x36e80a() {
        return _0x42e0d1();
      }
      async function _0x171ccc(_0x1c1a9d, _0x41cb30, _0x249c61, _0x5da4d4 = {}, _0x42f9ad = {}) {
        try {
          _0x58c71f();
          const _0x338145 = _0x1b6f94(_0x1c1a9d, _0x41cb30);
          const _0x56b068 = {
            'text': _0x249c61 || "Menu"
          };
          if (_0x42f9ad.editKey) {
            _0x56b068.edit = _0x42f9ad.editKey;
          }
          const _0x44caae = await _0x3b3c6d.sendMessage(_0x1c1a9d, _0x56b068);
          if (!_0x44caae) {
            throw new Error("Falha ao enviar mensagem");
          }
          _0x1d4dce[_0x338145] = {
            'comandos': _0x5da4d4,
            'key': _0x44caae.key,
            'timestamp': Date.now(),
            'menus': _0x42f9ad.menus,
            'history': _0x42f9ad.history || ["principal"]
          };
          _0x363d78();
          return _0x44caae;
        } catch (_0x23b0a6) {
          console.error("Erro ao criar menu:", _0x23b0a6);
          return false;
        }
      }
      async function _0x4a895f() {
        try {
          _0x42e0d1();
          const _0x256bc5 = _0x1f574b.key.remoteJid;
          let _0x3532a5;
          if (_0x1f574b.key.participant) {
            _0x3532a5 = _0x1f574b.key.participant;
          } else {
            if (_0x24d1f3 && _0x24d1f3 !== _0x256bc5) {
              _0x3532a5 = _0x24d1f3;
            } else {
              if (_0x1f574b.key.fromMe) {
                _0x3532a5 = _0x37d233;
              } else {
                _0x3532a5 = _0x1f574b.key.remoteJid;
              }
            }
          }
          const _0x33423c = _0x1b6f94(_0x256bc5, _0x3532a5);
          _0x58c71f();
          _0x42e0d1();
          if (!_0x1d4dce[_0x33423c]) {
            return false;
          }
          const _0x358044 = _0x56b31e(_0x1f574b);
          let _0x5dc5aa = _0x1d4dce[_0x33423c].comandos[_0x358044] || _0x1d4dce[_0x33423c].comandos[_0x358044.toLowerCase()];
          if (!_0x5dc5aa && !isNaN(_0x358044)) {
            _0x5dc5aa = _0x1d4dce[_0x33423c].comandos[_0x358044.trim()];
          }
          if (!_0x5dc5aa) {
            return false;
          }
          const _0x19c20e = _0x5dc5aa;
          const _0x3954fb = _0x1d4dce[_0x33423c].menus;
          const _0x5465aa = _0x1d4dce[_0x33423c].history || ["principal"];
          if (typeof _0x19c20e === "string") {
            _0x1f574b.message.conversation = _0x19c20e;
            delete _0x1d4dce[_0x33423c];
          } else {
            if (typeof _0x19c20e === "object") {
              if (_0x19c20e.command && _0x19c20e.edit) {
                _0x1f574b.message.conversation = _0x19c20e.command;
                if (_0x19c20e.text) {
                  const _0xaf1ac8 = {
                    text: _0x19c20e.text,
                    edit: _0x1d4dce[_0x33423c].key
                  };
                  await _0x3b3c6d.sendMessage(_0x256bc5, _0xaf1ac8);
                }
                delete _0x1d4dce[_0x33423c];
              } else {
                if (_0x19c20e.submenu && _0x3954fb && _0x3954fb[_0x19c20e.submenu]) {
                  const _0x864ac6 = _0x3954fb[_0x19c20e.submenu];
                  try {
                    const _0x13939a = {
                      editKey: _0x1d4dce[_0x33423c].key,
                      menus: _0x3954fb,
                      history: [..._0x5465aa, _0x19c20e.submenu]
                    };
                    await _0x171ccc(_0x256bc5, _0x3532a5, _0x864ac6.text, _0x864ac6.options, _0x13939a);
                  } catch (_0x186951) {
                    console.error("Erro ao criar submenu:", _0x186951);
                  }
                  return true;
                } else {
                  if (_0x19c20e.back && _0x5465aa.length > 1) {
                    const _0x1821a9 = _0x5465aa.slice(0, -1);
                    const _0x43f5ff = _0x1821a9[_0x1821a9.length - 1];
                    const _0x20bf8b = _0x3954fb[_0x43f5ff];
                    if (!_0x20bf8b) {
                      return false;
                    }
                    try {
                      const _0x3854d2 = {
                        editKey: _0x1d4dce[_0x33423c].key,
                        menus: _0x3954fb,
                        history: _0x1821a9
                      };
                      await _0x171ccc(_0x256bc5, _0x3532a5, _0x20bf8b.text, _0x20bf8b.options, _0x3854d2);
                    } catch (_0x25077a) {
                      console.error("Erro ao criar menu anterior:", _0x25077a);
                    }
                    return true;
                  } else {
                    if (_0x19c20e.close) {
                      if (_0x19c20e.text) {
                        const _0x214810 = {
                          text: _0x19c20e.text,
                          edit: _0x1d4dce[_0x33423c].key
                        };
                        await _0x3b3c6d.sendMessage(_0x256bc5, _0x214810);
                      }
                      delete _0x1d4dce[_0x33423c];
                      _0x363d78();
                      return true;
                    }
                  }
                }
              }
            }
          }
          _0x363d78();
          return true;
        } catch (_0x4b6954) {
          console.error("Erro ao processar escolha:", _0x4b6954);
          return false;
        }
      }
      _0x4a895f();
      var _0x421738 = _0x1f574b.message?.["conversation"] || _0x1f574b.message?.["viewOnceMessageV2"]?.["message"]?.["imageMessage"]?.["caption"] || _0x1f574b.message?.["viewOnceMessageV2"]?.["message"]?.["videoMessage"]?.["caption"] || _0x1f574b.message?.["imageMessage"]?.["caption"] || _0x1f574b.message?.["videoMessage"]?.["caption"] || _0x1f574b.message?.["extendedTextMessage"]?.["text"] || _0x1f574b.message?.["extendedTextMessage"]?.["conversation"] || _0x1f574b.message?.["viewOnceMessage"]?.["message"]?.["videoMessage"]?.["caption"] || _0x1f574b.message?.["viewOnceMessage"]?.["message"]?.["imageMessage"]?.["caption"] || _0x1f574b.message?.["documentWithCaptionMessage"]?.["message"]?.["documentMessage"]?.["caption"] || _0x1f574b.message?.["buttonsMessage"]?.["imageMessage"]?.["caption"] || _0x1f574b.message?.["buttonsResponseMessage"]?.["selectedButtonId"] || _0x1f574b.message?.["listResponseMessage"]?.["singleSelectReply"]?.["selectedRowId"] || _0x1f574b.message?.["templateButtonReplyMessage"]?.["selectedId"] || _0x1f574b?.["text"] || _0x1f574b.message?.["editedMessage"]?.["message"]?.["protocolMessage"]?.["editedMessage"]?.["extendedTextMessage"]?.["text"] || _0x1f574b.message?.["editedMessage"]?.["message"]?.["protocolMessage"]?.["editedMessage"]?.["imageMessage"]?.["caption"] || _0x1f574b?.["message"]?.["interactiveMessage"]?.["body"] || '';
      if (_0x56a33e && _0x3225f0) {
        if (_0x3c04e4[0].multiprefix) {
          var _0x552df2 = _0x3c04e4[0]?.["prefixos"]["find"](_0x5661a9 => String(_0x421738)?.["trim"]()?.["startsWith"](_0x5661a9)) || _0x3c04e4[0].prefixos[0];
        } else {
          var _0x552df2 = setting.prefix;
        }
      } else {
        if (!_0x56a33e || _0x56a33e && !_0x3225f0) {
          var _0x552df2 = setting.prefix;
        }
      }
      var _0x1c55dc = _0x421738.trim().startsWith(_0x552df2);
      let _0x3a063e = null;
      function _0x312932() {
        if (_0x3a063e) {
          return _0x3a063e;
        }
        try {
          _0x3a063e = {
            'getCommand': BANCOP.prepare("SELECT * FROM sticker_commands WHERE sticker_id = ?"),
            'getAllCommands': BANCOP.prepare("SELECT * FROM sticker_commands"),
            'insertCommand': BANCOP.prepare("INSERT OR REPLACE INTO sticker_commands (sticker_id, command, author, timestamp) VALUES (?, ?, ?, ?)"),
            'deleteCommand': BANCOP.prepare("DELETE FROM sticker_commands WHERE sticker_id = ?"),
            'getFiles': BANCOP.prepare("SELECT id, command, index_num FROM sticker_files WHERE command = ? ORDER BY index_num"),
            'getFile': BANCOP.prepare("SELECT * FROM sticker_files WHERE command = ? AND index_num = ?"),
            'getFileById': BANCOP.prepare("SELECT * FROM sticker_files WHERE id = ?"),
            'insertFile': BANCOP.prepare("INSERT INTO sticker_files (command, index_num, buffer, timestamp) VALUES (?, ?, ?, ?)"),
            'deleteFile': BANCOP.prepare("DELETE FROM sticker_files WHERE id = ?"),
            'deleteFileByCommand': BANCOP.prepare("DELETE FROM sticker_files WHERE command = ? AND index_num = ?"),
            'getMaxIndex': BANCOP.prepare("SELECT MAX(index_num) as max_index FROM sticker_files WHERE command = ?"),
            'countFiles': BANCOP.prepare("SELECT COUNT(*) as count FROM sticker_files WHERE command = ?")
          };
          return _0x3a063e;
        } catch (_0x1030eb) {
          console.error("Erro ao inicializar statements de figurinhas:", _0x1030eb);
          return null;
        }
      }
      function _0x5d6f48(_0x567dd9) {
        return !_0x567dd9 ? null : typeof _0x567dd9 === "string" ? _0x567dd9 : Buffer.from(_0x567dd9).toString("base64");
      }
      async function _0x3fe0a7(_0x434aaa) {
        try {
          let _0x150d90 = null;
          let _0x5eefe3 = {};
          if (_0x434aaa.message?.["extendedTextMessage"]?.["contextInfo"]?.["quotedMessage"]?.["stickerMessage"]) {
            const _0x37370d = _0x434aaa.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage;
            _0x150d90 = !_0x37370d.fileSha256 ? null : typeof _0x37370d.fileSha256 === "string" ? _0x37370d.fileSha256 : Buffer.from(_0x37370d.fileSha256).toString("base64");
            _0x5eefe3 = _0x434aaa.message.extendedTextMessage.contextInfo;
          } else {
            if (_0x434aaa.message?.["stickerMessage"]) {
              _0x150d90 = !_0x434aaa.message.stickerMessage.fileSha256 ? null : typeof _0x434aaa.message.stickerMessage.fileSha256 === "string" ? _0x434aaa.message.stickerMessage.fileSha256 : Buffer.from(_0x434aaa.message.stickerMessage.fileSha256).toString("base64");
              _0x5eefe3 = _0x434aaa.message.stickerMessage.contextInfo || {};
            }
          }
          if (!_0x150d90) {
            return false;
          }
          const _0xfb46f0 = _0x3a063e.getCommand.get(_0x150d90);
          if (!_0xfb46f0) {
            return false;
          }
          let _0x5a12a9 = _0xfb46f0.command;
          if (!_0x5a12a9.startsWith(_0x552df2)) {
            _0x5a12a9 = _0x552df2 + _0x5a12a9;
          }
          const _0x5e98a1 = _0x5eefe3.participant;
          const _0x1a5472 = {
            ..._0x5eefe3
          };
          _0x1a5472.mentionedJid = _0x5e98a1 ? [_0x5e98a1] : [];
          const _0x2aea34 = {
            text: _0x5a12a9,
            contextInfo: _0x1a5472
          };
          const _0x179ebe = {
            extendedTextMessage: _0x2aea34
          };
          _0x434aaa.message = _0x179ebe;
          _0x434aaa._fromSticker = true;
          return true;
        } catch (_0x54bce7) {
          console.error("Erro ao processar figurinha:", _0x54bce7);
          return false;
        }
      }
      async function _0x5c9a61(_0x3d88dc, _0x327c85, _0x19e55c = null) {
        try {
          if (_0x3d88dc.startsWith(_0x552df2)) {
            _0x3d88dc = _0x3d88dc.slice(_0x552df2.length);
          }
          const _0x49588c = await getFileBuffer(_0x327c85, "sticker");
          const _0x5e6fef = {
            success: false,
            message: "Erro ao obter buffer"
          };
          if (!_0x49588c) {
            return _0x5e6fef;
          }
          const _0x312e5f = _0x3a063e.getMaxIndex.get(_0x3d88dc);
          const _0x53009a = _0x312e5f && _0x312e5f.max_index !== null ? _0x312e5f.max_index + 1 : 0;
          const _0x3bb311 = Date.now();
          _0x3a063e.insertFile.run(_0x3d88dc, _0x53009a, _0x49588c, _0x3bb311);
          if (_0x327c85.fileSha256) {
            const _0x24775f = !_0x327c85.fileSha256 ? null : typeof _0x327c85.fileSha256 === "string" ? _0x327c85.fileSha256 : Buffer.from(_0x327c85.fileSha256).toString("base64");
            _0x3a063e.insertCommand.run(_0x24775f, _0x3d88dc, _0x19e55c, _0x3bb311);
          }
          return {
            'success': true,
            'command': _0x3d88dc,
            'index': _0x53009a,
            'isMultiple': _0x53009a > 0
          };
        } catch (_0x5143a1) {
          console.error("Erro ao salvar figurinha:", _0x5143a1);
          const _0xfb155d = {
            success: false,
            message: _0x5143a1.message
          };
          return _0xfb155d;
        }
      }
      async function _0x28892f(_0x4943eb, _0x5375f4, _0xec561c, _0x3edbd7 = {}) {
        try {
          if (_0x4943eb.startsWith(_0x552df2)) {
            _0x4943eb = _0x4943eb.slice(_0x552df2.length);
          }
          const _0x2347e9 = _0x3a063e.getFiles.all(_0x4943eb);
          const _0x59ffc4 = {
            success: false,
            message: "Nenhuma figurinha encontrada"
          };
          if (!_0x2347e9 || _0x2347e9.length === 0) {
            return _0x59ffc4;
          }
          let _0xd7b326;
          if (_0x3edbd7.index && _0x3edbd7.index > 0 && _0x3edbd7.index <= _0x2347e9.length) {
            _0xd7b326 = _0x2347e9[_0x3edbd7.index - 1];
          } else {
            if (_0x3edbd7.random && _0x2347e9.length > 1) {
              _0xd7b326 = _0x2347e9[Math.floor(Math.random() * _0x2347e9.length)];
            } else {
              _0xd7b326 = _0x2347e9[0];
            }
          }
          const _0x127351 = _0x3a063e.getFileById.get(_0xd7b326.id);
          const _0x29d897 = {
            success: false,
            message: "Arquivo não encontrado"
          };
          if (!_0x127351 || !_0x127351.buffer) {
            return _0x29d897;
          }
          const _0x15739e = {
            quoted: _0x3edbd7.quoted || null
          };
          await _0x5375f4.sendMessage(_0xec561c, {
            'sticker': Buffer.from(_0x127351.buffer)
          }, _0x15739e);
          const _0x3166ea = {
            success: true,
            totalStickers: _0x2347e9.length,
            command: _0x4943eb,
            index: _0xd7b326.index_num
          };
          return _0x3166ea;
        } catch (_0x2221ce) {
          console.error("Erro ao enviar figurinha:", _0x2221ce);
          const _0x397a96 = {
            success: false,
            message: _0x2221ce.message
          };
          return _0x397a96;
        }
      }
      function _0x53a3a4(_0x41c9a3) {
        try {
          const _0x19796b = _0x3a063e.getCommand.get(_0x41c9a3);
          const _0x282ffb = {
            success: false,
            message: "Figurinha não encontrada"
          };
          if (!_0x19796b) {
            return _0x282ffb;
          }
          const _0x16f808 = _0x19796b.command;
          const _0x3da4b4 = _0x3a063e.getFiles.all(_0x16f808);
          if (_0x3da4b4.length === 0) {
            return {
              'success': false,
              'message': "Arquivos não encontrados"
            };
          }
          const _0x510506 = _0x3da4b4[0];
          _0x3a063e.deleteFile.run(_0x510506.id);
          _0x3a063e.deleteCommand.run(_0x41c9a3);
          const _0x108820 = {
            success: true,
            command: _0x16f808,
            index: _0x510506.index_num
          };
          return _0x108820;
        } catch (_0x29ab52) {
          console.error("Erro ao remover figurinha:", _0x29ab52);
          const _0x333b04 = {
            success: false,
            message: _0x29ab52.message
          };
          return _0x333b04;
        }
      }
      function _0x1fcac6(_0x47062d, _0x381946) {
        try {
          if (_0x47062d.startsWith(_0x552df2)) {
            _0x47062d = _0x47062d.slice(_0x552df2.length);
          }
          const _0x431231 = _0x3a063e.countFiles.get(_0x47062d);
          const _0x40ba92 = _0x431231 ? _0x431231.count : 0;
          if (_0x40ba92 === 0) {
            return {
              'success': false,
              'message': "Nenhuma figurinha encontrada"
            };
          }
          if (_0x381946 < 0 || _0x381946 >= _0x40ba92) {
            return {
              'success': false,
              'message': "Índice inválido (" + _0x40ba92 + " figurinhas)"
            };
          }
          _0x3a063e.deleteFileByCommand.run(_0x47062d, _0x381946);
          const _0x19a779 = {
            success: true,
            command: _0x47062d,
            index: _0x381946
          };
          return _0x19a779;
        } catch (_0x17707e) {
          console.error("Erro ao remover figurinha:", _0x17707e);
          const _0x5a3419 = {
            success: false,
            message: _0x17707e.message
          };
          return _0x5a3419;
        }
      }
      async function _0x3aa604(_0x5eddbd) {
        if (!_0x5eddbd.message?.["stickerMessage"]) {
          return false;
        }
        const _0x53724f = await _0x3fe0a7(_0x5eddbd);
        if (_0x53724f && _0x5eddbd.message?.["extendedTextMessage"]?.["text"]) {
          const _0x414f66 = _0x5eddbd.message.extendedTextMessage.text;
          _0x421738 = _0x414f66;
          _0x541958 = _0x414f66.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '');
          _0x1c55dc = _0x421738.startsWith(_0x552df2);
          _0x1d8cfd = _0x1c55dc ? _0x541958.slice(1).split(" ")[0] : '';
          return true;
        }
        return false;
      }
      _0x3a063e = _0x312932();
      const _0x3892bb = {
        statements: _0x3a063e,
        normalizeId: _0x5d6f48,
        saveSticker: _0x5c9a61,
        sendSticker: _0x28892f,
        deleteById: _0x53a3a4,
        deleteByCommandAndIndex: _0x1fcac6
      };
      if (_0x1f574b.message?.["stickerMessage"]) {
        await _0x3aa604(_0x1f574b);
      }
      global.prefix;
      global.blocked;
      var _0x36fc16 = _0x1f574b.message?.["conversation"] || _0x1f574b?.["message"]?.["requestPaymentMessage"]?.["noteMessage"]?.["text"] || _0x1f574b?.["message"]?.["requestPaymentMessage"]?.["noteMessage"]?.["extendedTextMessage"]?.["text"] || _0x1f574b.message?.["editedMessage"]?.["message"]?.["protocolMessage"]?.["editedMessage"]?.["imageMessage"]?.["caption"] || _0x1f574b.message?.["editedMessage"]?.["message"]?.["protocolMessage"]?.["editedMessage"]?.["videoMessage"]?.["caption"] || _0x1f574b.message?.["editedMessage"]?.["message"]?.["protocolMessage"]?.["editedMessage"]?.["documentMessage"]?.["caption"] || _0x1f574b.message?.["editedMessage"]?.["message"]?.["protocolMessage"]?.["editedMessage"]?.["conversation"] || _0x1f574b.message?.["viewOnceMessageV2"]?.["message"]?.["imageMessage"]?.["caption"] || _0x1f574b.message?.["viewOnceMessageV2"]?.["message"]?.["videoMessage"]?.["caption"] || _0x1f574b.message?.["viewOnceMessage"]?.["message"]?.["imageMessage"]?.["caption"] || _0x1f574b.message?.["viewOnceMessage"]?.["message"]?.["videoMessage"]?.["caption"] || _0x1f574b.message?.["imageMessage"]?.["caption"] || _0x1f574b.message?.["videoMessage"]?.["caption"] || _0x1f574b.message?.["extendedTextMessage"]?.["text"] || _0x1f574b.message?.["extendedTextMessage"]?.["matchedText"] || _0x1f574b.message?.["extendedTextMessage"]?.["canonicalUrl"] || _0x1f574b.message?.["extendedTextMessage"]?.["conversation"] || _0x1f574b.message?.["documentWithCaptionMessage"]?.["message"]?.["documentMessage"]?.["caption"] || _0x1f574b.message?.["buttonsMessage"]?.["imageMessage"]?.["caption"] || _0x1f574b?.["message"]?.["eventMessage"]?.["name"] || (_0x1f574b?.["message"]?.["pollCreationMessageV3"]?.["name"] ? _0x1f574b?.["message"]?.["pollCreationMessageV3"]?.["name"] + JSON.stringify(_0x1f574b?.["message"]?.["pollCreationMessageV3"]?.["options"]) : '') || '';
      const _0x3d0002 = _0x421738.trim().split(/ +/).slice(1);
      var _0x541958 = _0x421738.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '');
      var _0x1d8cfd = _0x1c55dc ? removeSecondSpace(_0x541958).slice(1).split(" ")[0] : false;
      const _0xc8143e = _0x541958.trim().split(/ +/).slice(1).join(" ");
      const _0x42c9b3 = _0x1d8cfd ? removeSecondSpace(_0x421738.trim()).slice(_0x1d8cfd.length + 1)?.["trim"]() || _0x421738.trim().replace(_0x552df2 + _0x1d8cfd, '') : _0x421738.trim();
      var _0x52e70e = _0x1f574b?.["message"]?.["conversation"] || _0x1f574b?.["message"]?.["extendedTextMessage"]?.["text"] || '';
      var _0x1f33f2 = _0x52e70e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '');
      var _0x14d713 = _0x36fc16.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '');
      const _0x1d5303 = _0x14d713.slice(0).trim().split(/ +/).shift().toLowerCase();
      var _0x5c0540 = _0x56a33e ? groupMetadata?.["participants"] || '' : '';
      try {
        var _0x1d657c = _0x56a33e ? JSON.stringify(groupMetadata).includes(_0x2e4f16) ? _0x2e4f16.includes("status") ? true : _0x3225f0 ? _0x5c0540?.["some"](_0x133c05 => _0x133c05.id === nmrdn_dono2) : true : true : true;
      } catch {}
      const {
        lotus_users: _0x14a628
      } = require("./iniciar.js");
      const _0x50dda3 = _0x56a33e ? getGroupAdmins(_0x5c0540) : '';
      const _0x3873d0 = _0x56a33e ? getMembros(_0x5c0540) : '';
      const _0x50cae4 = setting.numerodono.replace(new RegExp("[()+-/ +/]", 'gi'), '') + "@s.whatsapp.net" || _0x41e1b4;
      let _0xf7e323 = [dono1, dono2, dono3, dono4, dono5, dono6];
      let _0x18d3dd = ['' + _0x50cae4, ..._0xf7e323.filter(_0x515185 => _0x515185 && _0x515185.toString().trim() !== '').map(_0xd405fe => '' + _0xd405fe + "@s.whatsapp.net")];
      async function _0x43c078(_0x3b0a76, _0x3f8f3c, _0x3542c7) {
        try {
          if (_0x1f574b.key.fromMe) {
            return true;
          }
          if (_0x14a628.includes(_0x3b0a76)) {
            return true;
          }
          if (_0x3b0a76.includes("@s.whatsapp.net")) {
            if (_0x3f8f3c.includes(_0x3b0a76)) {
              return true;
            }
            const _0x61789 = _0x3b0a76.split('@')[0];
            if (!_0x61789) {
              return false;
            }
            return _0x3f8f3c.some(_0x34d6ac => {
              if (!_0x34d6ac || typeof _0x34d6ac !== "string") {
                return false;
              }
              const _0x51093f = _0x34d6ac.split('@')[0];
              return _0x61789 === _0x51093f;
            });
          }
          if (_0x3b0a76.includes("@lid")) {
            const _0xb2ac3e = Date.now();
            if (_0xb2ac3e - global.donosCacheTimestamp < 600000) {
              if (global.donosCache.has(_0x3b0a76)) {
                return global.donosCache.get(_0x3b0a76);
              }
            } else {
              global.donosCache.clear();
              global.donosCacheTimestamp = _0xb2ac3e;
            }
            for (const _0x5de244 of _0x3f8f3c) {
              if (!_0x5de244 || typeof _0x5de244 !== "string") {
                continue;
              }
              const _0x329a3b = _0x5de244.split('@')[0];
              if (_0x329a3b === '.' || _0x329a3b.length < 10) {
                continue;
              }
              try {
                const _0x214fb4 = await _0x3542c7.onWhatsApp(_0x329a3b);
                if (_0x214fb4 && _0x214fb4.length > 0) {
                  const _0x394e59 = _0x214fb4[0];
                  if (_0x394e59.lid && _0x394e59.lid === _0x3b0a76) {
                    global.donosCache.set(_0x3b0a76, true);
                    return true;
                  }
                }
                await new Promise(_0x398a33 => setTimeout(_0x398a33, 50));
              } catch (_0x15b5b0) {
                console.log("[PERMISSOES] Erro API para " + _0x329a3b + ':', _0x15b5b0.message);
              }
            }
            global.donosCache.set(_0x3b0a76, false);
            return false;
          }
          return false;
        } catch (_0x2c475d) {
          console.error("[PERMISSOES] Erro geral:", _0x2c475d);
          return false;
        }
      }
      const _0x41e1b4 = issupre = ischyt = await _0x43c078(_0x24d1f3, _0x18d3dd, _0x3b3c6d);
      var _0x150b36 = TEXTOS_GERAL.MENSAGENS_DE_AGUARDE[Math.floor(Math.random() * TEXTOS_GERAL.MENSAGENS_DE_AGUARDE.length)];
      const _0x3ba1d5 = {
        espere: '' + _0x150b36,
        successo: "️❬ ✔ ❭ Sucesso 🖤",
        levelon: "❬ ✔ ❭ *leveling* *ativado*",
        leveloff: "❬ X ❭*leveling* *desativado*",
        levelnoton: "❬ X ❭ *leveling não ativado*",
        levelnol: "*error* 0 °-°",
        error: {},
        msg: {}
      };
      _0x3ba1d5.error.stick = "*falhou, tente novamente ^_^*";
      _0x3ba1d5.error.Iv = "Link invalido ☹️";
      _0x3ba1d5.msg.grupo = "[❗] Este comando só pode ser usado em grupos! ❌";
      _0x3ba1d5.msg.premium = "[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*";
      _0x3ba1d5.msg.mod = "[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD " + setting.NickDono + '*';
      _0x3ba1d5.msg.banido = "❌ Você foi banido de utilizar os comandos, entre em contato com o proprietário pra saber o porque ❌";
      _0x3ba1d5.msg.donosmt = "[❗] Este é um recurso especial para o proprietário ❌";
      _0x3ba1d5.msg.donosmt2 = "[❗] Este é um recurso especial para o proprietário ❌";
      _0x3ba1d5.msg.adm = "[❗] Este comando só pode ser usado por administradores de grupo! ❌";
      _0x3ba1d5.msg.Badmin = " [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌";
      enviar = _0x3ba1d5;
      function _0x322e89(_0x567d87) {
        try {
          let _0x2a2900;
          if (_0x56a33e && _0x567d87 && Array.isArray(_0x567d87) && _0x567d87.length > 0 && _0x567d87[0]?.["TemaMenu"]) {
            const _0x50e4f4 = '' + temasMenuPath + _0x567d87[0].TemaMenu + ".json";
            if (fs.existsSync(_0x50e4f4)) {
              const _0x3960eb = JSON.parse(fs.readFileSync(_0x50e4f4));
              _0x2a2900 = _0x3960eb.emoji;
            }
          }
          if (!_0x2a2900) {
            try {
              const _0x4816df = JSON.parse(fs.readFileSync(temasMenuPath + "padrao.json"));
              _0x2a2900 = _0x4816df.emoji;
            } catch (_0x35b2ec) {}
          }
          return _0x2a2900 || setting.EmojiBot;
        } catch (_0x98df40) {
          console.error("Erro ao obter emoji do tema:", _0x98df40);
          return setting.EmojiBot;
        }
      }
      var _0x1a0049 = _0x322e89(_0x3c04e4);
      async function _0x5682e7(_0x2d593f) {
        return _0x1a4a3b(_0x2e4f16, _0x157177, _0x2d593f);
      }
      function _0x6d2212(_0x150d94) {
        fs.writeFileSync("./dados/nescessario.json", JSON.stringify(_0x150d94, null, 2));
      }
      function _0x5c1e1a(_0x330fe0) {
        try {
          const _0x582c22 = Math.floor(Date.now() / 1000);
          const _0x535e54 = getStmt("verify_premium", "SELECT * FROM usuarios_premium WHERE user_id = ? AND status = 'ativo' AND vencimento > ?");
          const _0x88ab74 = _0x535e54.get(_0x330fe0, _0x582c22);
          return !!_0x88ab74;
        } catch (_0x154d74) {
          console.error("Erro ao verificar status premium:", _0x154d74);
          return false;
        }
      }
      function _0x480fe5(_0x1cb7d4, _0x1d6886 = '', _0x1a32f6 = 30, _0x33ce6b = "basico", _0x4b2ad = '') {
        try {
          const _0x250a95 = Math.floor(Date.now() / 1000);
          const _0x3e6f4b = _0x250a95 + _0x1a32f6 * 86400;
          const _0x58e09c = BANCOP.prepare("SELECT * FROM usuarios_premium WHERE user_id = ?").get(_0x1cb7d4);
          if (_0x58e09c) {
            const _0x18cc6e = BANCOP.prepare("\nUPDATE usuarios_premium \nSET vencimento = ?, plano = ?, status = 'ativo', adicionado_por = ?\nWHERE user_id = ?");
            _0x18cc6e.run(_0x3e6f4b, _0x33ce6b, _0x4b2ad, _0x1cb7d4);
            return {
              'sucesso': true,
              'mensagem': "Usuário premium atualizado com sucesso",
              'vencimento': new Date(_0x3e6f4b * 1000).toLocaleString("pt-BR"),
              'plano': _0x33ce6b
            };
          } else {
            const _0x91caf = BANCOP.prepare("\nINSERT INTO usuarios_premium \n(user_id, nome, inicio, vencimento, plano, status, adicionado_por, timestamp_criacao) \nVALUES (?, ?, ?, ?, ?, 'ativo', ?, ?)");
            _0x91caf.run(_0x1cb7d4, _0x1d6886, _0x250a95, _0x3e6f4b, _0x33ce6b, _0x4b2ad, _0x250a95);
            return {
              'sucesso': true,
              'mensagem': "Usuário adicionado como premium com sucesso",
              'vencimento': new Date(_0x3e6f4b * 1000).toLocaleString("pt-BR"),
              'plano': _0x33ce6b
            };
          }
        } catch (_0x303469) {
          console.error("Erro ao adicionar usuário premium:", _0x303469);
          const _0x1099e5 = {
            sucesso: false,
            mensagem: "Erro ao processar operação premium",
            erro: _0x303469.message
          };
          return _0x1099e5;
        }
      }
      function _0x36b596(_0x44fe0c) {
        try {
          const _0x1c4a33 = BANCOP.prepare("\nUPDATE usuarios_premium \nSET status = 'inativo' \nWHERE user_id = ?");
          const _0x2a1388 = _0x1c4a33.run(_0x44fe0c);
          if (_0x2a1388.changes > 0) {
            const _0x24b632 = {
              sucesso: true,
              mensagem: "Status premium removido com sucesso"
            };
            return _0x24b632;
          } else {
            const _0x175074 = {
              sucesso: false,
              mensagem: "Usuário não encontrado ou já não é premium"
            };
            return _0x175074;
          }
        } catch (_0x32228c) {
          console.error("Erro ao remover usuário premium:", _0x32228c);
          const _0x20b3ca = {
            sucesso: false,
            mensagem: "Erro ao processar operação",
            erro: _0x32228c.message
          };
          return _0x20b3ca;
        }
      }
      function _0x291a35(_0x5891fb = true) {
        try {
          let _0x1d0a5f = "SELECT * FROM usuarios_premium";
          if (_0x5891fb) {
            const _0xd23122 = Math.floor(Date.now() / 1000);
            _0x1d0a5f += " WHERE status = 'ativo' AND vencimento > " + _0xd23122;
          }
          _0x1d0a5f += " ORDER BY vencimento DESC";
          const _0x1c656a = BANCOP.prepare(_0x1d0a5f);
          const _0x253b11 = _0x1c656a.all();
          return _0x253b11.map(_0x13fe06 => ({
            'userId': _0x13fe06.user_id,
            'nome': _0x13fe06.nome,
            'plano': _0x13fe06.plano,
            'inicio': new Date(_0x13fe06.inicio * 1000).toLocaleString("pt-BR"),
            'vencimento': new Date(_0x13fe06.vencimento * 1000).toLocaleString("pt-BR"),
            'status': _0x13fe06.status,
            'diasRestantes': Math.floor((_0x13fe06.vencimento - Math.floor(Date.now() / 1000)) / 86400)
          }));
        } catch (_0x1999ac) {
          console.error("Erro ao listar usuários premium:", _0x1999ac);
          return [];
        }
      }
      const _0xe00c8f = _0x1f574b.key.id.length > 21 ? "Android ツ" : _0x1f574b.key.id.substring(0, 2) == '3A' ? "IPhone ｯ" : "WhatsApp web シ";
      const _0x3aa71e = !!_0x1f574b.key.fromMe;
      const _0x4694ac = _0x24d1f3 ? await _0x14d0ed(_0x24d1f3, _0x18d3dd) : false;
      dfndofc = setting.numerodono + "@s.whatsapp.net";
      const _0x116d7b = dfndofc.includes(_0x24d1f3);
      const _0x4e65a9 = _0x50dda3.includes(_0x37d233) || false;
      const _0xe7fb69 = _0x50dda3.includes(_0x24d1f3) || _0x4694ac;
      async function _0x14d0ed(_0x43e362, _0x387b53) {
        try {
          if (!global.donosCache) {
            global.donosCache = new Map();
          }
          if (!global.donosCacheTimestamp) {
            global.donosCacheTimestamp = 0;
          }
          if (!_0x43e362 || typeof _0x43e362 !== "string") {
            console.warn("[SODONO] Sender inválido:", _0x43e362);
            return false;
          }
          if (!_0x387b53 || !Array.isArray(_0x387b53)) {
            console.warn("[SODONO] numerodono inválido:", _0x387b53);
            return false;
          }
          if (_0x3aa71e || _0x41e1b4) {
            return true;
          }
          if (_0x43e362.includes("@s.whatsapp.net")) {
            if (_0x387b53.includes(_0x43e362)) {
              return true;
            }
            const _0x1e0014 = _0x43e362.split('@')[0];
            if (!_0x1e0014) {
              return false;
            }
            return _0x387b53.some(_0x60749d => {
              if (!_0x60749d || typeof _0x60749d !== "string") {
                return false;
              }
              const _0x5d5dae = _0x60749d.split('@')[0];
              return _0x1e0014 === _0x5d5dae;
            });
          }
          if (_0x43e362.includes("@lid")) {
            const _0x219560 = Date.now();
            if (_0x219560 - global.donosCacheTimestamp < 600000) {
              if (global.donosCache.has(_0x43e362)) {
                return global.donosCache.get(_0x43e362);
              }
            } else {
              global.donosCache.clear();
              global.donosCacheTimestamp = _0x219560;
            }
            for (const _0x94d787 of _0x387b53) {
              if (!_0x94d787 || typeof _0x94d787 !== "string") {
                continue;
              }
              const _0xddebcc = _0x94d787.split('@')[0];
              if (_0xddebcc === '.' || _0xddebcc.length < 10) {
                continue;
              }
              try {
                const _0x1652ef = await _0x3b3c6d.onWhatsApp(_0xddebcc);
                if (_0x1652ef && _0x1652ef.length > 0) {
                  const _0xa69c18 = _0x1652ef[0];
                  if (_0xa69c18.lid && _0xa69c18.lid === _0x43e362) {
                    global.donosCache.set(_0x43e362, true);
                    return true;
                  }
                }
                await new Promise(_0x5736c3 => setTimeout(_0x5736c3, 50));
              } catch (_0x31d345) {
                console.log("[SODONO] Erro API para " + _0xddebcc + ':', _0x31d345.message);
              }
            }
            global.donosCache.set(_0x43e362, false);
            return false;
          }
          return false;
        } catch (_0x6d8ebc) {
          console.error("[SODONO] Erro geral:", _0x6d8ebc);
          if (!_0x43e362 || typeof _0x43e362 !== "string" || !_0x387b53 || !Array.isArray(_0x387b53)) {
            return false;
          }
          try {
            const _0x21c027 = _0x43e362.split('@')[0];
            if (!_0x21c027) {
              return false;
            }
            return _0x387b53.some(_0x4a0056 => {
              if (!_0x4a0056 || typeof _0x4a0056 !== "string") {
                return false;
              }
              const _0x131b11 = _0x4a0056.split('@')[0];
              return _0x21c027 === _0x131b11;
            });
          } catch (_0x5aa983) {
            console.error("[SODONO] Erro no fallback:", _0x5aa983);
            return false;
          }
        }
      }
      async function _0x57fb01(_0x5e08b4) {
        return {
          'isPremium': _0x5c1e1a(_0x5e08b4)
        };
      }
      const _0x4ae27a = new Map();
      let _0x4882f7 = _0x4ae27a.get(_0x24d1f3);
      if (!_0x4882f7 || Date.now() - _0x4882f7.timestamp > 300000) {
        _0x4882f7 = {
          ...(await {
            'isPremium': _0x5c1e1a(_0x24d1f3)
          }),
          'timestamp': Date.now()
        };
        _0x4ae27a.set(_0x24d1f3, _0x4882f7);
      }
      const {
        isPremium: _0x1c0083,
        isBanned: _0x509a09
      } = _0x4882f7;
      const _0x32d2c4 = nescessario.verificado;
      const _0x2faa0d = nescessario.consoleoff;
      function _0x22502b(_0x238864) {
        const _0x2fd58d = Math.floor(Date.now() / 1000);
        try {
          const _0xe3f9a4 = BANCOP.prepare("SELECT vencimento FROM aluguel WHERE id_gp = ? LIMIT 1").get(_0x238864);
          return _0xe3f9a4 ? _0xe3f9a4.vencimento > _0x2fd58d : false;
        } catch (_0x26f8e2) {
          console.error("[Aluguel] Erro SQL: " + _0x26f8e2.message);
          return false;
        }
      }
      const _0x501e05 = nescessario?.["rg_aluguelGB"] || _0x3c04e4 && _0x3c04e4[0]?.["rg_aluguel"] || false;
      const _0x5a0897 = _0x22502b(_0x2e4f16);
      const _0x3f8cdf = _0x56a33e ? _0x501e05 && !_0x5a0897 ? false : _0x3c04e4[0]?.["wellcome"][0] ? _0x3c04e4[0].wellcome[0].bemvindo1 : undefined : undefined;
      const _0x252369 = _0x56a33e ? _0x501e05 && !_0x5a0897 ? false : _0x3c04e4[0]?.["wellcome"][1] ? _0x3c04e4[0].wellcome[1].bemvindo2 : undefined : undefined;
      const _0xc04622 = _0x56a33e ? _0x501e05 && !_0x5a0897 ? false : _0x3c04e4[0]?.["simi1"] : undefined;
      const _0x1ca944 = _0x56a33e ? _0x501e05 && !_0x5a0897 ? false : _0x3c04e4[0]?.["simi2"] : undefined;
      const _0x20786c = _0x56a33e ? _0x501e05 && !_0x5a0897 ? false : _0x3c04e4[0]?.["autoresposta"] : undefined;
      const _0xa05c1e = _0x56a33e ? _0x501e05 && !_0x5a0897 ? false : _0x3c04e4[0]?.["jogos"] : undefined;
      const _0x3d4055 = _0x56a33e ? _0x501e05 && !_0x5a0897 ? false : _0x3c04e4[0]?.["autosticker"] : undefined;
      const _0x20a886 = _0x56a33e ? _0x501e05 && !_0x5a0897 ? false : _0x3c04e4[0]?.["nsfw"] : undefined;
      var _0x30a048 = _0x56a33e ? _0x3c04e4[0].recolherlinkgp : undefined;
      const _0x4b9f62 = _0x56a33e ? _0x3c04e4[0].multiprefix : undefined;
      const _0x4d3813 = _0x56a33e ? _0x3c04e4[0].bangp : undefined;
      var _0x51e13b = _0x150b36;
      var _0x4e7aa2 = TEXTOS_GERAL.MENSAGEM_DE_SO_USAR_EM_GRUPO;
      var _0x4dc99d = TEXTOS_GERAL.MENSAGEM_DE_SO_DONO_USAR_COMANDOS;
      var _0x43cd5f = TEXTOS_GERAL.MENSAGEM_DOS_ANTI_LINKS;
      var _0x4166a9 = TEXTOS_GERAL.MENSAGEM_DE_SO_ADM_CONSEGUIR_USAR_X_COMANDO;
      var _0x166dc3 = TEXTOS_GERAL.MENSAGEM_DE_QUANDO_O_BOT_NAO_E_ADM;
      var _0x4faeb6 = TEXTOS_GERAL.MENSAGEM_DE_SO_QUANDO_MODO_BRINCADEIRA_FOR_ATIVO.replaceAll("#prefixo#", _0x552df2);
      let _0x246af0;
      if (_0x32d2c4) {
        const _0x1fd734 = {
          remoteJid: "status@broadcast"
        };
        const _0xa10967 = {
          'fromMe': false,
          'participant': "0@s.whatsapp.net",
          ...(_0x2e4f16 ? _0x1fd734 : {})
        };
        const _0x2688b9 = {
          url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
          mimetype: "image/jpeg",
          caption: '' + NomeDoBot
        };
        const _0x24f5f7 = {
          imageMessage: _0x2688b9
        };
        const _0x31df20 = {
          key: _0xa10967,
          message: _0x24f5f7
        };
        _0x246af0 = _0x31df20;
      } else {
        _0x246af0 = _0x1f574b;
      }
      const _0x2dddf1 = _0x1f574b.message?.["extendedTextMessage"]?.["contextInfo"]?.["participant"];
      const _0x409451 = _0x3d0002?.["join"](" ")["replace"]('@', '') + "@s.whatsapp.net";
      const _0x14615b = _0x1f574b.message?.["extendedTextMessage"]?.["contextInfo"]?.["mentionedJid"];
      const _0x3065ec = _0x42c9b3.includes('@') ? _0x409451 : _0x24d1f3;
      const _0xa2d224 = _0x42c9b3.includes('@') ? _0x14615b?.["length"] > 0 ? _0x14615b[0] : false : _0x2dddf1;
      const _0x1df276 = JSON.parse(fs.readFileSync("./dados/org/json/legendafig.json"));
      const _0x44f148 = _0x1df276.FigAuthor.replaceAll("#Nome#", _0x41e4e0).replaceAll("#NomeDoGp#", _0x26d2bb).replaceAll("#NomeDoBot#", NomeDoBot).replaceAll("#Dono#", NickDono).slice(0, 200);
      const _0x3edb74 = _0x1df276.FigPack.replaceAll("#Nome#", _0x41e4e0).replaceAll("#NomeDoGp#", _0x26d2bb).replaceAll("#NomeDoBot#", NomeDoBot).replaceAll("#Dono#", NickDono).slice(0, 200);
      if (_0x56a33e && _0x1c55dc && _0x4d3813 && !_0x4694ac) {
        return;
      }
      if (nescessario?.["botoff"] && !_0x4694ac) {
        return;
      }
      if (_0x1f574b.key.fromMe && _0x1f574b.participant && _0x1f574b.participant.includes(':')) {
        continue;
      }
      var _0x29cb1e = _0x70c7bc => {
        return linkfy.find(_0x70c7bc)[0]?.["isLink"];
      };
      const _0x187940 = _0x5d5175 => {
        if (linkfy.find(_0x5d5175)[0]?.["isLink"]) {
          return linkfy.find(_0x5d5175)[0].href;
        } else {
          return false;
        }
      };
      const _0x42aca2 = _0x1b85d2 => {
        const _0x3cf803 = {
          text: _0x1b85d2
        };
        const _0x4e2525 = {
          quoted: _0x1f574b
        };
        _0x3b3c6d.sendMessage(_0x2e4f16, _0x3cf803, _0x4e2525)["catch"](_0x5d0c6f => {
          console.log(_0x5d0c6f);
          return _0x42aca2("Erro..");
        });
      };
      const _0x362d07 = moment().tz("America/Sao_Paulo").hour();
      var _0x56b9eb;
      if (_0x362d07 >= 0 && _0x362d07 < 5) {
        _0x56b9eb = "Boa madrugada";
      } else {
        if (_0x362d07 >= 5 && _0x362d07 < 12) {
          _0x56b9eb = "Bom dia";
        } else {
          if (_0x362d07 >= 12 && _0x362d07 < 18) {
            _0x56b9eb = "Boa tarde";
          } else {
            _0x56b9eb = "Boa noite";
          }
        }
      }
      const _0x57d304 = (_0x2272d1, _0x5a1e5b, _0x55db37) => {
        const _0x17948b = {
          url: fileName
        };
        const _0x5ed81b = {
          sticker: _0x17948b
        };
        const _0x4f5a04 = {
          quoted: _0x55db37
        };
        _0x3b3c6d.sendMessage(_0x2272d1, _0x5ed81b, _0x4f5a04);
      };
      const _0x2b7d51 = (_0x19b7a3, _0x181b5d, _0x335738) => {
        if (_0x335738 == null || _0x335738 == undefined || _0x335738 == false) {
          _0x3b3c6d.sendMessage(_0x2e4f16, {
            'text': _0x19b7a3.trim(),
            'mentions': _0x181b5d
          });
        } else {
          _0x3b3c6d.sendMessage(_0x2e4f16, {
            'text': _0x19b7a3.trim(),
            'mentions': _0x181b5d
          });
        }
      };
      const _0x309aff = (_0x27023e = '', _0x1b729e = _0x1f574b) => {
        memberr = [];
        vy = _0x27023e.includes("\n") ? _0x27023e.split("\n") : [_0x27023e];
        for (vz of vy) {
          for (zn of vz.split(" ")) {
            if (zn.includes('@')) {
              memberr.push(parseInt(zn.split('@')[1]) + "@s.whatsapp.net");
            }
          }
        }
        const _0x1f8cd0 = {
          quoted: _0x1b729e
        };
        _0x3b3c6d.sendMessage(_0x2e4f16, {
          'text': _0x27023e.trim(),
          'mentions': memberr
        }, _0x1f8cd0);
      };
      const _0x91be61 = (_0xb806df = '') => {
        memberr = [];
        vy = _0xb806df.includes("\n") ? _0xb806df.split("\n") : [_0xb806df];
        for (vz of vy) {
          for (zn of vz.split(" ")) {
            if (zn.includes('@')) {
              memberr.push(parseInt(zn.split('@')[1]) + "@s.whatsapp.net");
            }
          }
        }
        _0x3b3c6d.sendMessage(_0x2e4f16, {
          'text': _0xb806df.trim(),
          'mentions': memberr
        });
      };
      const _0x148433 = (_0x51414f = '', _0x3d2092, _0x235076 = _0x1f574b) => {
        memberr = [];
        vy = _0x51414f.includes("\n") ? _0x51414f.split("\n") : [_0x51414f];
        for (vz of vy) {
          for (zn of vz.split(" ")) {
            if (zn.includes('@')) {
              memberr.push(parseInt(zn.split('@')[1]) + "@s.whatsapp.net");
            }
          }
        }
        const _0x2dc0fd = {
          url: _0x3d2092
        };
        const _0x55f586 = {
          quoted: _0x235076
        };
        _0x3b3c6d.sendMessage(_0x2e4f16, {
          'image': _0x2dc0fd,
          'caption': _0x51414f.trim(),
          'mentions': memberr
        }, _0x55f586);
      };
      const _0x23bc77 = async (_0x5d2c9e, _0xa67ff) => {
        const _0x3e59bc = {
          text: _0xa67ff,
          key: _0x1f574b.key
        };
        const _0x926bb3 = {
          react: _0x3e59bc
        };
        _0x3b3c6d.sendMessage(_0x5d2c9e, _0x926bb3);
      };
      const _0xad7c84 = async _0x3a801c => {
        const [_0x5e3b51] = await _0x3b3c6d.onWhatsApp(_0x3a801c);
        if (_0x5e3b51 == undefined) {
          _0x42aca2("Este usuário não é existente no WhatsApp");
        } else {
          _0x42aca2("-> " + _0x3a801c + " Número inserido é existente no WhatsApp.\n\ncom o id: " + _0x5e3b51.jid);
        }
      };
      if (_0x3d4055 && _0x56a33e) {
        async function _0x1ac8c9() {
          setTimeout(async () => {
            if (_0x52e70e.includes(_0x552df2 + "sticker") || _0x52e70e.includes(_0x552df2 + 's') || _0x52e70e.includes(_0x552df2 + "stk") || _0x52e70e.includes(_0x552df2 + 'st') || _0x52e70e.includes(_0x552df2 + "fsticker") || _0x52e70e.includes(_0x552df2 + 'f') || _0x52e70e.includes(_0x552df2 + "fstiker")) {
              return;
            }
            if (_0x476b60 == "imageMessage") {
              var _0x41ccea = "⚝ ⇝ Grupo:\n" + _0x26d2bb;
              var _0x3f54d4 = '⚒' + _0x41e4e0 + "\n⚒" + NomeDoBot + "\n" + NickDono;
              owgi = await getFileBuffer(_0x1f574b.message.imageMessage, "image");
              const _0xf4cdc4 = {
                packname: _0x41ccea,
                author: _0x3f54d4
              };
              let _0x60d887 = await sendImageAsSticker2(_0x3b3c6d, _0x2e4f16, owgi, _0x1f574b, _0xf4cdc4);
              DLT_FL(_0x60d887);
            }
            if (_0x476b60 == "videoMessage") {
              if (_0x1bce37 && _0x1f574b.message.videoMessage.seconds < 10) {
                var _0x41ccea = "⚝ ⇝ Grupo:\n" + _0x26d2bb;
                var _0x3f54d4 = '⚒' + _0x41e4e0 + "\n⚒" + NomeDoBot + "\n⚒" + NickDono;
                owgi = await getFileBuffer(_0x1f574b.message.videoMessage, "video");
                const _0x39e759 = {
                  packname: _0x41ccea,
                  author: _0x3f54d4
                };
                let _0x5e2a5b = await sendVideoAsSticker2(_0x3b3c6d, _0x2e4f16, owgi, _0x1f574b, _0x39e759);
                DLT_FL(_0x5e2a5b);
              }
            }
          }, 1000);
        }
        _0x1ac8c9()["catch"](_0x4942a7 => {
          console.log(_0x4942a7);
        });
      }
      var _0x143995 = setting.numerodono.replace(new RegExp("[()+-/ +/]", 'gi'), '');
      if (_0x56a33e && _0x14615b?.["length"] > 0) {
        const _0x3ca3fc = numerodono_ofc.replace(new RegExp("[()+-/ +/]", 'gi'), '');
        if (_0x52e70e.indexOf('@' + _0x3ca3fc) >= 0) {
          const _0x4ba84a = BANCOP.prepare("SELECT motivo, datetime(timestamp, 'unixepoch', 'localtime') as ausente_desde FROM sistema_afk WHERE user_id = ? AND is_dono = 1");
          const _0x1fd87a = _0x4ba84a.get(nmrdn_dono2);
          if (_0x1fd87a) {
            const _0x1b2854 = "╭「 📢 𝙽𝙾𝚃𝙸𝙵𝙸𝙲𝙰𝙲̧𝙰̃𝙾 𝙳𝙴 𝙰𝚄𝚂𝙴̂𝙽𝙲𝙸𝙰 」╮\n┃\n┃ 👑 *" + NickDono + "* está ausente no momento\n┃\n┃ ⏰ *Ausente desde:* " + _0x1fd87a.ausente_desde + "\n┃ \n┃ 📝 *Mensagem:*\n┃ " + _0x1fd87a.motivo + "\n┃\n╰━━━━━━━━━━━━━━━━━━━━━━╯";
            const _0x67320d = {
              text: _0x1b2854
            };
            const _0xe472e = {
              quoted: _0x1f574b
            };
            _0x3b3c6d.sendMessage(_0x2e4f16, _0x67320d, _0xe472e);
          }
        }
      }
      if (_0x56a33e && _0x14615b?.["length"] > 0) {
        let _0x1d67b6 = [];
        for (const _0x17b959 of _0x14615b) {
          if (_0x50dda3.includes(_0x17b959)) {
            _0x1d67b6.push(_0x17b959);
          }
        }
        if (_0x1d67b6.length > 0) {
          for (const _0x3c9ce7 of _0x1d67b6) {
            const _0x400421 = BANCOP.prepare("SELECT motivo FROM sistema_afk WHERE user_id = ? AND grupo_id = ? AND is_dono = 0");
            const _0x4117eb = _0x400421.get(_0x3c9ce7, _0x2e4f16);
            if (_0x4117eb) {
              const _0x49bd47 = _0x3c9ce7.split('@')[0];
              const _0x44da11 = "╭「 📢 𝙽𝙾𝚃𝙸𝙵𝙸𝙲𝙰𝙲̧𝙰̃𝙾 𝙳𝙴 𝙰𝚄𝚂𝙴̂𝙽𝙲𝙸𝙰 」╮\n┃\n┃ 👮‍♂️ *Admin @" + _0x49bd47 + "* está ausente\n┃\n┃ 📝 *Mensagem deixada:* \n┃ " + _0x4117eb.motivo + "\n┃\n┃ 🔔 Esta mensagem aparece quando você\n┃menciona um usuário ausente\n┃\n╰━━━━━━━━━━━━━━━━━━━━━━╯";
              _0x309aff(_0x44da11);
            }
          }
        }
      }
      if (_0x4e65a9 && _0xe7fb69 && _0x421738.toLowerCase() === "apaga" && _0x2dddf1) {
        _0x23bc77(_0x2e4f16, _0x1a0049);
        _0x3b3c6d.sendMessage(_0x2e4f16, {
          'delete': {
            'remoteJid': _0x2e4f16,
            'fromMe': false,
            'id': _0x1f574b.message.extendedTextMessage.contextInfo.stanzaId,
            'participant': _0x2dddf1
          }
        });
      }
      const _0x31e205 = async (_0x5e0ab9, _0xf88cb2) => {
        try {
          var _0x305597 = Date.now() / 10000;
          var _0x52f71f = function (_0x1f4140, _0x52c024, _0x2d6afd) {
            request.head(_0x1f4140, function (_0x5e72a1, _0x5671e3, _0x11b0ae) {
              request(_0x1f4140).pipe(fs.createWriteStream(_0x52c024)).on("close", _0x2d6afd);
            });
          };
          _0x52f71f(_0xf88cb2, "./sticker" + _0x305597 + ".png", async function () {
            console.log("enviando sticker");
            let _0x381a4a = "./sticker" + _0x305597 + ".png";
            let _0x5160bb = "./sticker" + _0x305597 + ".webp";
            exec("ffmpeg -i " + _0x381a4a + " -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 " + _0x5160bb, _0x28dc94 => {
              let _0x11e4c3 = fs.readFileSync(_0x5160bb);
              const _0x315f7c = {
                sticker: _0x11e4c3
              };
              const _0x4263f5 = {
                forwardingScore: 0x32,
                isForwarded: true
              };
              const _0x4491df = {
                sendEphemeral: true,
                contextInfo: _0x4263f5,
                quoted: _0x1f574b
              };
              _0x3b3c6d.sendMessage(_0x5e0ab9, _0x315f7c, _0x4491df)["catch"](_0x8931f0 => {
                return _0x42aca2("Erro..");
              });
              DLT_FL(_0x381a4a);
              DLT_FL(_0x5160bb);
            });
          });
        } catch {
          return _0x42aca2("Erro.. FNC");
        }
      };
      function _0x11bcf4(_0x1299f8, _0x43b27b, _0x1a1691, _0x360429) {
        const _0x6b9198 = _0x1299f8.message;
        const _0x17fbf5 = _0x6b9198?.["extendedTextMessage"];
        const _0x326e88 = _0x17fbf5?.["contextInfo"]?.["quotedMessage"];
        const _0x21f9f4 = _0x43b27b === "extendedTextMessage";
        const _0x746226 = {
          imageMessage: "Image",
          videoMessage: "Video",
          audioMessage: "Audio",
          stickerMessage: "Sticker",
          contactMessage: "Contact",
          locationMessage: "Location",
          productMessage: "Product"
        };
        const _0x54ccfa = {};
        Object.keys(_0x746226).forEach(_0x335096 => {
          const _0x7e7153 = 'is' + _0x746226[_0x335096];
          _0x54ccfa[_0x7e7153] = _0x43b27b === _0x335096;
        });
        const _0x2e4ec0 = {};
        const _0x45f07b = {};
        if (_0x21f9f4 && _0x326e88) {
          _0x2e4ec0.isQuotedMsg = _0x1a1691.includes("conversation");
          _0x2e4ec0.isQuotedMsg2 = _0x1a1691.includes("text");
          Object.keys(_0x746226).forEach(_0x44692f => {
            const _0x5b7455 = "isQuoted" + _0x746226[_0x44692f];
            _0x2e4ec0[_0x5b7455] = _0x1a1691.includes(_0x44692f);
            const _0x3fa4eb = "quoted" + _0x746226[_0x44692f];
            _0x45f07b[_0x3fa4eb] = _0x2e4ec0[_0x5b7455] ? _0x326e88[_0x44692f] : null;
          });
          _0x2e4ec0.isQuotedDocument = _0x1a1691.includes("documentMessage");
          _0x2e4ec0.isQuotedDocW = _0x1a1691.includes("documentWithCaptionMessage");
          _0x2e4ec0.isQuotedViewOnceImage = (_0x1a1691.includes("viewOnceMessage") || _0x1a1691.includes("viewOnceMessageV2")) && _0x1a1691.includes("imageMessage");
          _0x2e4ec0.isQuotedViewOnceVideo = (_0x1a1691.includes("viewOnceMessage") || _0x1a1691.includes("viewOnceMessageV2")) && _0x1a1691.includes("videoMessage");
          _0x45f07b.quotedDocument = _0x2e4ec0.isQuotedDocument ? _0x326e88.documentMessage : null;
          _0x45f07b.quotedDocW = _0x2e4ec0.isQuotedDocW ? _0x326e88.documentWithCaptionMessage : null;
          _0x45f07b.quotedMsg = _0x2e4ec0.isQuotedMsg ? _0x326e88.conversation : null;
          _0x45f07b.quotedMsg2 = _0x2e4ec0.isQuotedMsg2 ? _0x326e88.text : null;
          _0x45f07b.quotedMsg3 = _0x2e4ec0.isQuotedMsg ? _0x17fbf5.contextInfo : null;
        }
        const _0xef3227 = _0x6b9198?.["imageMessage"] || _0x326e88?.["imageMessage"] || _0x6b9198?.["viewOnceMessageV2"]?.["message"]?.["imageMessage"] || _0x326e88?.["viewOnceMessageV2"]?.["message"]?.["imageMessage"] || _0x6b9198?.["viewOnceMessage"]?.["message"]?.["imageMessage"] || _0x326e88?.["viewOnceMessage"]?.["message"]?.["imageMessage"] || _0x45f07b.quotedImage;
        const _0x37bb47 = _0x6b9198?.["videoMessage"] || _0x326e88?.["videoMessage"] || _0x6b9198?.["viewOnceMessageV2"]?.["message"]?.["videoMessage"] || _0x326e88?.["viewOnceMessageV2"]?.["message"]?.["videoMessage"] || _0x6b9198?.["viewOnceMessage"]?.["message"]?.["videoMessage"] || _0x326e88?.["viewOnceMessage"]?.["message"]?.["videoMessage"] || _0x45f07b.quotedVideo;
        return {
          ..._0x54ccfa,
          'isMedia': ["imageMessage", "videoMessage", "audioMessage"].includes(_0x43b27b),
          'typeMessage': _0x746226[_0x43b27b] || _0x360429.substr(0, 50).replace(/\n/g, ''),
          ..._0x2e4ec0,
          ..._0x45f07b,
          'allImageMessage': _0xef3227,
          'allVideoMessage': _0x37bb47,
          'hasAnyImage': !!_0xef3227,
          'hasAnyVideo': !!_0x37bb47
        };
      }
      const _0x54dffd = _0x11bcf4(_0x1f574b, _0x476b60, _0x31a2b4, _0x421738);
      const {
        isImage: _0xbe95ba,
        isVideo: _0x233c37,
        isAudio: _0x1e9823,
        isSticker: _0x273afa,
        isContact: _0x56f352,
        isLocation: _0x5f3efc,
        isProduct: _0x451f0a,
        isMedia: _0x1bce37,
        typeMessage: _0x1a148e,
        isQuotedMsg: _0x2dbbaf,
        isQuotedMsg2: _0x44d3db,
        isQuotedImage: _0x233c5e,
        isQuotedVideo: _0x575ab2,
        isQuotedDocument: _0x42735d,
        isQuotedDocW: _0x3cff4e,
        isQuotedAudio: _0x332ca8,
        isQuotedSticker: _0x17b069,
        isQuotedContact: _0x6b0047,
        isQuotedLocation: _0x41e8e8,
        isQuotedProduct: _0x2e1f5a,
        isQuotedViewOnceImage: _0x314a23,
        isQuotedViewOnceVideo: _0x54aeae,
        quotedMsg: _0x35273b,
        quotedMsg2: _0x38b37c,
        quotedMsg3: _0x418390,
        quotedImage: _0x264dfe,
        quotedVideo: _0x5a4daa,
        quotedDocument: _0x35631e,
        quotedDocW: _0x1a2069,
        quotedAudio: _0x97970b,
        quotedSticker: _0x14a82d,
        quotedContact: _0x329fb4,
        quotedLocation: _0x2b72a8,
        quotedProduct: _0x5d47c3,
        allImageMessage: _0x37d52d,
        allVideoMessage: _0x515be2,
        hasAnyImage: _0x5e7226,
        hasAnyVideo: _0x2b8826
      } = _0x54dffd;
      if (_0x2faa0d) {
        let _0x3af607 = "┅❆─━─━─━─━─━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ" + _0x1a0049 + "❀⃘࣭࣭࣭࣭ꔷ⃔໑࣭࣭ٜ𖧹•─━─━─━─━─━❆┅";
        let _0x1e49a5 = ["╏ 〔 " + colors[_0x1b6438]("USUÁRIO") + " 〕: 「 " + colors[_0x1b6438](_0x41e4e0) + " 」\n╏", "╏ 〔 " + colors[_0x1b6438]("NÚMERO") + " 〕: 「 " + colors[_0x1b6438](_0x21f527) + " 」\n╏"];
        let _0x4c62b3 = [];
        if (_0x56a33e) {
          _0x4c62b3.push("╏ 〔 " + colors[_0x1b6438]("GRUPO") + " 〕: 「 " + colors[_0x1b6438](_0x26d2bb) + " 」\n╏");
        } else {
          _0x4c62b3.push("╏ 「 " + colors.brightRed("PRIVADO") + " 」\n╏");
        }
        if (_0x1c55dc) {
          _0x4c62b3.push("╏ 〔 " + colors[_0x1b6438]("COMANDO") + " 〕: 「 " + colors[_0x1b6438](_0x1d8cfd) + " 」\n╏");
        }
        if (_0x56a33e && _0x1f574b.message?.["reactionMessage"]?.["text"]) {
          _0x4c62b3.push("╏ 〔 REAÇÃO 〕: 〔 " + _0x1f574b.message.reactionMessage.text + " 〕\n╏");
        }
        let _0xca8c4 = ['╭' + _0x3af607 + '╮', '╏', ..._0x1e49a5, ..._0x4c62b3, '╰' + _0x3af607 + '╯'].join("\n");
        const _0x3b4e67 = require("chalk");
        console.log(_0x3b4e67.hex("#800080")(_0xca8c4));
      }
      const _0x56b443 = require("./outros/funcoes/velha.js");
      async function _0x505163() {
        try {
          const _0x3d95a2 = _0x52e70e.toLowerCase().split(" ")[0] || '';
          let _0x91c17 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
          if (_0x91c17.includes(_0x3d95a2)) {
            if (!_0x56b443.gameExists(BANCOP, _0x2e4f16)) {
              return;
            }
            const _0x24771e = _0x56b443.setGame(BANCOP, _0x2e4f16);
            if (!_0x24771e.status) {
              return _0x42aca2("⏳ 𝗣𝗘𝗡𝗗𝗘𝗡𝗧𝗘: 𝐒𝐞𝐮 𝐨𝐩𝐨𝐧𝐞𝐧𝐭𝐞 𝐚𝐢𝐧𝐝𝐚 𝐧𝐚̃𝐨 𝐚𝐜𝐞𝐢𝐭𝐨𝐮 𝐨 𝐝𝐞𝐬𝐚𝐟𝐢𝐨...");
            }
            if (_0x24771e.timestamp) {
              const _0x2fe2d3 = Math.floor(Date.now() / 1000);
              const _0x2b9215 = _0x2fe2d3 - _0x24771e.timestamp;
              if (_0x2b9215 > 120) {
                _0x56b443.deleteGame(BANCOP, _0x2e4f16);
                return _0x42aca2("⏱️ 𝐓𝐈𝐌𝐄 𝐎𝐔𝐓! ⏱️\n\n𝐎 𝐣𝐨𝐠𝐨 𝐝𝐚 𝐯𝐞𝐥𝐡𝐚 𝐞𝐧𝐭𝐫𝐞 @" + _0x24771e.X + " 𝐞 @" + _0x24771e.O + " 𝐟𝐨𝐢 𝐚𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐜𝐚𝐦𝐞𝐧𝐭𝐞 𝐞𝐧𝐜𝐞𝐫𝐫𝐚𝐝𝐨 𝐩𝐨𝐫 𝐢𝐧𝐚𝐭𝐢𝐯𝐢𝐝𝐚𝐝𝐞.");
              }
            }
            if ((_0x24771e.turn == 'X' ? _0x24771e.X : _0x24771e.O) != _0x24d1f3.replace("@s.whatsapp.net", '')) {
              return;
            }
            _0x24771e.timestamp = Math.floor(Date.now() / 1000);
            _0x56b443.saveGame(BANCOP, _0x24771e, _0x2e4f16);
            const _0x102741 = _0x56b443.validmove(BANCOP, Number(_0x52e70e), _0x2e4f16);
            const _0x20e771 = _0x102741._matrix;
            const _0x4ecb1a = _0x4b7a57 => {
              const _0xb8d675 = _0x1371b7 => {
                if (_0x1371b7 === '❌') {
                  return " ❌ ";
                } else {
                  if (_0x1371b7 === '⭕') {
                    return " ⭕ ";
                  } else {
                    if (_0x1371b7 === "1️⃣") {
                      return " 1️⃣ ";
                    } else {
                      if (_0x1371b7 === "2️⃣") {
                        return " 2️⃣ ";
                      } else {
                        if (_0x1371b7 === "3️⃣") {
                          return " 3️⃣ ";
                        } else {
                          if (_0x1371b7 === "4️⃣") {
                            return " 4️⃣ ";
                          } else {
                            if (_0x1371b7 === "5️⃣") {
                              return " 5️⃣ ";
                            } else {
                              if (_0x1371b7 === "6️⃣") {
                                return " 6️⃣ ";
                              } else {
                                if (_0x1371b7 === "7️⃣") {
                                  return " 7️⃣ ";
                                } else {
                                  if (_0x1371b7 === "8️⃣") {
                                    return " 8️⃣ ";
                                  } else {
                                    if (_0x1371b7 === "9️⃣") {
                                      return " 9️⃣ ";
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                return _0x1371b7;
              };
              return "┏━━━━━━━━━━━━━┓\n┃" + _0xb8d675(_0x4b7a57[0][0]) + '┃' + _0xb8d675(_0x4b7a57[0][1]) + '┃' + _0xb8d675(_0x4b7a57[0][2]) + "┃\n┃━━━━━━━━━━━━━┃\n┃" + _0xb8d675(_0x4b7a57[1][0]) + '┃' + _0xb8d675(_0x4b7a57[1][1]) + '┃' + _0xb8d675(_0x4b7a57[1][2]) + "┃\n┃━━━━━━━━━━━━━┃\n┃" + _0xb8d675(_0x4b7a57[2][0]) + '┃' + _0xb8d675(_0x4b7a57[2][1]) + '┃' + _0xb8d675(_0x4b7a57[2][2]) + "┃\n┗━━━━━━━━━━━━━┛";
            };
            if (_0x102741.isWin) {
              if (_0x102741.winner == "SERI") {
                const _0xc799e6 = "╔━━━━━━━━━━━━━━━━━━━━━╗\n┃🎮 𝐉𝐎𝐆𝐎 𝐃𝐀 𝐕𝐄𝐋𝐇𝐀 🎮┃\n╠━━━━━━━━━━━━━━━━━━━━━╣\n┃ 🤝 𝐄𝐌𝐏𝐀𝐓𝐄! 🤝 ┃\n╚━━━━━━━━━━━━━━━━━━━━━╝\n\n" + _0x4ecb1a(_0x20e771) + "\n\n𝐎 𝐣𝐨𝐠𝐨 𝐭𝐞𝐫𝐦𝐢𝐧𝐨𝐮 𝐞𝐦𝐩𝐚𝐭𝐚𝐝𝐨! 𝐁𝐨𝐚 𝐩𝐚𝐫𝐭𝐢𝐝𝐚, @" + _0x102741.X + " 𝐞 @" + _0x102741.O + '!';
                _0x42aca2(_0xc799e6);
                _0x56b443.deleteGame(BANCOP, _0x2e4f16);
                return;
              }
              const _0x20a8a4 = _0x102741.winner == 'O' ? _0x102741.O : _0x102741.X;
              const _0x25e088 = _0x102741.winner == 'O' ? _0x102741.X : _0x102741.O;
              const _0x13bc57 = _0x102741.winner == 'O' ? '⭕' : '❌';
              const _0x1282c9 = "╔━━━━━━━━━━━━━━━━━━━━━╗\n┃🎮 𝐉𝐎𝐆𝐎 𝐃𝐀 𝐕𝐄𝐋𝐇𝐀 🎮┃\n╠━━━━━━━━━━━━━━━━━━━━━╣\n┃🏆 𝐕𝐈𝐓Ó𝐑𝐈𝐀! 🏆 ┃\n╚━━━━━━━━━━━━━━━━━━━━━╝\n\n" + _0x4ecb1a(_0x20e771) + "\n\n" + '👑' + " 𝐂𝐀𝐌𝐏𝐄Ã𝐎: @" + _0x20a8a4 + " " + _0x13bc57 + "\n\n" + '🎉' + " 𝐏𝐀𝐑𝐀𝐁É𝐍𝐒! 𝐕𝐨𝐜ê 𝐯𝐞𝐧𝐜𝐞𝐮 𝐚 𝐩𝐚𝐫𝐭𝐢𝐝𝐚 𝐜𝐨𝐧𝐭𝐫𝐚 @" + _0x25e088;
              _0x309aff(_0x1282c9);
              _0x56b443.deleteGame(BANCOP, _0x2e4f16);
            } else {
              const _0xc7d926 = _0x102741.turn == 'X' ? _0x102741.X : _0x102741.O;
              const _0x165d27 = _0x102741.turn == 'X' ? '❌' : '⭕';
              const _0x5b77de = "╔━━━━━━━━━━━━━━━━━━━━━╗\n┃🎮 𝐉𝐎𝐆𝐎 𝐃𝐀 𝐕𝐄𝐋𝐇𝐀 🎮┃\n╠━━━━━━━━━━━━━━━━━━━━━╣\n┃🎯 𝐏𝐀𝐑𝐓𝐈𝐃𝐀 🎯┃\n╚━━━━━━━━━━━━━━━━━━━━━╝\n\n" + _0x4ecb1a(_0x20e771) + "\n\n" + '❌' + " : @" + _0x102741.X + "\n" + '⭕' + " : @" + _0x102741.O + "\n\n" + '🔔' + " 𝐒𝐮𝐚 𝐯𝐞𝐳, @" + _0xc7d926 + " " + _0x165d27 + "\n\n𝐃𝐢𝐠𝐢𝐭𝐞 𝐮𝐦 𝐧ú𝐦𝐞𝐫𝐨 𝐝𝐞 1 𝐚 9 𝐩𝐚𝐫𝐚 𝐣𝐨𝐠𝐚𝐫";
              _0x309aff(_0x5b77de);
            }
            return;
          }
          if (_0x56b443.gameExists(BANCOP, _0x2e4f16)) {
            const _0x58ce74 = _0x56b443.setGame(BANCOP, _0x2e4f16);
            if (_0x52e70e == "Cex") {
              return _0x42aca2("why");
            }
            if (_0x52e70e.toLowerCase() == 's' || _0x52e70e.toLowerCase() == "sim" || _0x52e70e.toLowerCase() == 'ok') {
              if (_0x58ce74.O == _0x24d1f3.replace("@s.whatsapp.net", '')) {
                if (_0x58ce74.status) {
                  return _0x42aca2("🔔 𝐎 𝐣𝐨𝐠𝐨 𝐣á 𝐜𝐨𝐦𝐞ç𝐨𝐮 𝐚𝐧𝐭𝐞𝐬!");
                }
                const _0xde68a7 = _0x58ce74._matrix;
                _0x58ce74.status = true;
                _0x58ce74.timestamp = Math.floor(Date.now() / 1000);
                _0x56b443.saveGame(BANCOP, _0x58ce74, _0x2e4f16);
                const _0x1efdb7 = "╔━━━━━━━━━━━━━━━━━━━━━╗\n┃🎮 𝐉𝐎𝐆𝐎 𝐃𝐀 𝐕𝐄𝐋𝐇𝐀 🎮┃\n╠━━━━━━━━━━━━━━━━━━━━━╣\n┃🎯 𝐈𝐍𝐈𝐂𝐈𝐀𝐃𝐎 🎯┃\n╚━━━━━━━━━━━━━━━━━━━━━╝\n\n" + ("┏━━━━━━━━━━━━━┓\n┃ " + _0xde68a7[0][0] + " ┃ " + _0xde68a7[0][1] + " ┃ " + _0xde68a7[0][2] + " ┃\n┃━━━━━━━━━━━━━┃\n┃ " + _0xde68a7[1][0] + " ┃ " + _0xde68a7[1][1] + " ┃ " + _0xde68a7[1][2] + " ┃\n┃━━━━━━━━━━━━━┃\n┃ " + _0xde68a7[2][0] + " ┃ " + _0xde68a7[2][1] + " ┃ " + _0xde68a7[2][2] + " ┃\n┗━━━━━━━━━━━━━┛") + "\n\n" + '❌' + " : @" + _0x58ce74.X + "\n" + '⭕' + " : @" + _0x58ce74.O + "\n\n" + '🔔' + " 𝐒𝐮𝐚 𝐯𝐞𝐳, @" + (_0x58ce74.turn == 'X' ? _0x58ce74.X : _0x58ce74.O) + " " + (_0x58ce74.turn == 'X' ? '❌' : '⭕') + "\n\n𝐃𝐢𝐠𝐢𝐭𝐞 𝐮𝐦 𝐧ú𝐦𝐞𝐫𝐨 𝐝𝐞 1 𝐚 9 𝐩𝐚𝐫𝐚 𝐣𝐨𝐠𝐚𝐫";
                _0x309aff(_0x1efdb7);
              }
            } else {
              if (_0x52e70e.toLowerCase() == 'n' || _0x52e70e.toLowerCase() == "não" || _0x52e70e.toLowerCase() == 'no') {
                if (_0x58ce74.O == _0x24d1f3.replace("@s.whatsapp.net", '')) {
                  if (_0x58ce74.status) {
                    return _0x42aca2("🔔 𝐎 𝐣𝐨𝐠𝐨 𝐣á 𝐜𝐨𝐦𝐞ç𝐨𝐮!");
                  }
                  _0x56b443.deleteGame(BANCOP, _0x2e4f16);
                  _0x309aff("⚔️ @" + _0x58ce74.X + " *𝐒𝐞𝐮 𝐝𝐞𝐬𝐚𝐟𝐢𝐨 𝐟𝐨𝐢 𝐫𝐞𝐜𝐮𝐬𝐚𝐝𝐨* " + '⚔️');
                }
              }
            }
          }
        } catch (_0x444ec0) {
          console.error("Erro na função joguinhodavelha:", _0x444ec0);
        }
      }
      function _0x50822e(_0x2f0035, _0x2b1de7) {
        var _0x594f8f = 0;
        [..._0x2f0035].forEach(_0xe825d3 => {
          if (_0xe825d3 === _0x2b1de7) {
            _0x594f8f++;
          }
        });
        return _0x594f8f;
      }
      _0x505163();
      const _0x27e5c5 = require("yt-search");
      async function _0x51b03d(_0x9a9edd) {
        if (linkfy.find(_0x9a9edd)[0]?.["isLink"]) {
          return _0x9a9edd;
        } else {
          res = await _0x27e5c5(_0x9a9edd);
          resultadoyts = res.videos[0].url;
          return resultadoyts;
        }
      }
      async function _0x25979b() {
        return new Promise((_0x331414, _0x277a41) => {
          try {
            const _0x339b71 = BANCOP.prepare("SELECT * FROM ContadorMSG");
            const _0x17495d = _0x339b71.all();
            _0x331414(_0x17495d);
          } catch (_0x3f286f) {
            console.error("Erro ao recuperar dados do contador:", _0x3f286f.message);
            _0x277a41(_0x3f286f);
          }
        });
      }
      async function _0x4d9ea9(_0x3558d4, _0x3c330d, _0x27c0c3) {
        try {
          return executarTransacao(() => {
            const _0x552db9 = getStmt("contador_select", "SELECT * FROM ContadorMSG WHERE groupId = ?");
            const _0x43fcc1 = getStmt("contador_insert", "INSERT INTO ContadorMSG (groupId, numbers) VALUES (?, ?)");
            const _0x349fb2 = getStmt("contador_update", "UPDATE ContadorMSG SET numbers = ? WHERE groupId = ?");
            const _0x543533 = _0x552db9.get(_0x3558d4);
            const _0x569036 = Date.now();
            let _0x3c2d00 = [];
            if (_0x543533) {
              try {
                _0x3c2d00 = JSON.parse(_0x543533.numbers || '[]');
                if (!Array.isArray(_0x3c2d00)) {
                  _0x3c2d00 = [];
                }
              } catch {
                _0x3c2d00 = [];
              }
              const _0x1515a4 = _0x3c2d00.findIndex(_0x3103d3 => _0x3103d3.id === _0x3c330d);
              if (_0x1515a4 !== -1) {
                Object.assign(_0x3c2d00[_0x1515a4], {
                  'messages': (_0x3c2d00[_0x1515a4].messages || 0) + (_0x27c0c3.messages || 0),
                  'cmd_messages': (_0x3c2d00[_0x1515a4].cmd_messages || 0) + (_0x27c0c3.cmd_messages || 0),
                  'figus': (_0x3c2d00[_0x1515a4].figus || 0) + (_0x27c0c3.figus || 0),
                  'imagens': (_0x3c2d00[_0x1515a4].imagens || 0) + (_0x27c0c3.imagens || 0),
                  'videos': (_0x3c2d00[_0x1515a4].videos || 0) + (_0x27c0c3.videos || 0),
                  'audios': (_0x3c2d00[_0x1515a4].audios || 0) + (_0x27c0c3.audios || 0),
                  'lastActivity': _0x569036,
                  'aparelho': _0x27c0c3.aparelho || _0x3c2d00[_0x1515a4].aparelho,
                  'nick': _0x27c0c3.nick || _0x3c2d00[_0x1515a4].nick
                });
              } else {
                const _0x5ccd74 = {
                  id: _0x3c330d,
                  messages: _0x27c0c3.messages || 0,
                  cmd_messages: _0x27c0c3.cmd_messages || 0,
                  figus: _0x27c0c3.figus || 0,
                  imagens: _0x27c0c3.imagens || 0,
                  videos: _0x27c0c3.videos || 0,
                  audios: _0x27c0c3.audios || 0,
                  aparelho: _0x27c0c3.aparelho || '',
                  nick: _0x27c0c3.nick || '',
                  lastActivity: _0x569036
                };
                _0x3c2d00.push(_0x5ccd74);
              }
              _0x349fb2.run(JSON.stringify(_0x3c2d00), _0x3558d4);
            } else {
              const _0x3e1f78 = {
                'id': _0x3c330d,
                'messages': _0x27c0c3.messages || 0,
                'cmd_messages': _0x27c0c3.cmd_messages || 0,
                'figus': _0x27c0c3.figus || 0,
                'imagens': _0x27c0c3.imagens || 0,
                'videos': _0x27c0c3.videos || 0,
                'audios': _0x27c0c3.audios || 0,
                'aparelho': _0x27c0c3.aparelho || '',
                'nick': _0x27c0c3.nick || '',
                'lastActivity': Date.now()
              };
              _0x43fcc1.run(_0x3558d4, JSON.stringify([_0x3e1f78]));
            }
            return true;
          });
        } catch (_0x3986ef) {
          console.error("Erro em atualizarContador:", _0x3986ef.message);
          return false;
        }
      }
      async function _0x4f8b45(_0x9c6422) {
        return new Promise((_0x5b8703, _0x5d0212) => {
          try {
            const _0x2e7cf4 = BANCOP.prepare("DELETE FROM ContadorMSG WHERE groupId = ?");
            const _0x1f3ca2 = _0x2e7cf4.run(_0x9c6422);
            _0x5b8703(_0x1f3ca2.changes);
          } catch (_0x30683b) {
            console.error("Erro ao remover grupo do contador:", _0x30683b.message);
            _0x5d0212(_0x30683b);
          }
        });
      }
      async function _0x2f0c94(_0x214324, _0x384058) {
        return new Promise((_0x105856, _0x1c7f5b) => {
          try {
            const _0x4dd7f0 = BANCOP.prepare("SELECT * FROM ContadorMSG WHERE groupId = ?");
            const _0xb7ee36 = _0x4dd7f0.get(_0x214324);
            if (_0xb7ee36) {
              let _0x259cd5;
              try {
                _0x259cd5 = JSON.parse(_0xb7ee36.numbers || '[]');
              } catch (_0x560866) {
                _0x259cd5 = [];
              }
              const _0x3f9081 = Array.isArray(_0x384058) ? _0x384058 : [_0x384058];
              const _0x973e1f = _0x259cd5.filter(_0x3f52e6 => !_0x3f9081.includes(_0x3f52e6.id));
              const _0xefdda5 = BANCOP.prepare("UPDATE ContadorMSG SET numbers = ? WHERE groupId = ?");
              const _0x3480b3 = _0xefdda5.run(JSON.stringify(_0x973e1f), _0x214324);
              _0x105856(_0x3480b3.changes);
            } else {
              _0x105856(0);
            }
          } catch (_0x4afa3a) {
            console.error("Erro ao remover usuário(s) do contador:", _0x4afa3a.message);
            _0x1c7f5b(_0x4afa3a);
          }
        });
      }
      const _0x34c51a = {
        'messages': _0x1c55dc ? 0 : 1,
        'cmd_messages': _0x1c55dc ? 1 : 0,
        'figus': _0x476b60 === "stickerMessage" ? 1 : 0,
        'imagens': _0x476b60 === "imageMessage" ? 1 : 0,
        'videos': _0x476b60 === "videoMessage" ? 1 : 0,
        'audios': _0x476b60 === "audioMessage" ? 1 : 0,
        'aparelho': _0xe00c8f,
        'nick': _0x41e4e0
      };
      _0x4d9ea9(_0x2e4f16, _0x24d1f3, _0x34c51a);
      var _0x24b5c5 = await _0x25979b();
      const _0x421473 = _0x24b5c5.map(_0x39d73a => _0x39d73a.groupId);
      let _0x5a3e82 = [];
      if (_0x421473.includes(_0x2e4f16)) {
        const _0x369e28 = _0x24b5c5.find(_0x499c9b => _0x499c9b.groupId === _0x2e4f16);
        try {
          _0x5a3e82 = JSON.parse(_0x369e28.numbers).map(_0x1b1c72 => _0x1b1c72.id);
        } catch (_0x3a9172) {
          _0x5a3e82 = [];
        }
      }
      if (_0x41e1b4) {
        if (_0x52e70e.startsWith('>')) {
          try {
            if (_0x1f574b.key.fromMe) {
              return;
            }
            console.log('[', colors.cyan("EVAL"), ']', colors.yellow(moment(_0x1f574b.messageTimestamp * 1000).format("DD/MM HH:mm:ss")), colors.green(_0x52e70e));
            return _0x3b3c6d.sendMessage(_0x2e4f16, {
              'text': JSON.stringify(eval(_0x52e70e.slice(2)), null, "\t")
            })["catch"](_0x5fe595 => {
              return _0x42aca2(String(_0x5fe595));
            });
          } catch (_0x24cead) {
            return _0x42aca2(String(_0x24cead));
          }
        }
        if (_0x52e70e.startsWith(')>')) {
          try {
            if (_0x1f574b.key.fromMe) {
              return;
            }
            var _0x2707e4 = _0x52e70e.slice(3);
            Return = _0x25b258 => {
              var _0x31ff4a = JSON.stringify(_0x25b258, null, 2);
              bang = util.format(_0x31ff4a);
              if (_0x31ff4a == undefined) {
                bang = util.format(_0x25b258);
              }
              const _0x319a07 = {
                text: bang
              };
              const _0x52a937 = {
                quoted: _0x1f574b
              };
              return _0x3b3c6d.sendMessage(_0x2e4f16, _0x319a07, _0x52a937);
            };
            _0x3b3c6d.sendMessage(_0x2e4f16, {
              'text': util.format(eval(";(async () => { " + _0x2707e4 + " })()"))
            })["catch"](_0x505366 => {
              return _0x42aca2(String(_0x505366));
            });
            console.log("[1;37m>", '[', "[1;32mEXEC[1;37m", ']', time, colors.green('>'), "from", colors.green(_0x24d1f3.split('@')[0]), "args :", colors.green(_0x3d0002.length));
          } catch (_0x58c69a) {
            _0x42aca2(String(_0x58c69a));
            return console.log(_0x58c69a);
          }
        }
        if (_0x421738.startsWith('$')) {
          if (_0x1f574b.key.fromMe) {
            return;
          }
          let _0x3addc0 = _0x421738.substring(1).trim();
          exec(_0x3addc0, (_0x472bac, _0x17a2c0, _0x3ce76d) => {
            if (_0x472bac) {
              console.error("Erro ao executar comando: " + _0x472bac.message);
              return _0x42aca2("Erro: " + _0x472bac.message);
            }
            if (_0x3ce76d) {
              console.error("Erro na execução: " + _0x3ce76d);
              return _0x42aca2("Erro: " + _0x3ce76d);
            }
            if (_0x17a2c0) {
              console.log(" - comando $: " + _0x3addc0);
              _0x42aca2(_0x17a2c0);
            }
          });
        }
      }
      class _0x1824b9 {
        constructor() {
          const _0x40cb75 = {
            imageMessage: "img",
            videoMessage: "video",
            audioMessage: "audio",
            stickerMessage: "sticker",
            documentMessage: "doc",
            contactMessage: "ctt",
            contactsArrayMessage: "ctt",
            locationMessage: "loc",
            productMessage: "catalogo",
            interactiveMessage: "interactive",
            requestPaymentMessage: "payment",
            declinePaymentRequestMessage: "payment",
            cancelPaymentRequestMessage: "payment",
            groupStatusMentionMessage: "mention"
          };
          this.RESOURCE_TYPE_MAP = _0x40cb75;
          const _0x4870a9 = {
            img: ["antiimg", "imagem", "legenda_imagem", "ANTI_IMAGEM_MSG"],
            video: ["antivideo", "vídeo", "legenda_video", "ANTI_VIDEO_MSG"],
            audio: ["antiaudio", "áudio", "legenda_audio", "ANTI_AUDIO_MSG"],
            sticker: ["antisticker", "figurinha", "legenda_sticker", "ANTI_STICKER_MSG"],
            doc: ["antidoc", "documento", "legenda_documento", "ANTI_DOCUMENTO_MSG"],
            ctt: ["antictt", "contato", "legenda_contato", "ANTI_CONTATO_MSG"],
            loc: ["antiloc", "localização", "legenda_localizacao", "ANTI_LOCALIZACAO_MSG"],
            catalogo: ["anticatalogo", "catálogo", "legenda_catalogo", "ANTI_CATALOGO_MSG"],
            interactive: ["antiinteractive", "mensagem interativa", "legenda_interativo", "ANTI_INTERATIVO_MSG"],
            payment: ["antipayment", "solicitação de pagamento", "legenda_pagamento", "ANTI_PAGAMENTO_MSG"]
          };
          this.RESOURCE_CONFIG = _0x4870a9;
          this.ALLOWED_COMMANDS = ["tiktok_audio", "tiktok_audio2", "tiktok_video", "tiktok_video2", "facebook", "facebook_audio", "facebook_audio2", "facebook_video2", "facebook_video", "instagram", "twitter", "ytmp3", "ytmp4", "play", "play_audio", "play_video"];
        }
        ["identifyResourceType"](_0x620f20) {
          const {
            type: _0x22eb9f,
            groupMembers: _0x275480,
            menc_jid2: _0x2702b2,
            dataGp: _0x2395f8,
            budy2: _0x3f56ce,
            budy: _0xac5009
          } = _0x620f20;
          const _0xd6d077 = this.RESOURCE_TYPE_MAP[_0x22eb9f];
          if (_0xd6d077) {
            return _0xd6d077;
          }
          if (_0x22eb9f === "documentWithCaptionMessage" || typeof _0x22eb9f === "string" && _0x22eb9f.includes("documentWithCaptionMessage")) {
            return "doc";
          }
          if (_0x275480 && _0x275480.length > 20 && _0x2702b2?.["length"] >= _0x275480.length - 3) {
            return "mention";
          }
          if (this.checkBadWordsOriginal(_0x2395f8, _0x3f56ce)) {
            return "palavrao";
          }
          if (this.checkCharLimitOriginal(_0x2395f8, _0xac5009)) {
            return "charLimit";
          }
          return null;
        }
        ["checkBadWordsOriginal"](_0x58b541, _0x1dd336) {
          if (!Array.isArray(_0x58b541) || _0x58b541.length === 0 || !_0x58b541[0]?.["antipalavrao"]?.["modo"] || _0x58b541[0].antipalavrao.modo <= 0) {
            return false;
          }
          const _0x7d941e = _0x58b541[0].antipalavrao.palavras;
          if (!Array.isArray(_0x7d941e) || _0x7d941e.length === 0) {
            return false;
          }
          return _0x7d941e.some(_0x1d7d61 => {
            if (!_0x1d7d61 || typeof _0x1d7d61 !== "string") {
              return false;
            }
            const _0xccb760 = _0x1d7d61.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '');
            const _0x4971bf = _0xccb760.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            if (!_0x4971bf.trim()) {
              return false;
            }
            try {
              if (_0xccb760 !== _0x4971bf) {
                return _0x1dd336.toLowerCase().includes(_0xccb760);
              } else {
                const _0x5acffe = new RegExp("\\b" + _0x4971bf + "\\b", 'i');
                return _0x5acffe.test(_0x1dd336);
              }
            } catch (_0x40c493) {
              console.warn("⚠️ Palavra proibida inválida ignorada: \"" + _0x1d7d61 + "\" - " + _0x40c493.message);
              return _0x1dd336.toLowerCase().includes(_0xccb760);
            }
          });
        }
        ["checkCharLimitOriginal"](_0x1134ff, _0x5c8b88) {
          return _0x5c8b88 && Array.isArray(_0x1134ff) && _0x1134ff.length > 0 && _0x1134ff[0]?.["limitec"]?.["active"] && typeof _0x1134ff[0].limitec.quantidade === "number" && _0x5c8b88.length > _0x1134ff[0].limitec.quantidade;
        }
        ["getResourceActionLevel"](_0x1a8c93, _0x376602) {
          const {
            isGroup: _0x22ee18,
            isBotGroupAdmins: _0xdaf7ae,
            isGroupAdmins: _0x31a58f,
            SoDono: _0x1d1a9a,
            info: _0x5234a9,
            dataGp: _0x4c1d60,
            aluguelNecessario: _0xffd38f,
            grupoTemAluguel: _0x5c0fe3
          } = _0x376602;
          if (!_0x22ee18 || !_0xdaf7ae || _0x31a58f || _0x1d1a9a || _0x5234a9.key.fromMe) {
            return 0;
          }
          const _0x2e96bd = _0x4c1d60[0]?.["rg_aluguel"] || _0xffd38f || false;
          const _0x15d391 = _0x2e96bd ? _0x5c0fe3 : true;
          if (_0x2e96bd && !_0x15d391) {
            return 0;
          }
          switch (_0x1a8c93) {
            case "img":
              return _0x4c1d60[0]?.["antiimg"] || 0;
            case "video":
              return _0x4c1d60[0]?.["antivideo"] || 0;
            case "audio":
              return _0x4c1d60[0]?.["antiaudio"] || 0;
            case "sticker":
              return _0x4c1d60[0]?.["antisticker"] || 0;
            case "doc":
              return _0x4c1d60[0]?.["antidoc"] || 0;
            case "ctt":
              return _0x4c1d60[0]?.["antictt"] || 0;
            case "loc":
              return _0x4c1d60[0]?.["antiloc"] || 0;
            case "linkgp":
              return _0x4c1d60[0]?.["antilinkgp"] || 0;
            case "linkhard":
              return _0x4c1d60[0]?.["antilinkhard"] || 0;
            case "mention":
              return _0x4c1d60[0]?.["antimention"] > 0 ? 1 : 0;
            case "payment":
              return _0x4c1d60[0]?.["antipayment"] > 0 ? 1 : 0;
            case "catalogo":
              return _0x4c1d60[0]?.["anticatalogo"] > 0 ? 1 : 0;
            case "interactive":
              return _0x4c1d60[0]?.["antiinteractive"] > 0 ? 1 : 0;
            case "palavrao":
              return _0x4c1d60[0]?.["antipalavrao"]?.["modo"] > 0 ? 1 : 0;
            case "charLimit":
              return _0x4c1d60[0]?.["limitec"]?.["quantidade"] > 0 ? 1 : 0;
            default:
              return 0;
          }
        }
        ["getResourceCustomMessage"](_0x3c982c, _0x236c53) {
          const _0x48b2de = {
            custom: _0x236c53[0]?.["legenda_imagem"],
            "default": "ANTI_IMAGEM_MSG"
          };
          const _0x4b0d0c = {
            custom: _0x236c53[0]?.["legenda_video"],
            "default": "ANTI_VIDEO_MSG"
          };
          const _0x5c948a = {
            custom: _0x236c53[0]?.["legenda_audio"],
            "default": "ANTI_AUDIO_MSG"
          };
          const _0x2e466b = {
            custom: _0x236c53[0]?.["legenda_sticker"],
            "default": "ANTI_STICKER_MSG"
          };
          const _0x3720d0 = {
            custom: _0x236c53[0]?.["legenda_documento"],
            "default": "ANTI_DOCUMENTO_MSG"
          };
          const _0x5a5561 = {
            custom: _0x236c53[0]?.["legenda_contato"],
            "default": "ANTI_CONTATO_MSG"
          };
          const _0x26db5a = {
            custom: _0x236c53[0]?.["legenda_localizacao"],
            "default": "ANTI_LOCALIZACAO_MSG"
          };
          const _0x27e7a7 = {
            custom: _0x236c53[0]?.["legenda_catalogo"],
            "default": "ANTI_CATALOGO_MSG"
          };
          const _0x29e6d6 = {
            custom: _0x236c53[0]?.["legenda_interativo"],
            "default": "ANTI_INTERATIVO_MSG"
          };
          const _0x2e4c50 = {
            custom: _0x236c53[0]?.["legenda_pagamento"],
            "default": "ANTI_PAGAMENTO_MSG"
          };
          const _0x5ccfc9 = {
            custom: _0x236c53[0]?.["legenda_mencao"],
            "default": "ANTI_MENCAO_MSG"
          };
          const _0x39db5e = {
            custom: _0x236c53[0]?.["legenda_palavrao"],
            "default": "ANTI_PALAVRAO_MSG"
          };
          const _0x45df79 = {
            custom: _0x236c53[0]?.["legenda_linkgp"] || '0',
            "default": "ANTI_LINK_GRUPO_MSG"
          };
          const _0x363e0b = {
            custom: _0x236c53[0]?.["legenda_linkhard"] || '0',
            "default": "MENSAGEM_DOS_ANTI_LINKS"
          };
          const _0x8e7eb3 = {
            custom: '0',
            "default": "LIMITE_CARACTERES_MSG"
          };
          const _0x29eb3d = {
            img: _0x48b2de,
            video: _0x4b0d0c,
            audio: _0x5c948a,
            sticker: _0x2e466b,
            doc: _0x3720d0,
            ctt: _0x5a5561,
            loc: _0x26db5a,
            catalogo: _0x27e7a7,
            interactive: _0x29e6d6,
            payment: _0x2e4c50,
            mention: _0x5ccfc9,
            palavrao: _0x39db5e,
            linkgp: _0x45df79,
            linkhard: _0x363e0b,
            charLimit: _0x8e7eb3
          };
          const _0x456a8d = _0x29eb3d[_0x3c982c];
          if (!_0x456a8d) {
            return TEXTOS_GERAL?.["MENSAGEM_DOS_ANTI_LINKS"] || "Conteúdo proibido detectado.";
          }
          if (_0x456a8d.custom && _0x456a8d.custom !== '0') {
            return _0x456a8d.custom;
          }
          return TEXTOS_GERAL?.[_0x456a8d["default"]] || TEXTOS_GERAL?.["MENSAGEM_DOS_ANTI_LINKS"] || "Conteúdo proibido detectado.";
        }
        ["getResourceDisplayName"](_0x496089) {
          const _0x1bf091 = {
            img: "imagem",
            video: "vídeo",
            audio: "áudio",
            sticker: "figurinha",
            doc: "documento",
            ctt: "contato",
            loc: "localização",
            catalogo: "catálogo",
            interactive: "mensagem interativa",
            payment: "solicitação de pagamento",
            mention: "mensagem com muitas menções",
            linkgp: "link de grupo do WhatsApp",
            linkhard: "link",
            charLimit: "mensagem muito longa",
            palavrao: "palavra proibida"
          };
          return _0x1bf091[_0x496089] || "conteúdo proibido";
        }
        ["handleWarningUnified"](_0x51efa1, _0x5db343) {
          const {
            dataGp: _0x16f83f,
            sender: _0x3d32e6,
            setGp: _0x30e507,
            reply: _0x31582f,
            banUser: _0x1cb655
          } = _0x5db343;
          if (!Array.isArray(_0x16f83f[0].advertencias)) {
            _0x16f83f[0].advertencias = [];
          }
          let _0x581c29 = _0x16f83f[0].advertencias.find(_0xb6a689 => _0xb6a689.id === _0x3d32e6);
          if (!_0x581c29) {
            const _0x5652ee = {
              id: _0x3d32e6,
              count: 0x1
            };
            _0x581c29 = _0x5652ee;
            _0x16f83f[0].advertencias.push(_0x581c29);
          } else {
            _0x581c29.count++;
          }
          _0x30e507(_0x16f83f);
          const _0x729c33 = this.getResourceDisplayName(_0x51efa1);
          if (_0x581c29.count >= 3) {
            _0x16f83f[0].advertencias = _0x16f83f[0].advertencias.filter(_0x47f9f1 => _0x47f9f1.id !== _0x3d32e6);
            _0x30e507(_0x16f83f);
            _0x31582f("╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮\n┃ ⚠️ 𝐋𝐈𝐌𝐈𝐓𝐄 𝐄𝐗𝐂𝐄𝐃𝐈𝐃𝐎! ⚠️\n┃\n┃ 🚫 3 advertências por enviar\n┃ conteúdo proibido!\n┃\n┃ 🔨 Removendo usuário...\n╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯");
            _0x1cb655();
          } else {
            _0x31582f("╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮\n┃ ⚠️ 𝐀𝐃𝐕𝐄𝐑𝐓𝐄̂𝐍𝐂𝐈𝐀 " + _0x581c29.count + "/3 ⚠️\n┃\n┃ 📝 Tipo: " + _0x729c33 + "\n┃ \n┃ 🚫 Não envie mais conteúdo\n┃ proibido ou será removido!\n┃\n┃ 🛡️ Respeite as regras!\n╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯");
          }
        }
        ["banUser"](_0x2bc3be, _0x9f79ce) {
          const {
            conn: _0x5f3fdd,
            from: _0x14601f,
            sender: _0x1ed471,
            groupMembers: _0x26e6e5
          } = _0x9f79ce;
          _0x5f3fdd.groupSettingUpdate(_0x14601f, "announcement");
          setTimeout(() => {
            const _0x20e72c = {
              text: _0x2bc3be
            };
            _0x5f3fdd.sendMessage(_0x14601f, _0x20e72c);
            setTimeout(() => {
              if (JSON.stringify(_0x26e6e5).includes(_0x1ed471)) {
                _0x5f3fdd.groupParticipantsUpdate(_0x14601f, [_0x1ed471], "remove");
              }
              setTimeout(() => {
                _0x5f3fdd.groupSettingUpdate(_0x14601f, "not_announcement");
              }, 1500);
            }, 500);
          }, 100);
        }
        ["deleteResourceMessage"](_0x2ba8af) {
          const {
            conn: _0x53910a,
            from: _0x5f0914,
            info: _0x45a42c,
            sender: _0x25fe72
          } = _0x2ba8af;
          setTimeout(() => {
            _0x53910a.sendMessage(_0x5f0914, {
              'delete': {
                'remoteJid': _0x5f0914,
                'fromMe': false,
                'id': _0x45a42c.key.id,
                'participant': _0x25fe72
              }
            });
          }, 500);
        }
        ["shouldProcessLink"](_0x16194e) {
          const {
            command: _0x15d4e0,
            isGroup: _0x26e92e,
            dataGp: _0x3ef51b,
            isGroupAdmins: _0x49389b,
            isUrl: _0x115ccb,
            Procurar_String: _0x2a53ab,
            isBotGroupAdmins: _0x44a799,
            info: _0x45311a,
            sender: _0x8da7b,
            aluguelNecessario: _0x12a996,
            grupoTemAluguel: _0x28266f
          } = _0x16194e;
          const _0x31aac3 = _0x15d4e0 && this.ALLOWED_COMMANDS.some(_0x1bfe25 => _0x15d4e0.toLowerCase().includes(_0x1bfe25.toLowerCase()));
          if (_0x31aac3) {
            return false;
          }
          if (!_0x26e92e) {
            return false;
          }
          if (!_0x3ef51b || !Array.isArray(_0x3ef51b) || _0x3ef51b.length === 0) {
            return false;
          }
          const _0x2d790a = _0x3ef51b[0]?.["rg_aluguel"] || _0x12a996 || false;
          const _0x48c796 = _0x2d790a ? _0x28266f : true;
          if (_0x2d790a && !_0x48c796) {
            return false;
          }
          const _0x17fc0a = _0x3ef51b?.[0]?.["antilinkgp"] > 0 || _0x3ef51b?.[0]?.["antilinkhard"] > 0;
          return _0x26e92e && !_0x49389b && _0x17fc0a && _0x115ccb(_0x2a53ab) && _0x44a799 && !_0x45311a.key.fromMe && _0x8da7b;
        }
        async ["processLinkDetails"](_0x4808ff) {
          const {
            Procurar_String: _0x447e06,
            conn: _0x5f4cc9,
            from: _0x4b935b,
            isUrl: _0x2a44a2
          } = _0x4808ff;
          let _0x2cd859 = _0x447e06.includes("chat.whatsapp.com/");
          const _0x2f74e2 = {
            isGroupLink: false,
            isOwnGroupLink: false
          };
          if (!_0x2cd859) {
            return _0x2f74e2;
          }
          try {
            let _0x1c248f = await _0x5f4cc9?.["groupInviteCode"](_0x4b935b);
            let _0xe9ec5c = _0x447e06.includes(_0x1c248f);
            if (_0xe9ec5c) {
              let _0x310583 = _0x447e06.replaceAll("https://chat.whatsapp.com/" + _0x1c248f, '').trim();
              if (_0x310583 === '' || !_0x2a44a2(_0x310583)) {
                const _0xb8fc57 = {
                  isGroupLink: true,
                  isOwnGroupLink: true
                };
                return _0xb8fc57;
              }
            }
            const _0x1284c9 = {
              isGroupLink: true,
              isOwnGroupLink: false
            };
            return _0x1284c9;
          } catch {
            const _0x4b3809 = {
              isGroupLink: true,
              isOwnGroupLink: false
            };
            return _0x4b3809;
          }
        }
        async ["processAntiSystem"](_0x446ce1) {
          try {
            const {
              isGroup: _0x5551ba,
              isGroupAdmins: _0x3dc3f1,
              SoDono: _0x19dd17,
              info: _0x42774a,
              sender: _0x11f0b9,
              groupMembers: _0x48e348
            } = _0x446ce1;
            if (!_0x5551ba || _0x3dc3f1 || _0x19dd17 || _0x42774a.key.fromMe) {
              return false;
            }
            if (_0x48e348 && Array.isArray(_0x48e348)) {
              const _0x56b55b = _0x48e348.filter(_0x473875 => _0x473875.admin === "admin" || _0x473875.admin === "superadmin");
              const _0x3ae374 = _0x56b55b.map(_0x4a2ff0 => _0x4a2ff0.id);
              if (_0x3ae374.includes(_0x11f0b9)) {
                return false;
              }
            }
            if (await this.handleGroupLink(_0x446ce1)) {
              return true;
            }
            return await this.handleAntiResources(_0x446ce1);
          } catch (_0x7b51fc) {
            console.error("Erro no sistema anti:", _0x7b51fc);
            return false;
          }
        }
        async ["handleAntiResources"](_0x3bbdf2) {
          const _0x3dbd7e = this.identifyResourceType(_0x3bbdf2);
          if (!_0x3dbd7e) {
            return false;
          }
          const _0x5043bd = this.getResourceActionLevel(_0x3dbd7e, _0x3bbdf2);
          if (_0x5043bd === 0) {
            return false;
          }
          switch (_0x5043bd) {
            case 1:
              this.deleteResourceMessage(_0x3bbdf2);
              this.banUser(this.getResourceCustomMessage(_0x3dbd7e, _0x3bbdf2.dataGp), _0x3bbdf2);
              break;
            case 2:
              this.deleteResourceMessage(_0x3bbdf2);
              break;
            case 3:
              this.handleWarningUnified(_0x3dbd7e, _0x3bbdf2);
              this.deleteResourceMessage(_0x3bbdf2);
              break;
          }
          return true;
        }
        async ["handleGroupLink"](_0x58b453) {
          if (!this.shouldProcessLink(_0x58b453)) {
            return false;
          }
          try {
            let _0x30be4c = await this.processLinkDetails(_0x58b453);
            if (_0x30be4c.isOwnGroupLink) {
              return false;
            }
            let _0xb2818d = 0;
            let _0x2bcf8e = '';
            if (_0x58b453.dataGp[0].antilinkhard > 0) {
              _0xb2818d = _0x58b453.dataGp[0].antilinkhard;
              _0x2bcf8e = "linkhard";
            } else {
              if (_0x30be4c.isGroupLink && _0x58b453.dataGp[0].antilinkgp > 0) {
                _0xb2818d = _0x58b453.dataGp[0].antilinkgp;
                _0x2bcf8e = "linkgp";
              }
            }
            switch (_0xb2818d) {
              case 1:
                this.deleteResourceMessage(_0x58b453);
                this.banUser(this.getResourceCustomMessage(_0x2bcf8e, _0x58b453.dataGp), _0x58b453);
                break;
              case 2:
                this.deleteResourceMessage(_0x58b453);
                break;
              case 3:
                this.handleWarningUnified(_0x2bcf8e, _0x58b453);
                this.deleteResourceMessage(_0x58b453);
                break;
            }
            return _0xb2818d > 0;
          } catch (_0x12c5f4) {
            console.error("Erro ao processar link do grupo:", _0x12c5f4);
            return false;
          }
        }
      }
      const _0x30a97b = new _0x1824b9();
      async function _0x8407f2() {
        try {
          if (!_0x56a33e || _0xe7fb69 || _0x4694ac || _0x1f574b.key.fromMe) {
            return false;
          }
          let _0x4538ec = false;
          if (_0x5c0540 && Array.isArray(_0x5c0540)) {
            const _0x3bbc52 = _0x5c0540.filter(_0x1fe3b9 => _0x1fe3b9.admin === "admin" || _0x1fe3b9.admin === "superadmin").map(_0x3be161 => _0x3be161.id);
            _0x4538ec = _0x3bbc52.includes(_0x24d1f3);
          }
          if (_0x4538ec) {
            return false;
          }
          const _0xf4a36a = {
            'isGroup': _0x56a33e,
            'isBotGroupAdmins': _0x4e65a9,
            'isGroupAdmins': _0xe7fb69 || _0x4538ec,
            'SoDono': _0x4694ac,
            'info': _0x1f574b,
            'sender': _0x24d1f3,
            'from': _0x2e4f16,
            'dataGp': _0x3c04e4,
            'groupMembers': _0x5c0540,
            'menc_jid2': _0x14615b,
            'type': _0x476b60,
            'budy': _0x52e70e,
            'budy2': _0x541958,
            'command': _0x1d8cfd,
            'aluguelNecessario': nescessario?.["rg_aluguelGB"] || false,
            'grupoTemAluguel': _0x22502b(_0x2e4f16),
            'isUrl': _0x29cb1e,
            'Procurar_String': _0x36fc16,
            'conn': _0x3b3c6d,
            'setGp': _0x5682e7,
            'reply': _0x42aca2,
            'banUser': () => {
              return _0x30a97b.banUser(TEXTOS_GERAL?.["MENSAGEM_DOS_ANTI_LINKS"] || "Conteúdo proibido detectado.", _0xf4a36a);
            }
          };
          return await _0x30a97b.processAntiSystem(_0xf4a36a);
        } catch (_0x45da5d) {
          console.error("Erro no sistema anti:", _0x45da5d);
          return false;
        }
      }
      if (_0x56a33e && !_0x1f574b.key.fromMe) {
        await _0x8407f2();
      }
      var _0xe9cf77 = [];
      if (!_0x56a33e && !_0x1c0083 && !_0x4694ac && !_0x1f574b.key.fromMe) {
        const _0x2d912d = nescessario.msgantipv1 || "Olá, esse bot não aceita mensagens no privado. Você será bloqueado.";
        const _0x3eac6d = nescessario.msgantipv2 || "Bot em modo privado. Mensagens no privado não são permitidas.";
        switch (nescessario.antipvmode || 0) {
          case 0:
            break;
          case 1:
            if (!_0xe9cf77.includes(_0x24d1f3)) {
              _0xe9cf77.push(_0x24d1f3);
              setTimeout(async () => {
                _0x3b3c6d.updateBlockStatus(_0x24d1f3, "block");
              }, 2000);
              return;
            }
            break;
          case 2:
            if (!_0xe9cf77.includes(_0x24d1f3)) {
              _0xe9cf77.push(_0x24d1f3);
              await sleep(2500);
              _0x42aca2(_0x2d912d);
              setTimeout(async () => {
                _0x3b3c6d.updateBlockStatus(_0x24d1f3, "block");
              }, 2000);
              return;
            }
            break;
          case 3:
            if (!MSG_ANTPV2.includes(_0x24d1f3)) {
              MSG_ANTPV2.push(_0x24d1f3);
              return _0x42aca2(_0x3eac6d);
            }
            break;
          case 4:
            return;
        }
      }
      const _0x2e33c8 = require("./outros/funcoes/sislv.js");
      _0x2e33c8.init(BANCOP);
      if (_0x56a33e && !_0x1c55dc && !_0x1f574b.key.fromMe) {
        try {
          const _0x17cf85 = await _0x2e33c8.processLevelingSystem(_0x42c9b3 || '', _0x24d1f3, _0x2e4f16);
          if (_0x17cf85) {
            await _0x3b3c6d.sendMessage(_0x2e4f16, {
              'text': lermais + "╔┉✼┉═༺◈✼🎉✼◈༻═┉✼┉╗\n║ *PARABÉNS, @" + _0x21f527 + "!*\n╚┉✼┉═༺◈✼🎉✼◈༻═┉✼┉╝\n\n- Você upou para o *Level " + _0x17cf85.newLevel + "*! 🚀\n\n╔┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╗\n║ 📈 *Level:* " + _0x17cf85.newLevel + "\n║ 🏵️ *Patente:* " + _0x17cf85.patente + "\n║ ⭐ *XP:* " + _0x17cf85.xp + '/' + _0x17cf85.requiredXP + "\n║ 📊 *Streak:* " + _0x17cf85.streakDays + " dias (" + (_0x17cf85.streakMultiplier * 100 - 100).toFixed(0) + "% bonus)\n╠┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╝\n║ *Continue assim e conquiste mais! 💪*\n╚┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╝",
              'mentions': [_0x24d1f3]
            });
          }
        } catch (_0x2bcc19) {
          console.error("Erro ao processar leveling:", _0x2bcc19);
        }
      }
      async function _0x1ea18a() {
        if (!_0x2e33c8) {
          return Boolean(_0x3c04e4[0].leveling);
        }
        try {
          const _0x7370f5 = await _0x2e33c8.isLevelingEnabled(_0x2e4f16);
          return _0x7370f5;
        } catch (_0x425b07) {
          console.error("[VERIFICAÇÃO LEVELING] Erro ao verificar status:", _0x425b07);
          return false;
        }
      }
      var _0x57b88e = JSON.parse(fs.readFileSync("./dados/org/json/palavras_forca.json"));
      var _0x254319 = _0x57b88e[Math.floor(Math.random() * _0x57b88e.length)];
      var _0x498888 = _0x254319?.["plvr"]["toLowerCase"]()["normalize"]("NFD")["replace"](/[\u0300-\u036f]/g, '');
      async function _0x5d9d76() {
        var _0x6a1afb = [];
        for (var _0x24e2bf = 0; _0x24e2bf < _0x498888.length; _0x24e2bf++) {
          if (_0x498888[_0x24e2bf] == " ") {
            _0x6a1afb.push(" ");
          } else {
            _0x6a1afb.push('_');
          }
        }
        const _0x58ef6f = {
          acertos: 0x0,
          erros: 0x0,
          palavra: _0x6a1afb,
          escreveu: [],
          palavra_ofc: _0x498888,
          dica: _0x254319.dica,
          tema: _0x254319.tema
        };
        _0x3c04e4[0].forca_ofc = [_0x58ef6f];
        _0x3c04e4[0].forca_inc = false;
        _0x1a4a3b(_0x2e4f16, _0x157177, _0x3c04e4);
      }
      if (_0x56a33e && (nescessario?.["isRecolherLink"] || _0x30a048) && /https:\/\/chat\.whatsapp\.com\/[a-zA-Z0-9]{10,}/g.test(_0x52e70e)) {
        try {
          const _0x2e4cef = /(https:\/\/chat\.whatsapp\.com\/[a-zA-Z0-9]{10,})/g;
          const _0x160225 = _0x52e70e.match(_0x2e4cef);
          if (_0x160225 && _0x160225.length > 0) {
            for (const _0x3cbb38 of _0x160225) {
              const _0x275646 = BANCOP.prepare("SELECT * FROM links_recolhidos WHERE link = ?").get(_0x3cbb38);
              if (!_0x275646) {
                BANCOP.prepare("INSERT INTO links_recolhidos (link, grupo_id, user_id, data_recolhimento) VALUES (?, ?, ?, ?)").run(_0x3cbb38, _0x2e4f16, _0x24d1f3, Math.floor(Date.now() / 1000));
              }
            }
          }
        } catch (_0x3778cc) {
          console.error("Erro ao recolher links:", _0x3778cc);
        }
      }
      if (!_0x1c0083 && nescessario.cmdpremium.includes(_0x1d8cfd)) {
        return _0x42aca2("Este comando é apenas para\nusuário premium, se deseja adquirir, fale com meu dono:\nhttps://wa.me/" + numerodono_ofc);
      }
      async function _0x1ae2f3() {
        try {
          const _0x46e2a0 = _0x24b5c5.findIndex(_0x4a7b38 => _0x4a7b38.groupId === _0x2e4f16);
          if (_0x46e2a0 === -1) {
            return;
          }
          let _0x5d0b91 = _0x24b5c5[_0x46e2a0].numbers;
          if (typeof _0x5d0b91 === "string") {
            try {
              _0x5d0b91 = JSON.parse(_0x5d0b91);
            } catch (_0x571704) {
              console.error("Erro no parse JSON do contador:", _0x571704.message);
              await _0x4f8b45(_0x2e4f16);
              return;
            }
          }
          if (!Array.isArray(_0x5d0b91)) {
            console.error("Dados do contador não são array:", typeof _0x5d0b91);
            await _0x4f8b45(_0x2e4f16);
            return;
          }
          const _0x231edd = _0x5c0540 ? _0x5c0540.map(_0x3d3c67 => _0x3d3c67.id).filter(Boolean) : [];
          const _0x5e29d8 = _0x5d0b91.filter(_0x1578d5 => _0x1578d5?.['id'] && typeof _0x1578d5.id === "string" && _0x1578d5.id.includes('@') && _0x1578d5.id.trim() !== '' && _0x1578d5.id !== "null" && _0x1578d5.id !== "undefined");
          const _0x3bae4c = _0x231edd.length > 0 ? _0x5e29d8.filter(_0x674750 => _0x231edd.includes(_0x674750.id)) : _0x5e29d8;
          const _0x49abcc = _0x5d0b91.length - _0x3bae4c.length;
          if (_0x49abcc > 0) {
            const _0x2e4a1 = BANCOP.prepare("UPDATE ContadorMSG SET numbers = ? WHERE groupId = ?");
            const _0x36b77e = _0x2e4a1.run(JSON.stringify(_0x3bae4c), _0x2e4f16);
            if (_0x36b77e.changes > 0) {
              _0x24b5c5[_0x46e2a0].numbers = _0x3bae4c;
              const _0x5892f6 = {
                sucesso: true,
                totalInicial: _0x5d0b91.length,
                totalFinal: _0x3bae4c.length,
                removidos: _0x49abcc
              };
              return _0x5892f6;
            } else {
              console.error("Falha ao atualizar contador no banco de dados");
              const _0x503ef9 = {
                sucesso: false,
                erro: "Falha na atualização do banco"
              };
              return _0x503ef9;
            }
          }
          const _0x13cd88 = {
            sucesso: true,
            totalInicial: _0x5d0b91.length,
            totalFinal: _0x3bae4c.length,
            removidos: 0x0
          };
          return _0x13cd88;
        } catch (_0x1efada) {
          console.error("Erro na limpeza do contador:", _0x1efada);
          const _0x59d745 = {
            sucesso: false,
            erro: _0x1efada.message
          };
          return _0x59d745;
        }
      }
      const _0x5d4fef = require("./dados/textos.js");
      const {
        Vcndindex: _0x3fe06e,
        NrgIndex: _0x2205d0
      } = _0x5d4fef;
      const _0x2017eb = _0x3fe06e.replaceAll(/#usuario#/g, '@' + _0x21f527).replaceAll(/#numerodono#/g, '' + numerodono_ofc);
      const _0x3569b4 = _0x2205d0.replaceAll(/#usuario#/g, '@' + _0x21f527).replaceAll(/#numerodono#/g, '' + numerodono_ofc);
      let _0x3dff49 = new Set();
      try {
        if (_0x1c55dc && !_0x3dff49.has(_0x2e4f16) && _0x501e05 && !_0x4694ac) {
          const _0x32f010 = BANCOP.prepare("SELECT COUNT(*) as count FROM aluguel WHERE id_gp = ?").get(_0x2e4f16);
          if (!_0x32f010 || _0x32f010.count === 0) {
            _0x3dff49.add(_0x2e4f16);
            const _0x2e0c22 = {
              text: _0x3569b4,
              mentions: [_0x24d1f3]
            };
            const _0x419708 = {
              quoted: _0x1f574b
            };
            _0x3b3c6d.sendMessage(_0x2e4f16, _0x2e0c22, _0x419708);
            setTimeout(() => _0x3dff49["delete"](_0x2e4f16), 10000);
            return;
          }
        }
        if (_0x501e05 && !_0x4694ac && _0x1c55dc) {
          const _0x176eb8 = Math.floor(Date.now() / 1000);
          const _0x49982e = BANCOP.prepare("SELECT vencimento FROM aluguel WHERE id_gp = ? LIMIT 1").get(_0x2e4f16);
          if (_0x49982e && _0x176eb8 > _0x49982e.vencimento) {
            const _0x458da7 = {
              text: _0x2017eb,
              mentions: [_0x24d1f3]
            };
            const _0x747cf5 = {
              quoted: _0x1f574b
            };
            return _0x3b3c6d.sendMessage(_0x2e4f16, _0x458da7, _0x747cf5);
          }
        }
      } catch (_0x3f01a2) {
        console.error("Erro ao verificar expiração do aluguel: " + _0x3f01a2);
      }
      function _0x3373d6(_0x205235, _0x547a72) {
        try {
          const _0x1eb7a4 = BANCOP.prepare("SELECT COUNT(*) as count FROM muted_users WHERE grupo_id = ? AND user_id = ?");
          const {
            count: _0x4af66d
          } = _0x1eb7a4.get(_0x205235, _0x547a72);
          return _0x4af66d > 0;
        } catch (_0x11d0a9) {
          console.error("Erro ao verificar usuário mutado:", _0x11d0a9);
          return false;
        }
      }
      function _0x2dc255(_0x1aa0d4) {
        try {
          const _0x560db1 = BANCOP.prepare("SELECT user_id, admin_id, motivo, timestamp FROM muted_users WHERE grupo_id = ? ORDER BY timestamp DESC");
          return _0x560db1.all(_0x1aa0d4);
        } catch (_0x5b382a) {
          console.error("Erro ao obter usuários mutados:", _0x5b382a);
          return [];
        }
      }
      function _0x53e6a3(_0x556dd3, _0x39a791, _0x58165a = null, _0x3b235e = '') {
        try {
          const _0x3148f5 = Math.floor(Date.now() / 1000);
          const _0x4b7f9d = BANCOP.prepare("INSERT OR REPLACE INTO muted_users (grupo_id, user_id, admin_id, motivo, timestamp) VALUES (?, ?, ?, ?, ?)");
          const _0x2320df = _0x4b7f9d.run(_0x556dd3, _0x39a791, _0x58165a, _0x3b235e, _0x3148f5);
          return {
            'sucesso': true,
            'mensagem': _0x2320df.changes === 1 ? "Usuário mutado com sucesso." : "Status de mute atualizado."
          };
        } catch (_0x1b2cc0) {
          console.error("Erro ao mutar usuário:", _0x1b2cc0);
          const _0x3b10a2 = {
            sucesso: false,
            mensagem: "Erro ao mutar usuário",
            erro: _0x1b2cc0.message
          };
          return _0x3b10a2;
        }
      }
      function _0x4cdf03(_0x7ed5fd, _0x277e23) {
        try {
          const _0x350950 = BANCOP.prepare("DELETE FROM muted_users WHERE grupo_id = ? AND user_id = ?");
          const _0x5216ad = _0x350950.run(_0x7ed5fd, _0x277e23);
          if (_0x5216ad.changes === 0) {
            const _0x58d4ca = {
              sucesso: false,
              mensagem: "Este usuário não está mutado neste grupo."
            };
            return _0x58d4ca;
          }
          const _0x5be816 = {
            sucesso: true,
            mensagem: "Usuário desmutado com sucesso."
          };
          return _0x5be816;
        } catch (_0x4b7c54) {
          console.error("Erro ao desmutar usuário:", _0x4b7c54);
          const _0x26aae5 = {
            sucesso: false,
            mensagem: "Erro ao desmutar usuário",
            erro: _0x4b7c54.message
          };
          return _0x26aae5;
        }
      }
      if (_0x56a33e && !_0x4694ac) {
        if (_0x3373d6(_0x2e4f16, _0x24d1f3)) {
          _0x3b3c6d.sendMessage(_0x2e4f16, {
            'delete': {
              'remoteJid': _0x2e4f16,
              'fromMe': false,
              'id': _0x1f574b.key.id,
              'participant': _0x24d1f3
            }
          });
          return;
        }
      }
      const _0x3c2909 = require("./outros/funcoes/sgld.js");
      const _0x4dc773 = new _0x3c2909(BANCOP);
      const _0x2a8b87 = require("./dados/org/js/configsgold.js");
      if (_0x56a33e && !_0x1c55dc && !_0x1f574b.key.fromMe) {
        async function _0x59ceb4() {
          try {
            let _0x5a0796 = [];
            const _0x81710d = moment.tz("America/Sao_Paulo").format("DD/MM/YYYY");
            let _0x400113 = null;
            if (!_0x2e4f16?.["trim"]() || !_0x24d1f3?.["trim"]() || !_0x56a33e || !_0x2e4f16.includes("@g.us")) {
              return console.warn("[SYS_G_XP] Parâmetros inválidos:", {
                'from': _0x2e4f16,
                'sender': _0x24d1f3,
                'isGroup': _0x56a33e
              });
            }
            const _0x4712b0 = await _0x2e33c8.isLevelingEnabled(_0x2e4f16);
            if (_0x4712b0 && _0x421738.trim()) {
              try {
                const _0x379e00 = await BANCOP.prepare("SELECT * FROM leveling WHERE groupId = ? AND userId = ?").get(_0x2e4f16, _0x24d1f3);
                if (!_0x379e00) {
                  await BANCOP.prepare("INSERT INTO leveling (groupId, userId, xp, totalXp, dailyRewardGiven, lastMessageTime, lastResetDaily, lastResetWeekly) VALUES (?, ?, ?, ?, ?, ?, ?, ?)").run(_0x2e4f16, _0x24d1f3, 20, 20, _0x81710d, new Date().toISOString(), new Date().toISOString(), new Date().toISOString());
                  _0x5a0796.push("20 XP");
                } else {
                  if (_0x379e00.dailyRewardGiven !== _0x81710d) {
                    await BANCOP.prepare("UPDATE leveling SET xp = xp + ?, totalXp = totalXp + ?, dailyRewardGiven = ? WHERE groupId = ? AND userId = ?").run(20, 20, _0x81710d, _0x2e4f16, _0x24d1f3);
                    _0x5a0796.push("20 XP");
                  }
                }
              } catch (_0x4b38e4) {
                console.error("Erro no sistema de Leveling:", _0x4b38e4);
              }
            }
            const _0x3ee057 = _0x3c04e4?.[0]?.["sistemgold"];
            if (_0x3ee057 && _0x421738.trim()) {
              try {
                const _0x5ecc10 = _0x4dc773.getUser(_0x2e4f16, _0x24d1f3);
                const _0x3228bf = moment().format("YYYY-MM-DD");
                const _0x1f6e96 = _0x5ecc10.chances?.["lastReset"] || null;
                const _0x4e931a = _0x1f6e96 !== _0x3228bf;
                if (_0x4e931a) {
                  const _0x116342 = _0x4dc773.resetDailyChances(_0x2e4f16, _0x24d1f3);
                  if (_0x116342) {
                    const _0x30395a = _0x2a8b87.recompensas.diaria;
                    _0x4dc773.addGold(_0x2e4f16, _0x24d1f3, _0x30395a);
                    _0x5a0796.push(_0x30395a + " Gold" + (_0x30395a > 1 ? 's' : ''));
                    _0x400113 = _0x4dc773.getBalance(_0x2e4f16, _0x24d1f3);
                  }
                } else {
                  const _0x58b7f0 = _0x5ecc10.chances?.["lastDaily"] || null;
                  if (_0x58b7f0 !== _0x3228bf) {
                    const _0xfc7797 = _0x2a8b87.recompensas.diaria;
                    _0x4dc773.addGold(_0x2e4f16, _0x24d1f3, _0xfc7797);
                    const _0x5f1d2f = {
                      ..._0x5ecc10.chances
                    };
                    _0x5f1d2f.lastDaily = _0x3228bf;
                    BANCOP.prepare("UPDATE gold_users SET chances = ? WHERE grupo_id = ? AND user_id = ?").run(JSON.stringify(_0x5f1d2f), _0x2e4f16, _0x24d1f3);
                    _0x5a0796.push(_0xfc7797 + " Gold" + (_0xfc7797 > 1 ? 's' : ''));
                    _0x400113 = _0x4dc773.getBalance(_0x2e4f16, _0x24d1f3);
                  }
                }
              } catch (_0x142d09) {
                console.error("Erro no sistema Gold:", _0x142d09);
              }
            }
            if (_0x5a0796.length > 0) {
              const _0x567737 = _0x4712b0 ? await BANCOP.prepare("SELECT xp, totalXp FROM leveling WHERE groupId = ? AND userId = ?").get(_0x2e4f16, _0x24d1f3) : null;
              let _0x901ecb = '' + lermais + _0x56b9eb + "\n";
              _0x901ecb += "┌──⭓ 『 Recompensa Diária 』\n";
              _0x901ecb += "│⎋ Usuário: @" + _0x21f527 + "\n";
              _0x901ecb += "│⎋ Recebeu: " + _0x5a0796.join(" e ") + " ✨\n";
              if (_0x5a0796.some(_0x1c6528 => _0x1c6528.includes("Gold")) && _0x400113 !== null) {
                const _0x293764 = require("./dados/org/js/configsgold.js");
                const _0x1c7a10 = _0x400113 - _0x293764.recompensas.diaria;
                _0x901ecb += "│⎋ Gold: " + _0x1c7a10 + " → " + _0x400113 + " " + _0x293764.emojis.gold + "\n";
              }
              if (_0x5a0796.includes("20 XP") && _0x567737 && typeof _0x567737.xp === "number") {
                const _0x471be7 = _0x567737.xp;
                const _0x4edc15 = _0x471be7 - 20;
                _0x901ecb += "│⎋ XP: " + _0x4edc15 + " → " + _0x471be7 + " ⭐\n";
              }
              _0x901ecb += "└──⭓\n\n";
              if (_0x3ee057) {
                _0x901ecb += "💡 Use " + _0x552df2 + "menu gold para ver os comandos de gold!\n";
              }
              if (_0x4712b0) {
                _0x901ecb += "✨ Use " + _0x552df2 + "level para ver seu nível!";
              }
              try {
                if (_0x2e4f16 && !_0x2e4f16.includes("status") && _0x2e4f16.includes("@g.us")) {
                  _0x309aff(_0x901ecb);
                }
              } catch (_0x33da72) {
                console.error("DEBUG SYS_G_XP: Erro ao usar mention: ", _0x33da72);
                try {
                  if (_0x2e4f16 && !_0x2e4f16.includes("status") && _0x2e4f16.includes("@g.us")) {
                    const _0x4b3cab = {
                      text: _0x901ecb,
                      mentions: [_0x24d1f3]
                    };
                    _0x3b3c6d.sendMessage(_0x2e4f16, _0x4b3cab);
                  }
                } catch (_0x587800) {
                  console.error("DEBUG SYS_G_XP: Erro no método alternativo: ", _0x587800);
                }
              }
            }
          } catch (_0x3665d8) {
            console.error("Erro geral no sistema Sys_G_XP:", _0x3665d8);
          }
        }
        await _0x59ceb4();
      }
      if (_0x56a33e && nescessario.EstaNogrupo && !_0x1d657c && _0x1c55dc) {
        return _0x42aca2("Olá, meu dono deve está no grupo e de administrador, para eu funcionar, é apenas um sistema de segurança em caso de dúvidas entre em contato com ele: https://wa.me/" + numerodono_ofc);
      }
      const _0x4b4903 = (_0x314848, _0x29e562, _0x2312a3) => {
        const _0x4b058b = {
          "true": true,
          txt: _0x4e7aa2
        };
        if (_0x314848 && !_0x56a33e) {
          return _0x4b058b;
        }
        const _0x75354d = {
          "true": true,
          txt: _0x4166a9
        };
        if (_0x29e562 && !_0xe7fb69) {
          return _0x75354d;
        }
        const _0x2ced4f = {
          "true": true,
          txt: _0x166dc3
        };
        if (_0x2312a3 && !_0x4e65a9) {
          return _0x2ced4f;
        }
        const _0x4b4df6 = {
          "true": false
        };
        return _0x4b4df6;
      };
      async function _0x43c384() {
        if (!_0x1f574b.message?.["reactionMessage"] || !_0x56a33e) {
          return;
        }
        const {
          key: {
            remoteJid: _0x4611f9,
            participant: _0x36c180
          },
          message: {
            reactionMessage: {
              key: {
                id: _0x191751
              }
            }
          }
        } = _0x1f574b;
        try {
          const _0x8004a0 = BANCOP.prepare("SELECT id FROM sorteios_react WHERE grupo_id = ? AND mensagem_id = ? AND finalizando = 0 LIMIT 1").get(_0x4611f9, _0x191751);
          if (!_0x8004a0) {
            return;
          }
          BANCOP.transaction(() => {
            const _0x2e3514 = BANCOP.prepare("SELECT 1 FROM sorteios_react_participantes WHERE sorteio_id = ? AND participante_id = ? LIMIT 1").get(_0x8004a0.id, _0x36c180);
            if (!_0x2e3514) {
              BANCOP.prepare("INSERT INTO sorteios_react_participantes (sorteio_id, participante_id, timestamp_entrada) VALUES (?, ?, ?)").run(_0x8004a0.id, _0x36c180, Date.now());
            }
          })();
        } catch (_0x2df195) {
          console.warn("Erro ao adicionar participante ao sorteio:", _0x2df195.message);
        }
      }
      _0x43c384();
      let _0x2b5021 = null;
      let _0x23459c = false;
      function _0x44b476() {
        if (_0x23459c) {
          return _0x2b5021;
        }
        try {
          if (!fs.existsSync("./dados/org/json/emojis.json")) {
            console.error(TEXTOS_GERAL.EMOJI_GOLD.ERRORS.FILE_NOT_FOUND + ':', "./dados/org/json/emojis.json");
            return null;
          }
          const _0x4bb7a8 = JSON.parse(fs.readFileSync("./dados/org/json/emojis.json", "utf8"));
          if (!_0x4bb7a8?.[0]?.["emojis"]) {
            console.error(TEXTOS_GERAL.EMOJI_GOLD.ERRORS.INVALID_FORMAT);
            return null;
          }
          _0x2b5021 = _0x4bb7a8;
          _0x23459c = true;
          return _0x2b5021;
        } catch (_0x493207) {
          console.error(TEXTOS_GERAL.EMOJI_GOLD.ERRORS.READ_ERROR + ':', _0x493207.message);
          return null;
        }
      }
      function _0x21f63d() {
        _0x23459c = false;
        _0x2b5021 = null;
        return _0x44b476();
      }
      async function _0x3015a1() {
        if (!_0x56a33e || !_0x3c04e4?.[0]?.["emojigold"] || !_0x3c04e4?.[0]?.["sistemgold"]) {
          return;
        }
        try {
          const _0x338426 = _0x44b476();
          if (!_0x338426) {
            return;
          }
          let _0x2ada0a = _0x4dc773.getEmojiGoldData(_0x2e4f16);
          if (!_0x2ada0a) {
            _0x2ada0a = _0x4dc773.initEmojiGoldData(_0x2e4f16);
            if (!_0x2ada0a) {
              return console.error(TEXTOS_GERAL.EMOJI_GOLD.ERRORS.INIT_FAILED + ':', _0x2e4f16);
            }
          }
          const _0x320dbe = Date.now();
          const _0xfe28b6 = _0x2ada0a.emojiData;
          const _0x41e053 = _0x2a8b87.emojiGold.settings.timeoutMinutos * 60 * 1000;
          const _0x195835 = !_0xfe28b6 || _0x320dbe - _0xfe28b6.Data > _0x41e053;
          if (_0x195835) {
            const _0x3f62e4 = _0xfe28b6?.["mentions"] || [];
            const _0x3c823e = _0x4dc773.generateNewEmoji(_0x2e4f16, _0x3f62e4, _0x338426[0]);
            if (!_0x3c823e) {
              return console.error(TEXTOS_GERAL.EMOJI_GOLD.ERRORS.GENERATE_FAILED + ':', _0x2e4f16);
            }
            const _0x5d436b = TEXTOS_GERAL.EMOJI_GOLD.NOVO_DESAFIO.replaceAll("#emojibot#", _0x1a0049).replaceAll("#palavra#", _0x3c823e.Nome).replaceAll("#reward#", _0x2a8b87.emojiGold.settings.goldPorAcerto).replaceAll("#prefix#", _0x552df2);
            const _0x34007e = {
              text: _0x5d436b,
              mentions: _0x3c823e.mentions || []
            };
            await _0x3b3c6d.sendMessage(_0x2e4f16, _0x34007e)["catch"](_0x5333f3 => {
              console.error(TEXTOS_GERAL.EMOJI_GOLD.ERRORS.SEND_ERROR + ':', _0x5333f3.message);
            });
            return;
          }
          if (_0xfe28b6?.["Emoji"] && _0x52e70e) {
            const _0xaa02df = _0x4dc773.compareEmojis(_0x52e70e, _0xfe28b6.Emoji);
            if (_0xaa02df) {
              _0x4dc773.addEmojiGoldPoints(_0x2e4f16, _0x24d1f3, _0x2a8b87.emojiGold.settings.pontosPorAcerto, _0x2a8b87.emojiGold.settings.goldPorAcerto);
              _0xfe28b6.Emoji = null;
              _0x4dc773.updateEmojiData(_0x2e4f16, _0xfe28b6);
              const _0x3b53e8 = TEXTOS_GERAL.EMOJI_GOLD.ACERTOU.replaceAll("#reward#", _0x2a8b87.emojiGold.settings.goldPorAcerto).replaceAll("#points#", _0x2a8b87.emojiGold.settings.pontosPorAcerto);
              const _0x51cae0 = {
                text: _0x3b53e8,
                mentions: [_0x24d1f3]
              };
              const _0x106e93 = {
                quoted: _0x1f574b
              };
              await _0x3b3c6d.sendMessage(_0x2e4f16, _0x51cae0, _0x106e93)["catch"](_0x221751 => {
                console.error(TEXTOS_GERAL.EMOJI_GOLD.ERRORS.SEND_ERROR + ':', _0x221751.message);
              });
            }
          }
        } catch (_0x5c24b8) {
          console.error(TEXTOS_GERAL.EMOJI_GOLD.ERRORS.PROCESSING_ERROR, _0x5c24b8);
        }
      }
      _0x3015a1();
      const _0x5004a3 = require("./outros/funcoes/gamesgold.js");
      const _0x522987 = require("./outros/funcoes/damas.js");
      const _0x2419b1 = new _0x5004a3(BANCOP);
      const _0x1e44f8 = new _0x522987(BANCOP, _0x3b3c6d);
      if (!_0x1c55dc && _0x56a33e && _0x3c04e4[0]?.["sistemgold"]) {
        const _0x577622 = {
          conn: _0x3b3c6d,
          info: _0x1f574b,
          from: _0x2e4f16,
          sender: _0x24d1f3,
          sender2: _0x21f527,
          goldSystem: _0x4dc773,
          reply: _0x42aca2,
          mention: _0x309aff,
          lermais: lermais,
          EmojiBot: _0x1a0049,
          configsGold: _0x2a8b87
        };
        if (await _0x2419b1.handleGameMessage(_0x421738, _0x577622)) {
          return;
        }
        if (await _0x1e44f8.handleGameMessage(_0x421738, _0x577622)) {
          return;
        }
      }
      if (_0x56a33e && global.goldResetConfirmation && global.goldResetConfirmation[_0x2e4f16]) {
        const _0x3159d5 = global.goldResetConfirmation[_0x2e4f16];
        if (_0x24d1f3 === _0x3159d5.sender) {
          const _0x23eccd = _0x421738.toUpperCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, '');
          if (_0x23eccd === "CONFIRMAR" || _0x23eccd === "SIM") {
            try {
              _0x3159d5.confirmed = true;
              const _0x518178 = BANCOP.prepare("DELETE FROM gold_users WHERE grupo_id = ?");
              _0x518178.run(_0x2e4f16);
              const _0x306f08 = BANCOP.prepare("UPDATE gold_system SET jackpot = 0, bolaogold = ? WHERE grupo_id = ?");
              _0x306f08.run('[]', _0x2e4f16);
              delete global.goldResetConfirmation[_0x2e4f16];
              _0x42aca2("\n╭━━━ 💰 GOLD RESETADO 💰 ━━━╮\n┃\n┃ ✅ RESET CONCLUÍDO!\n┃\n┃ 🔄 Todos os saldos foram zerados\n┃ 📊 Ranking foi reiniciado\n┃ 🎯 Bolão e jackpot foram limpos\n┃\n┃ 👑 Ação realizada pelo dono\n╰━━━━━━━━━━━━━━━━━━━━━━━━╯");
            } catch (_0x2c096a) {
              console.error("Erro ao executar reset gold:", _0x2c096a);
              _0x42aca2("❌ Ocorreu um erro ao zerar o gold. Tente novamente mais tarde.");
              delete global.goldResetConfirmation[_0x2e4f16];
            }
          } else if (_0x23eccd === "CANCELAR" || _0x23eccd === "NAO") {
            delete global.goldResetConfirmation[_0x2e4f16];
            _0x42aca2("✅ Reset de gold cancelado pelo usuário.");
          }
        }
      }
      let _0x555201 = process.uptime();
      async function _0x48123b(_0x5ba199 = "dados", _0x53b9cc = "ESDEATH-BACKUP.zip") {
        return new Promise(_0x432501 => {
          console.log("[BACKUP] Iniciando backup da pasta: " + _0x5ba199);
          if (!fs.existsSync(_0x5ba199)) {
            console.error("[BACKUP] ERRO: Pasta " + _0x5ba199 + " não encontrada");
            const _0x251524 = {
              success: false,
              filePath: null,
              error: "Pasta " + _0x5ba199 + " não encontrada"
            };
            return _0x432501(_0x251524);
          }
          if (fs.existsSync(_0x53b9cc)) {
            try {
              fs.unlinkSync(_0x53b9cc);
              console.log("[BACKUP] Arquivo antigo removido: " + _0x53b9cc);
            } catch (_0xa3b838) {
              console.error("[BACKUP] Erro ao remover arquivo antigo: " + _0xa3b838.message);
            }
          }
          const _0x42d496 = "zip -r \"" + _0x53b9cc + "\" \"" + _0x5ba199 + "\"";
          console.log("[BACKUP] Executando comando: " + _0x42d496);
          exec(_0x42d496, {
            'maxBuffer': 104857600
          }, (_0x12ebd6, _0x49416f, _0x5846) => {
            if (_0x12ebd6) {
              console.error("[BACKUP] ERRO durante compressão: " + _0x12ebd6.message);
              console.error("[BACKUP] STDERR: " + _0x5846);
              const _0x216061 = {
                success: false,
                filePath: null,
                error: _0x12ebd6.message
              };
              return _0x432501(_0x216061);
            }
            if (fs.existsSync(_0x53b9cc)) {
              const _0x161ab9 = fs.statSync(_0x53b9cc);
              const _0x2efd1c = (_0x161ab9.size / 1048576).toFixed(2);
              console.log("[BACKUP] Backup criado com sucesso! Tamanho: " + _0x2efd1c + 'MB');
              const _0x4b30a8 = {
                success: true,
                filePath: _0x53b9cc,
                error: null
              };
              return _0x432501(_0x4b30a8);
            } else {
              console.error("[BACKUP] ERRO: Arquivo zip não foi criado");
              return _0x432501({
                'success': false,
                'filePath': null,
                'error': "Arquivo zip não foi criado"
              });
            }
          });
        });
      }
      async function _0x482dbc() {
        return new Promise(_0x440be0 => {
          console.log("[ATUALIZACAO] Iniciando processo de atualização");
          console.log("[ATUALIZACAO] Executando comando: bash atualizar.sh 2");
          exec("bash atualizar.sh 2", {
            'maxBuffer': 104857600
          }, (_0x4976e0, _0x7bf5ce, _0x3da24c) => {
            if (_0x7bf5ce) {
              console.log("[ATUALIZACAO] STDOUT: " + _0x7bf5ce);
            }
            const _0x11f6ff = _0x3da24c && _0x3da24c.includes("refusing to remove '.' or '..' directory");
            if (_0x4976e0 && !_0x11f6ff) {
              console.error("[ATUALIZACAO] ERRO durante atualização: " + _0x4976e0.message);
              console.error("[ATUALIZACAO] STDERR: " + _0x3da24c);
              return _0x440be0({
                'success': false,
                'message': "Falha na atualização do bot",
                'error': _0x4976e0.message
              });
            }
            console.log("[ATUALIZACAO] Processo de atualização concluído com sucesso");
            return _0x440be0({
              'success': true,
              'message': "Bot atualizado com sucesso",
              'error': null
            });
          });
        });
      }
      function _0x3ae172() {
        try {
          dono1 = nescessario.dono1;
          dono2 = nescessario.dono2;
          dono3 = nescessario.dono3;
          dono4 = nescessario.dono4;
          dono5 = nescessario.dono5;
          dono6 = nescessario.dono6;
          let _0x16ddd4 = [dono1, dono2, dono3, dono4, dono5, dono6].filter(_0x43badb => _0x43badb && _0x43badb !== '.' && _0x43badb.toString().trim() !== '');
          _0x18d3dd = ['' + _0x50cae4, ..._0x16ddd4.map(_0xd31290 => '' + _0xd31290 + "@s.whatsapp.net")];
        } catch (_0xc5b5c8) {
          console.error("[ERRO] Falha ao atualizar lista de donos:", _0xc5b5c8);
        }
      }
      function _0x3a7233() {
        try {
          const _0xf22061 = JSON.parse(fs.readFileSync("./dados/settings.json", "utf8"));
          global.numerodono_ofc = _0xf22061.numerodono;
          global.nmrdn_dono2 = _0xf22061.numerodono + "@s.whatsapp.net";
          global.NomeDoBot = _0xf22061.NomeDoBot;
          global.NickDono = _0xf22061.NickDono;
          global.prefix = _0xf22061.prefix;
          if (typeof _0x18d3dd !== "undefined" && Array.isArray(_0x18d3dd)) {
            _0x18d3dd[0] = _0xf22061.numerodono + "@s.whatsapp.net";
          }
          if (typeof _0x50cae4 !== "undefined") {
            global.nmrdn = _0xf22061.numerodono + "@s.whatsapp.net";
          }
          if (typeof setting !== "undefined") {
            setting.numerodono = _0xf22061.numerodono;
            setting.NomeDoBot = _0xf22061.NomeDoBot;
            setting.NickDono = _0xf22061.NickDono;
            setting.prefix = _0xf22061.prefix;
          }
          return true;
        } catch (_0x29aab5) {
          console.error("❌ Erro ao atualizar variáveis do dono:", _0x29aab5);
          return false;
        }
      }
      if (_0x1c55dc) {
        const _0x3a77fd = {
          abracocmd: abracocmd,
          acessAPI: acessAPI,
          adicionarPremium: _0x480fe5,
          allImageMessage: _0x37d52d,
          allVideoMessage: _0x515be2,
          ANT_LTR_MD_EMJ: ANT_LTR_MD_EMJ,
          args: _0x3d0002,
          atualizarBot: _0x482dbc,
          atuVarDnGlb: _0x3a7233,
          attDnG: _0x3ae172,
          axios: axios,
          cheerio: cheerio,
          BANCOP: BANCOP,
          beijocmd: beijocmd,
          body: _0x421738,
          botNumber: _0x37d233,
          budy2: _0x541958,
          casamentocmd: casamentocmd,
          chutecmd: chutecmd,
          command: _0x1d8cfd,
          configsGold: _0x2a8b87,
          conn: _0x3b3c6d,
          conselhob: conselhob,
          contadorMsg: _0x25979b,
          countMessage: _0x24b5c5,
          createChoiceMenu: _0x171ccc,
          criarBackup: _0x48123b,
          dataGp: _0x3c04e4,
          delay: delay,
          desmutarUsuario: _0x4cdf03,
          DLT_FL: DLT_FL,
          DonoOficial: _0x116d7b,
          EmojiBot: _0x1a0049,
          enviar: enviar,
          exec: exec,
          fetch: fetch,
          fetchJson: fetchJson,
          FigAuthor: _0x44f148,
          FigPack: _0x3edb74,
          flushOptionsBuffer: _0x363d78,
          FormData: FormData,
          from: _0x2e4f16,
          fs: fs,
          fundo1: fundo1,
          fundo2: fundo2,
          damasGame: _0x1e44f8,
          getBuffer: getBuffer,
          getExtension: getExtension,
          getFileBuffer: getFileBuffer,
          getRandom: getRandom,
          getUniqueKey: _0x1b6f94,
          goldSystem: _0x4dc773,
          groupAdmins: _0x50dda3,
          groupMembers: _0x5c0540,
          groupMetadata: groupMetadata,
          groupName: _0x26d2bb,
          groupName_RG: _0x157177,
          hasAnyImage: _0x5e7226,
          hasAnyVideo: _0x2b8826,
          imageToWebp: imageToWebp,
          imgbebado: imgbebado,
          imgcorno: imgcorno,
          imgfeio: imgfeio,
          imggado: imggado,
          imggay: imggay,
          imggostosa: imggostosa,
          imggostoso: imggostoso,
          imgnazista: imgnazista,
          imgvesgo: imgvesgo,
          info: _0x1f574b,
          infodono: infodono,
          isBotGroupAdmins: _0x4e65a9,
          isConsole: _0x2faa0d,
          isGroup: _0x56a33e,
          isGroupAdmins: _0xe7fb69,
          isMedia: _0x1bce37,
          isModobn: _0xa05c1e,
          isMultiP: _0x4b9f62,
          isnit: _0x41e1b4,
          isNsfw: _0x20a886,
          isPremium: _0x1c0083,
          isQuotedAudio: _0x332ca8,
          isQuotedDocument: _0x42735d,
          isQuotedDocW: _0x3cff4e,
          isQuotedImage: _0x233c5e,
          isQuotedSticker: _0x17b069,
          isQuotedVideo: _0x575ab2,
          isQuotedViewOnceImage: _0x314a23,
          isQuotedViewOnceVideo: _0x54aeae,
          isWelkom: _0x3f8cdf,
          isWelkom2: _0x252369,
          JogoDaVelha: _0x56b443,
          kyun: kyun,
          lermais: lermais,
          levelSystem: _0x2e33c8,
          LIMPARDOCNT_QUEMJASAIU: _0x1ae2f3,
          listarPremium: _0x291a35,
          logoslink: logoslink,
          matarcmd: matarcmd,
          menc_jid2: _0x14615b,
          menc_os2: _0xa2d224,
          menc_prt: _0x2dddf1,
          mencionarIMG: _0x148433,
          mention: _0x309aff,
          mentions: _0x2b7d51,
          mentionSm: _0x91be61,
          moment: moment,
          mutarUsuario: _0x53e6a3,
          nescessario: nescessario,
          NickDono: NickDono,
          NomeDoBot: NomeDoBot,
          normalizeStickerId: _0x5d6f48,
          numerodono: _0x18d3dd,
          numerodono_ofc: numerodono_ofc,
          obterUsuariosMutados: _0x2dc255,
          optionsBuffer: _0x1d4dce,
          Os_Returns: _0x4b4903,
          path: path,
          palavrasc: palavrasc,
          pesytb: _0x51b03d,
          prefix: _0x552df2,
          pushname: _0x41e4e0,
          q: _0x42c9b3,
          q_2: _0xc8143e,
          quotedAudio: _0x97970b,
          quotedContact: _0x329fb4,
          quotedDocument: _0x35631e,
          quotedDocW: _0x1a2069,
          quotedImage: _0x264dfe,
          quotedLocation: _0x2b72a8,
          quotedMsg: _0x35273b,
          quotedMsg2: _0x38b37c,
          quotedMsg3: _0x418390,
          quotedProduct: _0x5d47c3,
          quotedSticker: _0x14a82d,
          quotedVideo: _0x5a4daa,
          reagirE: _0x23bc77,
          recognize: recognize,
          removerPremium: _0x36b596,
          reply: _0x42aca2,
          Res_Aguarde: _0x51e13b,
          Res_SoDono: _0x4dc99d,
          rnkcorno: rnkcorno,
          rnkgado: rnkgado,
          rnkgay: rnkgay,
          rnkgolpista: rnkgolpista,
          rnkgostosa: rnkgostosa,
          rnkgostoso: rnkgostoso,
          rnkhetero: rnkhetero,
          rnknazista: rnknazista,
          rnkotaku: rnkotaku,
          rnkpau: rnkpau,
          sender: _0x24d1f3,
          sender2: _0x21f527,
          sender_ou_n: _0x3065ec,
          sendImageAsSticker: sendImageAsSticker,
          sendImageAsSticker2: sendImageAsSticker2,
          sendSticker: _0x57d304,
          sendStickerFromUrl: _0x31e205,
          sendVideoAsSticker: sendVideoAsSticker,
          sendVideoAsSticker2: sendVideoAsSticker2,
          setGp: _0x5682e7,
          setNes: _0x6d2212,
          setting: setting,
          sharp: sharp,
          sleep: sleep,
          SNET: "@s.whatsapp.net",
          SoDono: _0x4694ac,
          stickerHelpers: _0x3892bb,
          tabela: tabela,
          tapacmd: tapacmd,
          tempo: _0x56b9eb,
          TEXTOS_GERAL: TEXTOS_GERAL,
          type: _0x476b60,
          updateGroupSettings: _0x1a4a3b,
          uptime: _0x555201,
          veriSttsLv: _0x1ea18a,
          verificarAluguelDB: _0x22502b,
          verificarN: _0xad7c84,
          verificarPremium: _0x5c1e1a,
          videoToWebp: videoToWebp,
          webp_mp4: webp_mp4,
          writeExif: writeExif,
          writeExifImg: writeExifImg,
          writeExifVid: writeExifVid,
          writeExifWebp: writeExifWebp,
          yts: _0x27e5c5,
          puxarTodosGrupos: puxarTodosGrupos,
          removerGrupoDoContador: _0x4f8b45,
          getGroupSettings: getGroupSettings,
          puxarGrupo: puxarGrupo,
          somembros: _0x3873d0,
          isBanchat: _0x4d3813
        };
        const _0x1b0269 = await handleCommand(_0x3a77fd);
        class _0xd03f1 {
          constructor(_0x174ccc, _0x41c4c2) {
            this.allCommands = [...new Set([..._0x174ccc, ..._0x41c4c2])];
            const _0x476cef = {
              q: ['w', 'a'],
              w: ['q', 'e', 's'],
              e: ['w', 'r', 'd'],
              r: ['e', 't', 'f'],
              t: ['r', 'y', 'g'],
              y: ['t', 'u', 'h'],
              u: ['y', 'i', 'j'],
              i: ['u', 'o', 'k'],
              o: ['i', 'p', 'l'],
              p: ['o', 'l'],
              a: ['q', 's', 'z'],
              s: ['w', 'a', 'd', 'x'],
              d: ['e', 's', 'f', 'c'],
              f: ['r', 'd', 'g', 'v'],
              g: ['t', 'f', 'h', 'b'],
              h: ['y', 'g', 'j', 'n'],
              j: ['u', 'h', 'k', 'm'],
              k: ['i', 'j', 'l'],
              l: ['o', 'k', 'p'],
              z: ['a', 's', 'x'],
              x: ['z', 's', 'd', 'c'],
              c: ['x', 'd', 'f', 'v'],
              v: ['c', 'f', 'g', 'b'],
              b: ['v', 'g', 'h', 'n'],
              n: ['b', 'h', 'j', 'm'],
              m: ['n', 'j', 'k']
            };
            this.keyboardProximity = _0x476cef;
            const _0xad767c = {
              á: 'a',
              à: 'a',
              ã: 'a',
              â: 'a',
              ä: 'a',
              é: 'e',
              è: 'e',
              ê: 'e',
              ë: 'e',
              í: 'i',
              ì: 'i',
              î: 'i',
              ï: 'i',
              ó: 'o',
              ò: 'o',
              õ: 'o',
              ô: 'o',
              ö: 'o',
              ú: 'u',
              ù: 'u',
              û: 'u',
              ü: 'u',
              ç: 'c',
              ñ: 'n'
            };
            this.accentMap = _0xad767c;
          }
          ["damerauLevenshteinDistance"](_0x4ea46e, _0x431095) {
            if (_0x4ea46e === _0x431095) {
              return 0;
            }
            if (!_0x4ea46e.length) {
              return _0x431095.length;
            }
            if (!_0x431095.length) {
              return _0x4ea46e.length;
            }
            const _0x4080a8 = _0x4ea46e.length;
            const _0x5da786 = _0x431095.length;
            const _0x28ce46 = _0x4080a8 + _0x5da786;
            const _0x1ace14 = Array(_0x4080a8 + 2).fill().map(() => Array(_0x5da786 + 2).fill(0));
            _0x1ace14[0][0] = _0x28ce46;
            for (let _0x351b1d = 0; _0x351b1d <= _0x4080a8; _0x351b1d++) {
              _0x1ace14[_0x351b1d + 1][0] = _0x28ce46;
              _0x1ace14[_0x351b1d + 1][1] = _0x351b1d;
            }
            for (let _0x16dffc = 0; _0x16dffc <= _0x5da786; _0x16dffc++) {
              _0x1ace14[0][_0x16dffc + 1] = _0x28ce46;
              _0x1ace14[1][_0x16dffc + 1] = _0x16dffc;
            }
            const _0x397e73 = {};
            for (let _0x5307a2 = 1; _0x5307a2 <= _0x4080a8; _0x5307a2++) {
              let _0x2acd83 = 0;
              for (let _0x16986e = 1; _0x16986e <= _0x5da786; _0x16986e++) {
                const _0x5771ec = _0x397e73[_0x431095[_0x16986e - 1]] || 0;
                const _0x23ccf1 = _0x2acd83;
                let _0x57190b = _0x4ea46e[_0x5307a2 - 1] === _0x431095[_0x16986e - 1] ? (_0x2acd83 = _0x16986e, 0) : 1;
                _0x1ace14[_0x5307a2 + 1][_0x16986e + 1] = Math.min(_0x1ace14[_0x5307a2][_0x16986e] + _0x57190b, _0x1ace14[_0x5307a2 + 1][_0x16986e] + 1, _0x1ace14[_0x5307a2][_0x16986e + 1] + 1, _0x1ace14[_0x5771ec][_0x23ccf1] + (_0x5307a2 - _0x5771ec - 1) + 1 + (_0x16986e - _0x23ccf1 - 1));
              }
              _0x397e73[_0x4ea46e[_0x5307a2 - 1]] = _0x5307a2;
            }
            return _0x1ace14[_0x4080a8 + 1][_0x5da786 + 1];
          }
          ["normalizeString"](_0x2c6a3f) {
            return _0x2c6a3f.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '').replace(/[-_]/g, '').split('').map(_0xa5ac67 => this.accentMap[_0xa5ac67] || _0xa5ac67).join('');
          }
          ["areKeysAdjacent"](_0x10a717, _0x303eb1) {
            const _0x4cb7bf = this.normalizeString(_0x10a717);
            const _0x49e312 = this.normalizeString(_0x303eb1);
            return this.keyboardProximity[_0x4cb7bf]?.["includes"](_0x49e312) || this.keyboardProximity[_0x49e312]?.["includes"](_0x4cb7bf);
          }
          ["calculateErrorWeight"](_0x4c5ee7, _0x30f0e6) {
            if (_0x4c5ee7 === _0x30f0e6) {
              return 0x0;
            }
            const _0x1068b9 = this.normalizeString(_0x4c5ee7);
            const _0x185c97 = this.normalizeString(_0x30f0e6);
            if (_0x1068b9 === _0x185c97) {
              return 0.1;
            }
            if (_0x4c5ee7.toLowerCase() === _0x30f0e6.toLowerCase()) {
              return 0.2;
            }
            if ((_0x4c5ee7 === '-' || _0x4c5ee7 === '_') && !_0x30f0e6 || (_0x30f0e6 === '-' || _0x30f0e6 === '_') && !_0x4c5ee7) {
              return 0.05;
            }
            if (this.areKeysAdjacent(_0x1068b9, _0x185c97)) {
              return 0.3;
            }
            const _0x3a3ea7 = [['s', 'z'], ['c', 'k'], ['c', 's'], ['ph', 'f'], ['ck', 'k'], ['x', 'ks'], ['w', 'v']];
            for (const [_0x376d7d, _0x2fa327] of _0x3a3ea7) if (_0x1068b9 === _0x376d7d && _0x185c97 === _0x2fa327 || _0x1068b9 === _0x2fa327 && _0x185c97 === _0x376d7d) {
              return 0.4;
            }
            return 0x1;
          }
          ["calculateAdvancedSimilarity"](_0x1e8356, _0x12a47b) {
            if (!_0x1e8356 || !_0x12a47b) {
              return 0;
            }
            const _0x4c8710 = this.normalizeString(_0x1e8356);
            const _0xf00707 = this.normalizeString(_0x12a47b);
            if (_0x4c8710 === _0xf00707) {
              return 100;
            }
            const _0x33af1c = Math.max(_0x1e8356.length, _0x12a47b.length);
            if (!_0x33af1c) {
              return 100;
            }
            const _0x417d28 = this.damerauLevenshteinDistance(_0x4c8710, _0xf00707);
            let _0x4bd0c9 = Math.round((_0x33af1c - _0x417d28) / _0x33af1c * 100);
            const _0x5c00cb = this.getCommonPrefixLength(_0x4c8710, _0xf00707);
            if (_0x5c00cb >= 2) {
              _0x4bd0c9 += Math.min(15, _0x5c00cb * 3);
            }
            const _0x57d258 = this.getCommonSuffixLength(_0x4c8710, _0xf00707);
            if (_0x57d258 >= 2) {
              _0x4bd0c9 += Math.min(10, _0x57d258 * 2);
            }
            if (this.hasSeparatorDifference(_0x1e8356, _0x12a47b)) {
              _0x4bd0c9 += 20;
            }
            const _0x47d896 = Math.abs(_0x1e8356.length - _0x12a47b.length);
            if (_0x47d896 > _0x33af1c * 0.5) {
              _0x4bd0c9 -= _0x47d896 * 2;
            }
            return Math.max(0, Math.min(100, _0x4bd0c9));
          }
          ["hasSeparatorDifference"](_0x1cee1b, _0x11e541) {
            const _0x263ca2 = _0x1cee1b.replace(/[-_]/g, '').toLowerCase();
            const _0x577b62 = _0x11e541.replace(/[-_]/g, '').toLowerCase();
            return _0x263ca2 === _0x577b62 && _0x1cee1b.toLowerCase() !== _0x11e541.toLowerCase();
          }
          ["getCommonPrefixLength"](_0x49bcfc, _0x4a166e) {
            let _0x33b457 = 0;
            while (_0x33b457 < _0x49bcfc.length && _0x33b457 < _0x4a166e.length && _0x49bcfc[_0x33b457] === _0x4a166e[_0x33b457]) {
              _0x33b457++;
            }
            return _0x33b457;
          }
          ["getCommonSuffixLength"](_0x8afb1d, _0x5b24cb) {
            let _0x2cb9d3 = 0;
            while (_0x2cb9d3 < _0x8afb1d.length && _0x2cb9d3 < _0x5b24cb.length && _0x8afb1d[_0x8afb1d.length - 1 - _0x2cb9d3] === _0x5b24cb[_0x5b24cb.length - 1 - _0x2cb9d3]) {
              _0x2cb9d3++;
            }
            return _0x2cb9d3;
          }
          ["isFlexiblePrefixMatch"](_0xd95884, _0xedbcee, _0x575b1d = 2) {
            if (_0xd95884.length < _0x575b1d) {
              return false;
            }
            const _0x39772c = this.normalizeString(_0xd95884);
            const _0x45f467 = this.normalizeString(_0xedbcee);
            if (_0x45f467.startsWith(_0x39772c)) {
              return true;
            }
            if (_0xd95884.length >= 4) {
              const _0x2b08f9 = this.calculateAdvancedSimilarity(_0x39772c, _0x45f467.substring(0, _0xd95884.length));
              return _0x2b08f9 >= 80;
            }
            return false;
          }
          ["brazilianSoundex"](_0x22c8b8) {
            const _0x5329f0 = this.normalizeString(_0x22c8b8).toUpperCase();
            if (!_0x5329f0) {
              return '';
            }
            let _0x3d06c2 = _0x5329f0[0];
            const _0x429c7d = {
              "[BFPV]": '1'
            };
            _0x429c7d["[CGJKQSXZ]"] = '2';
            _0x429c7d["[DT]"] = '3';
            _0x429c7d["[L]"] = '4';
            _0x429c7d["[MN]"] = '5';
            _0x429c7d["[R]"] = '6';
            let _0x5f4bc1 = '';
            for (let _0x3194aa = 1; _0x3194aa < _0x5329f0.length; _0x3194aa++) {
              let _0x191830 = _0x5329f0[_0x3194aa];
              for (const [_0x2d300d, _0x2487ad] of Object.entries(_0x429c7d)) {
                if (new RegExp(_0x2d300d).test(_0x191830)) {
                  if (_0x2487ad !== _0x5f4bc1) {
                    _0x3d06c2 += _0x2487ad;
                    _0x5f4bc1 = _0x2487ad;
                  }
                  break;
                }
              }
              if (_0x3d06c2.length >= 4) {
                break;
              }
            }
            return _0x3d06c2.padEnd(4, '0');
          }
          ["findSimilarCommand"](_0x5bb113) {
            const _0x124c9a = {
              command: '',
              similarity: 0x0
            };
            if (!_0x5bb113?.["trim"]()) {
              return _0x124c9a;
            }
            const _0xab2c34 = this.normalizeString(_0x5bb113.trim());
            let _0x1e7f67 = '';
            let _0x3ea12d = 0;
            for (const _0x3d2c26 of this.allCommands) {
              if (this.isFlexiblePrefixMatch(_0xab2c34, _0x3d2c26)) {
                const _0x4b7aec = Math.round(_0xab2c34.length / _0x3d2c26.length * 100);
                if (_0x4b7aec > _0x3ea12d && _0x4b7aec >= 70) {
                  _0x3ea12d = _0x4b7aec;
                  _0x1e7f67 = _0x3d2c26;
                }
              }
            }
            if (_0x1e7f67 && _0x3ea12d >= 80) {
              return {
                'command': _0x1e7f67,
                'similarity': _0x3ea12d
              };
            }
            let _0x22c688 = '';
            let _0x41f1d8 = 0;
            const _0x41f810 = Math.max(3, Math.floor(_0xab2c34.length * 0.6));
            const _0x28a6f1 = this.allCommands.filter(_0x214b17 => Math.abs(this.normalizeString(_0x214b17).length - _0xab2c34.length) <= _0x41f810);
            for (const _0x4d7704 of _0x28a6f1) {
              const _0x58e4f6 = this.calculateAdvancedSimilarity(_0x5bb113, _0x4d7704);
              if (_0x58e4f6 > _0x41f1d8) {
                _0x41f1d8 = _0x58e4f6;
                _0x22c688 = _0x4d7704;
              }
              if (_0x58e4f6 >= 95) {
                break;
              }
            }
            if (_0x41f1d8 < 50 && _0xab2c34.length >= 3) {
              const _0x2eb47b = this.brazilianSoundex(_0xab2c34);
              for (const _0x61f0cb of this.allCommands) {
                if (_0x61f0cb.length >= 3) {
                  const _0x5590cd = this.brazilianSoundex(_0x61f0cb);
                  if (_0x2eb47b === _0x5590cd) {
                    const _0x29f4d5 = this.calculateAdvancedSimilarity(_0x5bb113, _0x61f0cb);
                    if (_0x29f4d5 > _0x41f1d8) {
                      _0x41f1d8 = Math.max(_0x29f4d5, 40);
                      _0x22c688 = _0x61f0cb;
                    }
                  }
                }
              }
            }
            if (_0x41f1d8 < 30 && _0xab2c34.length <= 4) {
              for (const _0x1abcc4 of this.allCommands) {
                if (this.normalizeString(_0x1abcc4).length <= 8) {
                  const _0x538259 = this.calculateAdvancedSimilarity(_0x5bb113, _0x1abcc4);
                  if (_0x538259 > _0x41f1d8) {
                    _0x41f1d8 = _0x538259;
                    _0x22c688 = _0x1abcc4;
                  }
                }
              }
            }
            const _0x42bae3 = {
              command: _0x22c688
            };
            _0x42bae3.similarity = _0x41f1d8;
            return _0x42bae3;
          }
        }
        if (!_0x1b0269) {
          const {
            commandManager: _0x26718f
          } = require("./outros/funcoes/commandsManager");
          const _0x30a9fe = {
            name: _0x1d8cfd
          };
          const _0x498d1e = {
            isGroup: _0x56a33e,
            dataGp: _0x3c04e4,
            isGroupAdmins: _0xe7fb69,
            SoDono: _0x4694ac,
            sender: _0x24d1f3,
            from: _0x2e4f16,
            nescessario: nescessario
          };
          const _0x28b0e3 = _0x26718f.checkAdminOnlyGroup(_0x30a9fe, _0x498d1e);
          if (!_0x28b0e3.canExecute && !_0x28b0e3.message) {
            return;
          }
          if (!_0x28b0e3.canExecute && _0x28b0e3.message) {
            return _0x42aca2(_0x28b0e3.message);
          }
          try {
            const _0x4b880d = {
              BANCOP: BANCOP,
              sender: _0x24d1f3,
              from: _0x2e4f16,
              isGroup: _0x56a33e,
              SoDono: _0x4694ac,
              isGroupAdmins: _0xe7fb69,
              nescessario: nescessario
            };
            const _0x447554 = await _0x26718f.checkUnifiedLimitations(_0x1d8cfd, _0x4b880d);
            if (!_0x447554.canExecute) {
              if (!_0x447554.message) {
                return;
              }
              if (_0x447554.message) {
                return _0x42aca2(_0x447554.message);
              }
            }
          } catch (_0x2007a2) {
            console.error("Erro ao verificar limitações para comando inexistente:", _0x2007a2);
          }
          const _0x52340e = {
            text: '🚫',
            key: _0x1f574b.key
          };
          const _0x12da9b = {
            react: _0x52340e
          };
          await _0x3b3c6d.sendMessage(_0x2e4f16, _0x12da9b);
          const _0x38fcea = Array.from(_0x26718f.commands.keys());
          const _0x2fb41a = Array.from(_0x26718f.aliases.keys());
          const _0x4a5d24 = new _0xd03f1(_0x38fcea, _0x2fb41a);
          const _0x44f18d = _0x4a5d24.findSimilarCommand(_0x1d8cfd);
          let _0x12d931 = '';
          if (_0x1d8cfd.trim().length > 0) {
            let _0x42bff1 = '';
            if (_0x44f18d.similarity >= 25) {
              const _0x36469c = _0x44f18d.similarity >= 80 ? "🎯 Alta" : _0x44f18d.similarity >= 60 ? "✨ Média" : _0x44f18d.similarity >= 40 ? "💡 Baixa" : "🔍 Possível";
              _0x42bff1 = "\n│𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐒𝐢𝐦𝐢𝐥𝐚𝐫: " + _0x44f18d.command + "\n│𝐂𝐨𝐧𝐟𝐢𝐚𝐧ç𝐚: " + _0x36469c + " (" + _0x44f18d.similarity + '%)';
            }
            _0x12d931 = "\n├𝐂𝐨𝐦𝐚𝐧𝐝𝐨 " + _0x1d8cfd + "\n│𝐍𝐚̃𝐨 𝐄𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐝𝐨" + _0x42bff1;
          }
          let _0xfb0bc3 = _0x44f18d.similarity >= 70 ? "\n│💡 𝐃𝐢𝐜𝐚: 𝐃𝐢𝐠𝐢𝐭𝐞 " + _0x552df2 + "menu" : _0x44f18d.similarity >= 40 ? "\n│🤔 𝐐𝐮𝐞𝐫𝐢𝐚 𝐝𝐢𝐳𝐞𝐫 " + _0x552df2 + _0x44f18d.command + '?' : "\n│📚 𝐃𝐢𝐠𝐢𝐭𝐞 " + _0x552df2 + "menu";
          const _0x1a92e2 = "╭┅•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ" + _0x1a0049 + "❀⃘࣭࣭࣭࣭ꔷ⃔໑࣭࣭ٜ𖧹•┅╮" + _0x12d931 + _0xfb0bc3 + "\n│𝐏𝐚𝐫𝐚 𝐕𝐞𝐫 𝐓𝐨𝐝𝐨𝐬 𝐎𝐬 \n│𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐃𝐢𝐬𝐩𝐨𝐧í𝐯𝐞𝐢𝐬\n╰┅•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ" + _0x1a0049 + "❀⃘࣭࣭࣭࣭ꔷ⃔໑࣭࣭ٜ𖧹•┅╯";
          const _0x5820ae = {
            text: _0x1a92e2,
            mentions: [_0x24d1f3]
          };
          const _0x40507a = {
            quoted: _0x1f574b
          };
          _0x3b3c6d.sendMessage(_0x2e4f16, _0x5820ae, _0x40507a);
        }
      } else {
        if (_0x56a33e && _0x3c04e4[0]?.["autotranscrever"] && (_0x1f574b?.["message"]?.["videoMessage"] || _0x1f574b?.["message"]?.["audioMessage"])) {
          try {
            const _0x3c9646 = _0x1f574b?.["message"]?.["videoMessage"] ? JSON.parse(JSON.stringify(_0x1f574b).replace("quotedM", 'm')).message.videoMessage : JSON.parse(JSON.stringify(_0x1f574b).replace("quotedM", 'm'))?.["message"]?.["audioMessage"] ? JSON.parse(JSON.stringify(_0x1f574b).replace("quotedM", 'm'))?.["message"]?.["audioMessage"] : _0x1f574b.message.audioMessage;
            const _0x58594c = JSON.parse(JSON.stringify(_0x1f574b).replace("quotedM", 'm'))?.["message"]?.["audioMessage"] ? "audio" : "video";
            let _0x267f17 = await getFileBuffer(_0x3c9646, _0x58594c);
            let _0x3b9557 = Buffer.from(_0x267f17, "base64");
            let _0x57c877 = new FormData();
            _0x57c877.append("file", _0x3b9557, {
              'filename': _0x58594c === "audio" ? "audiofile" : "videofile",
              'contentType': _0x3c9646.mimetype
            });
            fetch(acessAPI.transcrever(), {
              'method': "POST",
              'body': _0x57c877
            }).then(_0xc1c5d3 => _0xc1c5d3.json()).then(_0x2844fc => {
              if (_0x2844fc.texto && _0x2844fc.texto.trim()) {
                _0x42aca2("🎤 *TRANSCRIÇÃO AUTOMÁTICA:*\n\n" + _0x2844fc.texto);
              }
            })["catch"](_0x22f1ff => {
              console.error("Erro na transcrição automática:", _0x22f1ff);
            });
          } catch (_0x4d6115) {
            console.error("Erro no sistema de auto transcrever:", _0x4d6115);
          }
        }
        if (_0x56a33e && _0x3c04e4[0]?.["autobaixar"]) {
          var _0x2d593c = linkfy.find(_0x42c9b3)[0]?.["isLink"] ? _0x42c9b3.includes("instagram.com/") && _0x42c9b3.length > 30 ? "instagram" : _0x42c9b3.includes("tiktok.com/") && _0x42c9b3.length > 30 ? "tiktok" : (_0x42c9b3.includes("https://twitter.com/") || _0x42c9b3.includes("https://x.com/")) && _0x42c9b3.length > 30 ? "twitter" : _0x42c9b3.includes("https://www.facebook.com/") || _0x42c9b3.includes("https://fb.watch/") ? "facebook" : _0x42c9b3.includes("spotify.com/") && _0x42c9b3.length > 30 ? "spotify" : _0x42c9b3.includes("kwai.com/") && _0x42c9b3.length > 25 ? "kwai" : _0x42c9b3.includes("https://youtube.com/shorts/") && _0x42c9b3.length > 25 ? "shorts" : _0x42c9b3.includes("soundcloud.com/") && _0x42c9b3.length > 17 ? "soundcloud" : _0x42c9b3.includes("threads.net/") && _0x42c9b3.length > 20 ? "threads" : _0x42c9b3.includes("ifunny.co/") && _0x42c9b3.length > 20 ? "ifunny" : false : false;
          switch (_0x2d593c) {
            case "ifunny":
              {
                _0x42aca2(_0x51e13b);
                try {
                  const _0x30d053 = {
                    quoted: _0x1f574b
                  };
                  _0x3b3c6d.sendMessage(_0x2e4f16, {
                    'video': {
                      'url': acessAPI.ifunny_mp4(_0x187940(_0x42c9b3.trim()))
                    },
                    'mimetype': "video/mp4"
                  }, _0x30d053);
                } catch (_0xb6e189) {
                  _0x42aca2("Erro...");
                }
              }
              break;
            case "threads":
              {
                _0x42aca2(_0x51e13b);
                try {
                  _0x3b3c6d.sendMessage(_0x2e4f16, {
                    'video': {
                      'url': acessAPI.threads(_0x187940(_0x42c9b3.trim()))
                    }
                  });
                } catch (_0xb3702b) {
                  return _0x42aca2("Erro...");
                }
              }
              break;
            case "soundcloud":
              {
                _0x42aca2(_0x51e13b);
                try {
                  const _0x57becc = {
                    quoted: _0x1f574b
                  };
                  _0x3b3c6d.sendMessage(_0x2e4f16, {
                    'audio': {
                      'url': acessAPI.soundcloud(_0x187940(_0x42c9b3.trim()))
                    },
                    'mimetype': "audio/mpeg"
                  }, _0x57becc);
                } catch (_0x2f28ff) {
                  return _0x42aca2("Erro...");
                }
              }
              break;
            case "spotify":
              {
                _0x42aca2(_0x51e13b);
                try {
                  _0x3b3c6d.sendMessage(_0x2e4f16, {
                    'audio': {
                      'url': acessAPI.spotify_mp3(_0x187940(_0x42c9b3.trim()))
                    },
                    'mimetype': "audio/mpeg",
                    'mentions': [_0x24d1f3]
                  })["catch"](async _0x572e6a => {
                    return;
                  });
                } catch (_0x1d4042) {
                  return;
                }
              }
              break;
            case "instagram":
              {
                try {
                  _0x42aca2(_0x51e13b);
                  let _0x1f4cf8 = await acessAPI.instagram(_0x187940(_0x42c9b3.trim()));
                  let _0x2983a8 = _0x1f4cf8.msg[0].type;
                  var _0x4175f0 = _0x2983a8 === "mp4" ? "video/mp4" : _0x2983a8 === "webp" ? "image/webp" : _0x2983a8 === "jpg" ? "image/jpeg" : _0x2983a8 === "mp3" ? "audio/mpeg" : "video/mp4";
                  const _0x1b0f78 = {
                    url: _0x1f4cf8.msg[0].url
                  };
                  const _0x2d0246 = {
                    url: _0x1f4cf8.msg[0].url
                  };
                  var _0x5393bd = _0x4175f0.split('/')[0] === "image" ? {
                    'image': _0x1b0f78,
                    'mimetype': _0x4175f0,
                    'mentions': [_0x24d1f3]
                  } : {
                    'video': _0x2d0246,
                    'mimetype': _0x4175f0,
                    'mentions': [_0x24d1f3]
                  };
                  _0x3b3c6d.sendMessage(_0x2e4f16, _0x5393bd)["catch"](_0x426c79 => {
                    return;
                  });
                } catch (_0x56eae0) {
                  return;
                }
              }
              break;
            case "tiktok":
            case "twitter":
            case "facebook":
            case "kwai":
            case "shorts":
              {
                try {
                  _0x42aca2(_0x51e13b);
                  _0x3b3c6d.sendMessage(_0x2e4f16, {
                    'video': {
                      'url': _0x2d593c === "tiktok" ? acessAPI.tiktok(_0x187940(_0x42c9b3.trim())) : _0x2d593c === "twitter" ? acessAPI.twitter(_0x187940(_0x42c9b3.trim()), false) : _0x2d593c === "kwai" ? acessAPI.kwai_mp4(_0x187940(_0x42c9b3.trim())) : _0x2d593c === "shorts" ? acessAPI.play(_0x187940(_0x42c9b3.trim()), false) : acessAPI.facebook(_0x187940(_0x42c9b3.trim()), false)
                    },
                    'mimetype': "video/mp4",
                    'mentions': [_0x24d1f3]
                  })["catch"](_0x11fcf5 => {
                    return;
                  });
                } catch (_0xceb135) {
                  return;
                }
              }
              break;
            default:
          }
        }
        const _0x460937 = async (_0x3c90d2, _0x56c0c4, _0x39ef21, _0x22fbad, _0x3fc9e8, _0x4f068e) => {
          let _0x5e146e = [_0x56c0c4, _0x39ef21, _0x22fbad, _0x3fc9e8, _0x4f068e];
          for (i of _0x5e146e) {
            if (!i) {
              return;
            }
            if (_0x1d5303.includes(i)) {
              const _0xa0700 = {
                url: _0x3c90d2
              };
              const _0x4d9f39 = {
                audio: _0xa0700,
                mimetype: "audio/mpeg",
                ptt: true
              };
              _0x3b3c6d.sendMessage(_0x2e4f16, _0x4d9f39);
            }
          }
        };
        const _0x3e2bc7 = async (_0x46e465, _0x429bfa, _0x52dad0, _0x3a6f1c, _0x44d336, _0x55c896, _0x214458) => {
          let _0x3c2caa = [_0x52dad0, _0x3a6f1c, _0x44d336, _0x55c896, _0x214458];
          for (i of _0x3c2caa) {
            if (!i) {
              return;
            }
            if (_0x541958.includes(i)) {
              var _0x4bd071 = require("./outros/funcoes/gtts.js")(_0x46e465);
              ranm = getRandom(".mp3");
              rano = getRandom(".ogg");
              _0x4bd071.save(ranm, _0x429bfa, function () {
                exec("ffmpeg -i " + ranm + " -ar 48000 -vn -c:a libopus " + rano, _0x206fcf => {
                  DLT_FL(ranm);
                  buffer = fs.readFileSync(rano);
                  const _0x4dc598 = {
                    audio: buffer,
                    ptt: true
                  };
                  const _0xdf4797 = {
                    quoted: _0x1f574b
                  };
                  _0x3b3c6d.sendMessage(_0x2e4f16, _0x4dc598, _0xdf4797);
                  DLT_FL(rano);
                });
              });
            }
          }
        };
        var _0x3701b4 = moment.tz("America/Sao_Paulo").format("HH:mm:ss");
        _0x3e2bc7('pt', "São " + _0x3701b4 + " da " + _0x56b9eb.split(" ")[1], "que horas sao?");
        if (_0x1d5303.toLowerCase() == "prefix" || _0x1d5303.toLowerCase() == "prefixo") {
          if (_0x1f574b.key.fromMe) {
            return;
          }
          try {
            const {
              commandManager: _0x13fbc2
            } = require("./outros/funcoes/commandsManager");
            const _0x43aa69 = {
              name: "prefix"
            };
            const _0x2e400c = {
              isGroup: _0x56a33e,
              dataGp: _0x3c04e4,
              isGroupAdmins: _0xe7fb69,
              SoDono: _0x4694ac,
              sender: _0x24d1f3,
              from: _0x2e4f16,
              nescessario: nescessario
            };
            const _0x21c5ce = _0x13fbc2.checkAdminOnlyGroup(_0x43aa69, _0x2e400c);
            if (!_0x21c5ce.canExecute && _0x21c5ce.message === null) {
              return;
            }
            if (!_0x21c5ce.canExecute && _0x21c5ce.message) {
              return _0x42aca2(_0x21c5ce.message);
            }
            const _0x581959 = {
              BANCOP: BANCOP,
              sender: _0x24d1f3,
              from: _0x2e4f16,
              isGroup: _0x56a33e,
              SoDono: _0x4694ac,
              isGroupAdmins: _0xe7fb69,
              nescessario: nescessario
            };
            const _0x57ba44 = await _0x13fbc2.checkUnifiedLimitations("prefix", _0x581959);
            if (!_0x57ba44.canExecute) {
              if (_0x57ba44.message === null) {
                return;
              }
              if (_0x57ba44.message) {
                return _0x42aca2(_0x57ba44.message);
              }
            }
          } catch (_0x12c0cd) {
            console.error("Erro ao verificar limitações para comando prefix:", _0x12c0cd);
          }
          const _0x5ce99c = TEXTOS_GERAL.PREFIXO_IMAGEM_URL;
          const _0x213d6b = TEXTOS_GERAL.PREFIXO_REDIRECT_URL.replaceAll("#numerodono#", numerodono_ofc);
          const _0x1ea223 = "https://sungbot.vip/api/redirect?redirect=" + encodeURIComponent(_0x213d6b) + "&imageUrl=" + encodeURIComponent(_0x5ce99c);
          const _0x2bb250 = TEXTOS_GERAL.PREFIXO_MENSAGEM.replaceAll(/#emoji#/g, _0x1a0049).replaceAll(/#prefix#/g, _0x552df2).replaceAll(/#nomebot#/g, NomeDoBot);
          const _0x377e8d = TEXTOS_GERAL.PREFIXO_PREVIEW_TITULO.replaceAll("#nomebot#", NomeDoBot);
          const _0x4f4ee7 = TEXTOS_GERAL.PREFIXO_PREVIEW_SUBTITULO;
          const _0x57f8c1 = {
            title: _0x377e8d,
            body: _0x4f4ee7,
            thumbnailUrl: _0x1ea223,
            sourceUrl: _0x1ea223,
            mediaType: 0x1,
            renderLargerThumbnail: false
          };
          const _0x4d3892 = {
            externalAdReply: _0x57f8c1
          };
          const _0x48020d = {
            text: _0x2bb250,
            contextInfo: _0x4d3892
          };
          const _0x1fc1cd = {
            quoted: _0x1f574b
          };
          _0x3b3c6d.sendMessage(_0x2e4f16, _0x48020d, _0x1fc1cd);
        }
        if (_0x541958.toLowerCase() == "mysender") {
          _0x42aca2(_0x24d1f3);
        }
        const _0x3bc4ea = {
          text: '✅',
          key: _0x1f574b.key
        };
        const _0x356946 = {
          react: _0x3bc4ea
        };
        if (_0x1d5303 == "btxon") {
          return _0x3b3c6d.sendMessage(_0x2e4f16, _0x356946);
        }
        let _0x218c82 = [];
        function _0x18f8d4() {
          try {
            const _0x4e31ea = JSON.parse(fs.readFileSync("./dados/autoresposta.json"));
            for (const _0x4ec4dd of _0x4e31ea) {
              if (_0x4ec4dd.contenha) {
                _0x4ec4dd._normalizedContenha = _0x4ec4dd.contenha.map(_0x3cda20 => _0x3cda20.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase());
              }
              if (_0x4ec4dd.comece) {
                _0x4ec4dd._normalizedComece = _0x4ec4dd.comece.map(_0x31ca01 => _0x31ca01.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase());
              }
            }
            _0x218c82 = _0x4e31ea;
          } catch (_0x53c8b3) {
            console.error("[ERRO] Falha ao carregar autoresposta:", _0x53c8b3);
          }
        }
        _0x18f8d4();
        const _0x309aa2 = {
          texto: _0x4770d9 => ({
            'text': _0x4770d9
          }),
          audio: _0x32265c => ({
            'audio': {
              'url': _0x32265c
            },
            'mimetype': "audio/mpeg",
            'ptt': true
          }),
          video: _0x53f9d8 => ({
            'video': {
              'url': _0x53f9d8
            },
            'mimetype': "video/mp4"
          }),
          imagem: _0x5f0d22 => ({
            'image': {
              'url': _0x5f0d22
            }
          }),
          sticker: _0x51ea13 => ({
            'sticker': {
              'url': _0x51ea13
            }
          }),
          react: _0x4196e3 => ({
            'react': {
              'text': _0x4196e3,
              'key': _0x1f574b.key
            }
          })
        };
        const _0x280824 = {
          "bom dia": "bomdia",
          "boa tarde": "boatarde",
          "boa noite": "boanoite"
        };
        const _0x1ae455 = {
          bomDia: ["Bom dia! Que o seu café esteja quente e o seu ânimo ainda mais.", "Comece o dia com um sorriso, e o resto vai acompanhar.", "Hoje é um novo capítulo esperando para ser escrito. Bom dia!", "Que o sol brilhe na sua vida tanto quanto ele brilha lá fora neste momento.", "Lembre-se de que cada manhã é uma oportunidade para recomeçar.", "Que a sua jornada de hoje seja repleta de realizações e alegrias.", "A vida é curta demais para não aproveitar cada segundo. Bom dia!", "Que o vento leve embora todas as preocupações e traga novas esperanças.", "Sorria, pois a felicidade é um presente que você merece. Bom dia!", "Que o dia seja tão incrível quanto a sua capacidade de sonhar.", "Bom dia! Que hoje você conquiste tudo aquilo que faz seu coração sorrir.", "Cada amanhecer traz consigo infinitas possibilidades. Aproveite cada uma delas!", "Que seu dia seja iluminado como os primeiros raios de sol da manhã.", "Bom dia! Que a positividade guie seus passos hoje e sempre.", "Acorde com determinação, durma com satisfação. Bom dia!", "Que seu dia seja abençoado e cheio de momentos especiais.", "Bom dia! Hoje é mais um dia para transformar sonhos em realidade.", "Que a alegria da manhã permaneça em seu coração o dia todo.", "Comece seu dia acreditando que coisas maravilhosas podem acontecer.", "Bom dia! Que hoje você espalhe sorrisos por onde passar."],
          boaTarde: ["Boa tarde! Espero que o seu dia esteja sendo tão incrível quanto você merece.", "Aproveite a tarde para recarregar as energias e seguir em frente!", "Não se esqueça de sorrir para o mundo, ele pode sorrir de volta. Boa tarde!", "Que a sua tarde seja leve e cheia de pequenas alegrias.", "O segredo é aproveitar cada momento, mesmo os mais simples. Boa tarde!", "Que a tarde traga consigo oportunidades e momentos especiais.", "Lembre-se de que você é capaz de enfrentar qualquer desafio. Boa tarde!", "Que o sol da tarde aqueça o seu coração e ilumine o seu caminho.", "A vida é feita de pequenos instantes que valem a pena. Boa tarde!", "Que a sua tarde seja tão incrível quanto o pôr do sol.", "Boa tarde! Que as horas seguintes sejam repletas de conquistas.", "Que esta tarde traga consigo muitas razões para sorrir.", "Boa tarde! Continue fazendo seu melhor em tudo que fizer.", "Que a energia desta tarde renove suas forças e esperanças.", "Boa tarde! Que cada minuto seja uma oportunidade de ser feliz.", "Desejo uma tarde produtiva e cheia de realizações para você.", "Que sua tarde seja tão bonita quanto um jardim em flor.", "Boa tarde! Mantenha seu coração leve e seus pensamentos positivos.", "Que esta tarde seja um momento de paz e realizações em sua vida.", "Boa tarde! Que a alegria tome conta do seu coração."],
          boaNoite: ["Boa noite! Que os seus sonhos sejam tão doces quanto um pedaço de chocolate.", "Hora de descansar e recarregar para um novo dia. Boa noite!", "Que a lua ilumine seus pensamentos e traga tranquilidade. Boa noite!", "Que os anjos cuidem do seu sono e dos seus sonhos. Boa noite!", "Lembre-se de agradecer pelas pequenas coisas antes de fechar os olhos.", "Que a noite traga paz e serenidade para o seu coração.", "Que os problemas se transformem em soluções enquanto você dorme. Boa noite!", "Que os seus pensamentos sejam leves e os seus sonhos, inspiradores.", "Amanhã é uma nova chance para fazer tudo ainda melhor. Boa noite!", "Que o silêncio da noite traga reflexões e descanso merecido.", "Boa noite! Que seu sono seja tranquilo e renovador.", "Que esta noite seja um momento de paz e descanso em sua vida.", "Boa noite! Que os sonhos mais doces povoem seu sono.", "Que o manto da noite cubra você de paz e serenidade.", "Boa noite! Que o amanhã traga novas e belas surpresas.", "Descanse bem e acorde com ainda mais energia e disposição.", "Boa noite! Que as estrelas iluminem seus sonhos mais bonitos.", "Que esta noite seja repleta de paz e boas energias.", "Boa noite! Deixe as preocupações descansarem também.", "Que seu sono seja abençoado e seu despertar ainda mais."]
        };
        const _0x554f31 = {
          'audios': _0x280824,
          'frases': _0x1ae455,
          'processarSaudacao'(_0x4a6ba8, _0x21890d) {
            const _0x176d87 = _0x4a6ba8.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
            const _0x46a1e0 = {
              "bom dia": this.frases.bomDia
            };
            _0x46a1e0["boa tarde"] = this.frases.boaTarde;
            _0x46a1e0["boa noite"] = this.frases.boaNoite;
            if (_0x21890d) {
              for (const [_0x431c2c, _0x3a93e9] of Object.entries(_0x46a1e0)) {
                if (_0x176d87.includes(_0x431c2c)) {
                  _0x42aca2(_0x3a93e9[Math.floor(Math.random() * _0x3a93e9.length)]);
                  return true;
                }
              }
            } else {
              for (const [_0xe70052, _0x5a179d] of Object.entries(this.audios)) {
                if (_0x176d87.includes(_0xe70052)) {
                  try {
                    const _0x1c9f27 = {
                      quoted: _0x1f574b
                    };
                    _0x3b3c6d.sendMessage(_0x2e4f16, {
                      'audio': {
                        'url': "./dados/midias/audios/" + _0x5a179d + Math.floor(Math.random() * 3) + ".mp3"
                      },
                      'mimetype': "audio/mpeg",
                      'ptt': true
                    }, _0x1c9f27);
                  } catch (_0x27f899) {
                    console.error("Erro ao enviar áudio de saudação:", _0x27f899);
                  }
                  return true;
                }
              }
            }
            return false;
          }
        };
        async function _0xa03bd() {
          try {
            let _0x3ce0c3 = false;
            if (_0x56a33e && _0x3c04e4[0]?.["saudacao"]?.["ativo"]) {
              _0x3ce0c3 = _0x554f31.processarSaudacao(_0x541958, _0x3c04e4[0]?.["saudacao"]?.["modo"] === "texto");
            }
            if (!_0x20786c) {
              return;
            }
            if (_0x1d5303.toLowerCase() === "bot") {
              const _0x14055b = ["oi delícia", "oi amor da minha vida", "oi princesa do meu coração"];
              return _0x42aca2(_0x14055b[Math.floor(Math.random() * _0x14055b.length)]);
            }
            if (_0x541958.toLowerCase().includes("adivinha meu celular") || _0x541958.toLowerCase().includes("bot qual meu celular")) {
              const _0x5c7e53 = {
                text: _0xe00c8f
              };
              const _0x17ce78 = {
                quoted: _0x1f574b
              };
              return _0x3b3c6d.sendMessage(_0x2e4f16, _0x5c7e53, _0x17ce78);
            }
            if (_0x541958.toLowerCase().includes("corno")) {
              return _0x460937("./dados/midias/audios/corno.mp3", "corno");
            }
            const _0xfd6ad5 = _0x541958.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
            const _0x552f7f = [];
            for (const _0x1b2455 of _0x218c82) {
              if (!_0x1b2455.para || !_0x1b2455.para.includes("global") && !_0x1b2455.para.includes(_0x2e4f16)) {
                continue;
              }
              let _0x5d7c81 = false;
              if (_0x1b2455._normalizedContenha) {
                for (const _0x2485e0 of _0x1b2455._normalizedContenha) {
                  if (_0xfd6ad5.includes(_0x2485e0)) {
                    _0x5d7c81 = true;
                    break;
                  }
                }
              }
              if (!_0x5d7c81 && _0x1b2455._normalizedComece) {
                for (const _0x1b3d0a of _0x1b2455._normalizedComece) {
                  if (_0xfd6ad5.startsWith(_0x1b3d0a)) {
                    _0x5d7c81 = true;
                    break;
                  }
                }
              }
              if (_0x5d7c81 && _0x1b2455.enviar?.["length"]) {
                if (_0x3ce0c3 && _0x3c04e4[0]?.["saudacao"]?.["modo"] === "texto" && _0x1b2455.tipo === "texto") {
                  continue;
                }
                _0x552f7f.push({
                  'tipo': _0x1b2455.tipo,
                  'resposta': _0x1b2455.enviar[Math.floor(Math.random() * _0x1b2455.enviar.length)]
                });
              }
            }
            for (const _0x54a988 of _0x552f7f) {
              try {
                if (_0x54a988.tipo === "stickerlink") {
                  await enviarfiguUrl(_0x3b3c6d, _0x2e4f16, _0x54a988.resposta, _0x1f574b);
                } else {
                  if (_0x309aa2[_0x54a988.tipo]) {
                    const _0x3590ad = {
                      quoted: _0x1f574b
                    };
                    await _0x3b3c6d.sendMessage(_0x2e4f16, _0x309aa2[_0x54a988.tipo](_0x54a988.resposta), _0x3590ad);
                  }
                }
                await sleep(100);
              } catch (_0x1e1c14) {
                console.error("Erro ao enviar resposta automática:", _0x1e1c14);
              }
            }
          } catch (_0x4bbcbe) {
            console.error("Erro no sistema de respostas automáticas:", _0x4bbcbe);
          }
        }
        _0xa03bd();
        if (_0x56a33e && _0xc04622 && _0x52e70e) {
          const _0x2b422d = async _0x42c01b => {
            let _0x4be08b = await fetchJson("https://api.bronxyshost.com.br/api-bronxys/simsimi?apikey=JOSI_652&pergunta=" + _0x42c01b);
            return _0x4be08b.resposta;
          };
          let _0x5b55d9 = await _0x2b422d(_0x52e70e);
          if (_0x5b55d9) {
            if (TEXTOS_GERAL.PALAVRAS_PROIBIDA_DE_O_SIMI_FALAR.some(_0x321c5b => _0x5b55d9?.["toLowerCase"]()["normalize"]("NFD")["replace"](/[\u0300-\u036f]/g, '')["includes"](_0x321c5b))) {
              return;
            }
            _0x42aca2(_0x5b55d9);
          }
        }
        if (_0x56a33e && _0x476b60 === "extendedTextMessage" && _0x1f574b?.["message"]?.["extendedTextMessage"]?.["contextInfo"]?.["quotedMessage"]?.["conversation"]) {
          let _0x1f3a40 = _0x1f574b?.["message"]?.["extendedTextMessage"]?.["contextInfo"]?.["quotedMessage"]?.["conversation"]?.["trim"]() || false;
          let _0x49c23d = _0x1f574b?.["message"]?.["extendedTextMessage"]?.["text"]?.["trim"]() || false;
          if (_0x1f3a40 && _0x49c23d) {
            try {
              await fetchJson("https://api.bronxyshost.com.br/api-bronxys/simsimi_add?apikey=JOSI_652&pergunta=" + _0x1f3a40 + "&resposta=" + _0x49c23d);
            } catch {
              return;
            }
          }
        }
        const _0x1941b8 = require("./outros/funcoes/simih2.js");
        if (_0x1ca944 && _0x56a33e && !_0x1c55dc && !linkfy.find(_0x52e70e)[0]?.["isLink"]) {
          const _0x2fa658 = _0x1941b8.obterRespostaSimih2(BANCOP, _0x52e70e);
          if (_0x2fa658 && _0x2fa658 !== _0x552df2) {
            _0x42aca2(_0x2fa658);
          }
        }
        if (!_0x1c55dc && _0x56a33e && _0x1ca944) {
          try {
            const _0x2863f7 = _0x1f574b?.["message"]?.["extendedTextMessage"]?.["contextInfo"]?.["quotedMessage"]?.["conversation"];
            const _0x4a65a1 = _0x1f574b?.["message"]?.["extendedTextMessage"]?.["text"] || '';
            if (_0x2863f7 && _0x4a65a1 && _0x2863f7 !== _0x4a65a1) {
              _0x1941b8.adicionarMensagemSimih2(BANCOP, _0x2863f7, _0x4a65a1);
            }
          } catch (_0x1dc3a8) {
            console.error("Erro ao adicionar mensagem ao Simih2:", _0x1dc3a8);
          }
        }
      }
    }
  } catch (_0x1f444e) {
    console.log("Erro no processamento de mensagens:", _0x1f444e);
  }
};
const _0x541ff9 = {
  processarMensagens: processarMensagens
};
module.exports = _0x541ff9;
