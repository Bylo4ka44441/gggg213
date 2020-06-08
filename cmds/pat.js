const req = require("request");
const d = require("discord.js");
module.exports.run = (bot, message,args) => {
  let member = message.mentions.users.first();
  req({url: "http://nekos.life/api/pat",json: true },(req,res,json) => {
    if(!member) return;
    
    let e = new d.MessageEmbed();
    e.setTitle(`${message.author.username} погладил(а) ${member.username}`);
    e.setImage(json.url);
    message.channel.send(e);
    e.setFooter("Mimic | все права замазаны")
  })
}