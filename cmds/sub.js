module.exports.run = (bot, message,args) => {
  let db = global.players.get(message.author.id);
  
  if(!db.sub) {
    message.channel.send("Эта комманда доступна только тем, кто поддерживает нас 💛");
    return;
  }
  
  if(args[0] == "rankimage"){
    let db = global.players.get(message.author.id);
    db.sub_rankimage = message.attachments.first().url;
    global.players.set(message.author.id,db);
    return message.react("✅");
  }
  
  if(args[0] == "eps"){
    let eps = args[1];
    if(!args[1]) return message.channel.send("Укажите множитель уровня");
    if(eps > db.lvl*5) return message.channel.send("Множитель не может быть больше чем уровень в 5 раз");
    
    db.eps = Number.parseInt(eps);
    global.players.set(message.author.id,db);
    return message.react("✅")
  }
    let arr = ["Спасибо за поддержку 💛","Все возможности подписки на Mimic","1.Будьте впереди: вы сможете менять свой множитель уровня, но не больше чем уровня в 5 раз","2.Выделяйтесь: свой уникальный фон для комманды !rank"];
    message.channel.send(arr);
}