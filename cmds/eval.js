let discord = require("discord.js");
module.exports.run = (bot, message,args) => {
  const whitelist = ["715515166032396318","343145699975626764"]
  if(!whitelist.includes(message.author.id)) return;
  let code = args.join(" ");
  
  
  
  try{
  let evalved = eval(code);
    
    if(typeof evalved === "object"){
      const util = require("util");
      evalved = util.inspect(evalved);
    }
  let e = new discord.MessageEmbed();
  let arr = ["```",`Input:${code}`,`Output:${evalved}`,`Type:${typeof evalved}`,"```"]
  message.channel.send(arr.join("\n"));
  }catch(e){
message.channel.send("```" + e.message + "```");
  }
}