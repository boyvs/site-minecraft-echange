import readData from "./databasefonction.js"

export default function Login(servoulue,login,password){
    if (readData('./data/Password.json')[servoulue]===undefined){
        return 'server inconnue'
    }
    if (readData('./data/Password.json')[servoulue][login]===undefined){
        return 'login inconnue'
    }
    passwordRequire = readData('./data/Password.json')[servoulue][login]
    if (password === passwordRequire){
        return 'good'
    }
}