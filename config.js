/*
Base Whatsapp Bot
By AlwaysHanzz
*/

//~~~~~Setting Global~~~~~//

global.owner = ["6281936513894"] // Nomor Pemilik
global.bot = "628386087723" // Nomor Bot
global.namabot = "AteusCrasher Via Wa V1" // Nama Bot
global.namaown = "Always Hanzz" // Nama owner

//~~~~~Status Diperbarui~~~~~//
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})