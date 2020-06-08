const Discord = require('discord.js');
//Компоненты

module.exports.run = (bot,message,args) => {

let user = args[0]
if (!user) return message.channel.send("Please mention a TWO USERS to battle!");
//Указать первого пользователя
  
let user2 = args[1]
if(!user2) return message.channel.send("Please mention a TWO USER to battle!");
//Указать второго пользователя
  
let e = new Discord.MessageEmbed()
        let chance = Math.floor(Math.random * 20) + 1;
        if (chance < 10) {
            
            e.addField("Win", user2);
            e.addField("Lose", user);
            e.setColor("RANDOM")
            e.setFooter("Mimic | все права замазаны")
            message.channel.send(e)
          //USER2 победил USER

        } else {
    
            e.addField("Win", user);
            e.addField("Lose", user2);
            e.setColor("RANDOM")
            e.setFooter("Mimic | все права замазаны")
            message.channel.send(e)
          //USER победил USER2
            
        }
}