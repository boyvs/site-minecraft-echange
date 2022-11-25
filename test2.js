const {writeData} = require('./databasefonction')

const obj = {
    pute: "t'est 2 pute"
}

writeData(obj,"data/Password.json")