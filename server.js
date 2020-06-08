const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const enmap = require("enmap");
const dashboard = require("./dashboard.js");
const talkedRecently = new Set();
require("./functions.js")
global.music_disp = [];
global.players = new enmap("players");
global.servers = new enmap("servers");
global.gulag = new enmap("gulag");
global.client = bot;



bot.on("message", message => {
  
  
  let prefix = global.servers.get(message.guild.id).prefix;

  //сам попробуешь?
  //или мне самому?
  //не знаю ща попробую сам, если что резерку я ща сделаю
  if(global.players.get(message.author.id)){
    if (talkedRecently.has(message.author.id)) {
    } else {

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 30000);
    if(!message.author.bot){
    let base = global.players.get(message.author.id);
    base.xp = base.xp + base.eps;
    if(base.xp >= base.lvl*50){
      base.lvl++;
      base.xp = 0;
      message.reply("Вы достигли уровня " + base.lvl);
    }
    global.players.set(message.author.id,base);
    }
  }
  }
  
  
  const cmds = fs.readdirSync("./cmds/");
  
  
  cmds.forEach( element => {
    
    
    if(message.content.startsWith(prefix + element.split(".")[0])){
      let args = message.content.split(" ").slice(1);
      require("./cmds/" + element).run(bot,message,args);
    }
    
  });
  
  
  if(message.content.startsWith("<@713378359240818718>")){
    message.channel.send("Мой префикс на данном сервере: `" + global.servers.get(message.guild.id).prefix + "`");
  }
});

bot.on('ready', () => {
  console.log("Я готов!")
})

bot.on("guildCreate", guild => {
  
  if(global.gulag.get(guild.owner.id)){
    return guild.leave();
  }
  let server = {
    access_token: "",
    prefix: "!",
    toggle_hi: false,
    hi_channel: "",
    hi_text: ""
  }
  
  global.servers.set(guild.id,server);
})


bot.on("guildDelete", guild => {
  global.servers.delete(guild.id);
});



bot.on("guildMemberAdd", member => {
  if(global.servers.get(member.guild.id).toggle_hi == "on"){
    const channel = member.guild.channels.cache.find(c => c.name == global.servers.get(member.guild.id).hi_channel);
    let text = global.servers.get(member.guild.id).hi_text;
    text = text.replace("{member}", member);
    text = text.replace("{guild}", member.guild.name);
    text = text.replace("{count}",member.guild.memberCount);
    
    channel.send(text);
  }
})

bot.login("NzEzMzc4MzU5MjQwODE4NzE4.XsfPaA.twU7KPhGvWOn49jFilU2lQO_VIw");

