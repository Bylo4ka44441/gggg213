const discord = require ("discord.js")
const talkedRecently = new Set();
module.exports.run = (bot, message) => {
    if (talkedRecently.has(message.author.id)) {
            message.channel.send("Подождите 10 секунд перед использованием этой команды, я не очень люблю когда это делают.");
    } else {

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 10000);
  let e = new discord.MessageEmbed();
  e.setTitle("Помощь");
  e.setDescription("Привет! Меня зовут Мимика, и я многофункциональный бот который может помочь серверу.\nДа-да, помочь) И так... Вот мои команды:")
  e.addField("Модерация","ban kick dashboard clear");
  e.addField("Информация","status rank");
  e.addField("Ролеплей","hug kiss pat marry unmarry");
  e.addField("Развлекательное", "battle");
  e.addField("Утилиты", "createembed translate weather")
  e.addField("PREMIUM-команды", "sub [rankimage]")
  e.setTimestamp();
  e.setColor("RANDOM");
  e.setFooter("Mimic| Все права замазаны");
  message.channel.send(e);
}
}


//ахахахаха