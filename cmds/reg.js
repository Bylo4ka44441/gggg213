module.exports.run = (bot, message,args) => {
  
  let newplayer = {
    xp: 0,
    lvl: 0,
    coins: 0,
    eps: 1,
    married: "None",
    sub: false,
    sub_rankimage: ""
    
  }
  
  global.players.set(message.author.id,newplayer);
  message.react("✅");
  
}