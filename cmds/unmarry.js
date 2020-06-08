module.exports.run = async(bot, message,args) => {
  
  const db = global.players.get(message.author.id);
 
  if(db.married == "None") return;
  const users = bot.users.cache.filter(user => user.username == db.married);
  const user = users.first();
  const db2 = global.players.get(user.id)
  
  
  db.married = "None";
  db2.married = "None";
  global.players.set(message.author.id,db);
  global.players.set(user.id,db2);
  message.react("✅");
  
}