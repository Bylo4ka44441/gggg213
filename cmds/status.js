const discord = require("discord.js")
module.exports.run = (bot, message,args) => {
  let e = new discord.MessageEmbed();
  e.setTitle("Bot Status")
  e.setDescription(`Bot ping is ${bot.ws.ping}`);
  e.setFooter("Mimic| Все права замазаны");
  message.channel.send(e);
}