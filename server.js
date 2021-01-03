// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const fs = require("fs")
const roblox = require("noblox.js")
const express = require("express");
const app = express();
const moment = require("moment")
const Discord = require("discord.js");
const cooldowns = new Discord.Collection();
const client = new Discord.Client({ fetchAllMembers: true });
const prefix = process.env.PREFIX;
const Client = new Discord.Client();

Client.on("ready", () => {
  console.log("Bot is online!");
 Client.user.setActivity("Jonax | Synthetic V1", {type: 3});	
});

Client.login(process.env.BOT_TOKEN);
// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});


Client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.toLowerCase().indexOf(prefix.toLowerCase()) !== 0) return;
  

  // This is the best way to define args. Trust me.
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {}
 
});

