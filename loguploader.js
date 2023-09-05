const { readdirSync, writeFileSync } = require('fs');
let html = `\t\t\t\t<tr>\n\t\t\t\t\t<th>Game Chat Logs</th>\n\t\t\t\t\t<th>Game Replays</th>\n\t\t\t\t</tr>`;
let replays = readdirSync('./replays')

readdirSync('./logs').forEach((f, number = 0) => {
    console.log(`${f}\n${replays[number]}`)
    html = `${html}\n\t\t\t\t<tr>\n\t\t\t\t\t<td><a href="./logs/${f}">${f}</a></td>\n\t\t\t\t\t<td><a href="./replays/${replays[number]}" download>Download Replay</a></td>\n\t\t\t\t</tr>`
    writeFileSync('./logs.html', html)
});