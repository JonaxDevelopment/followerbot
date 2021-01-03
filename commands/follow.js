const Discord = require("discord.js");
const Roblox = require("roblox")
var fs = require('fs');
const axios = require('axios')
let proxies;
let cookies;
let roblox;

try {
  proxies = fs.readFileSync(`./proxies.txt`, 'utf8')
} catch (err) {
  console.error(err)
}
try {
  cookies = fs.readFileSync(`./cookies.txt`, 'utf8')
} catch (err) {
  console.error(err)
}
let   headers = {
            'cookie': '.ROBLOSECURITY='+ cookies,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36',
            'x-csrf-token': Roblox.BypassXToken(cookies),
        }

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.reply('``Wrong arguments, example: s!follow 123456 ``')
  if (isNaN(args[0])) return message.reply('``That is not a valid UserID!``')
  
  


//message.channel.send(new Discord.MessageEmbed()
                     //.setColor('RED')
                     //.setDescription('**Synthetic**\n *Coded by jonax* \n \n``There is an error, it has been logged in console. Please DM Jonax to check it out!``'));};
  axios
  .post('https://friends.roblox.com/v1/users/'+ args[0]+'/follow',headers=headers,proxies={'https': 'http://%s' % (proxies)})
  .then((res) => {
    console.log(proxies)
    console.log(cookies)
    message.reply(new Discord.MessageEmbed()
                      .setColor('GREEN')
                      .setDescription('**Synthetic**\n *Coded by jonax* \n \n``Successfully sending 30 followers to ' + args[0] + '``'));
    console.log('Res:', res)
  })
  .catch((err) => {
    message.reply(new Discord.MessageEmbed()
                     .setColor('RED')
                     .setDescription('**Synthetic**\n *Coded by jonax* \n \n``There is an error, it has been logged in console. Please DM Jonax to check it out!``'));
    console.error('ERROR', err)
  })
}