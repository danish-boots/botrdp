let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Bulan* :      *Rp 20000*
╠➥ *Permanen* : *Rp 30000*
╠➥ *Premium* :   *Rp 20000*
╠➥ *Sc Bot* :        *Rp 50000*
║
╠═〘 PEMBAYARAN 〙 ═
╠➥ Gopay, Dana, Dan Pulsa
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©2021 Rpg wabot-aq
╠═ Scrip original by Nurutomo
╠═〘 ELAINABOT 〙 ═`.trim(), '© ElainaBot', 'Dana', '#viadana', 'GoPay', '#viagopay', m)
}

handler.command = /^sewa(bot)?$/i

module.exports = handler