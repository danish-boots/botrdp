let handler  = async (m, { conn, usedPrefix }) => { 
	conn.sendButton(m.chat, `Halo Kak👋\nsaya adalah NekoBotz, NekoBotz adalah Sebuah Bot yang bisa membantumu di grup ini, klik tombol dibawah ini jika kamu ingin menggunakan bot!`.trim(), '© nekobotz', 'Menu', '.menu', m)
	}

handler.command = /^(salken)$/i

module.exports = handler