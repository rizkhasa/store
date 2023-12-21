const fs = require('fs')

global.namabot = "ZeniBot"
global.namaowner = "KSR CLOUD"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6289653898291']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Qris All Pay
Ovo
Dana
Gopay

Mau ganti payment? ketik .setpay
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `*「 KSR CLOUD MENU 」*
────────────────────────────  
  Halo *${pushname}*
────────────────────────────

*KETIK SESUAI LIST _(Contoh:Youtube)_

» Netflix
» Youtube
» Spotify
» Canva
» PrimeVideo
» Viu
» WeTV
» Nitro
» AlightMotion
» Payment _(Untuk melakukan pembayaran)_

» Ketik _*.Owner*_ Untuk menghubungi owner

📝 *NOTE*: 
Fitur bisa dipakai dengan atau tanpa prefix.
Jangan Spam BOT! :)
`
}