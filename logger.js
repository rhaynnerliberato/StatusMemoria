//módulo para executar funções a partir de eventos que acontecem
const EventEmitter = require('events')
const emitter = new EventEmitter()

//módulo para gravar informações nos arquivos do projeto
const fs = require('fs')

//módulo para pegar o caminho dos arquivos dentro do projeto, pelo nome. 
const path = require('path')


//jogando mensagem pra dentro do arquivo log.txt
emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, (err)=>{
        if(err) throw err
    })
})


//função que emite mensagem de log
function log(message){
    emitter.emit('log', message)
}

//exportando função log
module.exports = log