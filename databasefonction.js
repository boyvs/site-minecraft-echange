const fs = require('fs')

function readData(dbName){
    const data = fs.readFileSync(dbName, 'utf-8')
    return JSON.parse(data)
}

function writeData(obj, dbName){
    if (!obj){return console.log('please provide data to save')}
    try {
        fs.writeFileSync(dbName, JSON.stringify(obj))
        return console.log('Saved')
    } catch (err){
        return console.log('save failed')
    }
}

export default {readData,writeData}