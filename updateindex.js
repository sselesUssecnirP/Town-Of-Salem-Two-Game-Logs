const { readdirSync, writeFileSync, readFileSync } = require('fs');
const settings = require('./settings.json')

let html = readFileSync('./index.html', { encoding: 'utf-8', flags: 'r' });
console.log(`${html}\n${typeof html}\n${settings.username}`)
writeFileSync('./index.html', html.replace(/{insert_username}/g, settings.username))