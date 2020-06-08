const discord = require("discord.js");
const canvas = require("canvas");
module.exports.run = async(bot, message,args) => {
  let p = null;
  let user = null;
  if(!args[0]){
    p = global.players.get(message.author.id);
    user = await bot.users.fetch(message.author.id);
  }else{
    p = global.players.get(args[0]);
    user = await bot.users.fetch(args[0]);
  }

  const card = canvas.createCanvas(900,200);
  let ctx = card.getContext("2d");
  if(p.sub && p.sub_rankimage != ""){
    let rankimage = await canvas.loadImage(p.sub_rankimage);
    ctx.drawImage(rankimage,0,0,900,200);
  }
  ctx.fillStyle = "white";
  let avatar = await canvas.loadImage(user.avatarURL({format:"png"}))
  ctx.drawImage(avatar,20,30,150,150)
  ctx.font = "small-caps 44px Arial";
  ctx.fillText(`LvL:${p.lvl}`,180,60);
  ctx.fillText(`XP:${p.xp}/${p.lvl*50}`,180,100)
  ctx.fillText(`Coins:${p.coins}`, 180,140)
  ctx.fillText(`Married:${p.married}`,180,180);
  const img = new discord.MessageAttachment(card.toBuffer(),"card.png");
  message.channel.send(img);

}
  
