module.exports.run = async(bot,message,args) => {
  if(!args) return message.channel.send("Вы не выбрали себе пару");
  const m_user = message.mentions.users.first();
  if(!m_user) return message.channel.send("Такого пользователя не существует");
  
  let marry_message = await message.channel.send("<@!" + m_user + ">,вы согласны выйти за " + message.author.tag);
  marry_message.react("💍");
  
  const filter = (reaction,user) => {
    return reaction.emoji.name === "💍" && user.id === m_user.id;
  }
  
  const col = marry_message.createReactionCollector(filter, {time: 15000});
  
  col.on("collect", (reaction,user) => {
    
    if(user.id == bot.user.id) return;
    
    let db1 = global.players.get(message.author.id);
    let db2 = global.players.get(m_user.id);
    if(db1.married != "None") return marry_message.edit("Низя");
    db1.married = m_user.username;
    db2.married = message.author.username;
    global.players.set(m_user.id,db1);
    global.players.set(message.author.id,db2);
    marry_message.edit("Обьявляю вас мужем и женой");
    
    
  });
}