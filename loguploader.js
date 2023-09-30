const { readdirSync, writeFileSync, readFileSync } = require('fs');
let html = `\t\t\t\t<tr>\n\t\t\t\t\t<th>Game Chat Logs</th>\n\t\t\t\t\t<th>Game Name</th>\n\t\t\t\t\t<th>Role</th>\n\t\t\t\t\t<th>Game Replays</th>\n\t\t\t\t</tr>`;
let replays = readdirSync('./replays')
let settings = require('./settings.json')

readdirSync('./uploadlogs').forEach((f, number = 0) => {
    let playerName;
    let role;
    let username;
    const regex = /<span><br>\[[0-9]{1,2}\] ([\s\S]*?) - <\/span>(<span style="color:#[0-9A-Fa-f]+"> [\s\S]*? <\/span>)[\s\S]*?\(Username: ([\s\S]+?)\)<\/i><\/span>/g;

    let match;
    while ((match = regex.exec(readFileSync(`./uploadlogs/${f}`, { encoding: 'utf-8', flags: 'r' }))) !== null) {
    if (match[3].trim() == settings.username) {
        playerName = match[1].trim();
        role = match[2].trim();
        username = match[3].trim();
    }
    }

    console.log(`${f}\n${replays[number]}`)
    html = `${html}\n\t\t\t\t<tr>\n\t\t\t\t\t<td><a href="./uploadlogs/${f}">${f}</a></td>\n\t\t\t\t\t<td style="color:#fff">${playerName || '<span style="color:#fff">Anonymous</span>'}</td>\n\t\t\t\t\t<td>${role || '<span style="color:#fff">Anonymous</span>'}</td>\n\t\t\t\t\t<td><a href="./replays/${replays[number]}" download>Download Replay</a></td>\n\t\t\t\t</tr>`
    writeFileSync('./logs.html', html)
});