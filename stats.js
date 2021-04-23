const os = require('os')
const log = require('./logger')



setInterval(() => {
    const freemen = os.freemem()
    const totalmen = os.totalmem()

    const total = parseInt(totalmen / 1024 / 1024)
    const men = parseInt(freemen / 1024 / 1024)
    const percents = parseInt((men / total) * 100)
    const stats = {
        free: `${men} MB`,
        total: `${total} MB`,
        usage: `${percents} %`
    }

    console.clear()
    console.log("===== PC STATS =====")
    console.table(stats)

    log(`${JSON.stringify(stats)}\n`)
}, 2000)


