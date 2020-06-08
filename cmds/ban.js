module.exports.run = (bot, message,args) => {
  let user = message.mentions.users.first();
  if(!message.guild.member(user.id)) return message.reply("Участник не найден на данном сервере");
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Недостаточно прав");
  let member = message.guild.member(user.id);
  let reason = args[1];
  member.kick(reason)
  .then(k => message.react("✅"))
  .catch(e => message.reply("Не удалось забанить участника"));
}