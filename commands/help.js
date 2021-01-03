const Discord = require("discord.js");
/*

module.exports.run = async (client, message, args) => {
    await message.channel.send('**HELP COMMAND** \n G!ban: Bans a user! (**NEED BAN PERMS**) \n G!help: Shows you all the commands! \n G!kick: Kicks a user! (**NEED KICK PERMS**) \n G!ping: Show the latency of the bot in Ms! \n G!status: Shows the status of the Voice Channel API , The radio status and The bot status! \n G!nowplaying: Shows you the songs that are playing!\n G!request <song>: Sends a request for a dj to play the song!\n G!suggest <suggestion> Ahows what you suggested **ONLY DO IT IN THE SUGGESTIONS CHANNEL**\n **MORE TO COME** ');
}

module.exports.help = {
    name: "help",
    description: "help",
    usage: "help"
}*/


exports.run = async (bot, message, args) => {
  message.channel.send(new Discord.MessageEmbed()
                      .setColor('SALMON')
                      .setDescription('**Synthetic** \n \n ``s!follow [USERID] ``\n'));};


exports.help = {
    name: "help",
    desc: "Display All Commands.",
    usage: "help [command]"
};