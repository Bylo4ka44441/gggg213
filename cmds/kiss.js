const req = require("request");
const d = require("discord.js");
module.exports.run = (bot, message,args) => {
  let member = message.mentions.users.first();
  req({url: "http://nekos.life/api/kiss",json: true },(req,res,json) => {
    if(!member) return;
    
    let e = new d.MessageEmbed();
    e.setTitle(`${message.author.username} поцеловал(а) ${member.username}`);
    e.setImage(json.url);
    e.setFooter("Mimic | все права замазаны")
    message.channel.send(e);
  })
}