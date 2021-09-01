//requisição do módulo OS
const os = require('os')

//importando a função log do arquivo logger.js
const log = require('./logger')


//função setInterval executa de forma intermitente >> argumentos= (arrow function, tempo) 
setInterval(()=>{

    const { freemem, totalmem } = os

    const total = parseInt(totalmem() / 1024 / 1024)  //memoria total
    const mem = parseInt(freemem() / 1024 / 1024)     //memoria livre
    const percents = parseInt((mem / total) * 100)    //percentual de memoria usada

    //criando objeto com o status
    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`,
    }

    console.clear()
    console.log(' - - - PC STATS - - - ')
    console.table(stats)


    //chamando função log e passando objeto stats com JSON
    log(JSON.stringify(stats)+'\n')

}, 1000)