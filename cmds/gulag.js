module.exports.run = async(bot, message,args) => {
  if(message.author.id != "343145699975626764") return;
  if(!args[0]) return;
  global.gulag.set(args[0], "gulag");
  let u = await bot.users.fetch(args[0]);
  message.channel.send(u.tag + " успешно добавлен в гулаг");
  bot.guilds.cache.forEach( g => {
    if(g.owner.id == args[0]){
      g.leave();
    }
  });
  
  u.send("За нарушение правил бота я запрещаю приглашать себя");
  
}