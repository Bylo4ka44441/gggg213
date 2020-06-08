const translate = require("translate"); //Модуль.
const { MessageEmbed } = require("discord.js") 
const colors = "Цвет для имбеда" 
translate.engine = "yandex"; // Можно указать и google, но тогда и API ключ надо будет другой.
translate.key = "trnsl.1.1.20200103T173551Z.b12dbe629a58b945.fcf50e49c3c3d63f2f5e268fe836b20369688455" 
module.exports.run = async (bot, message, args) => {
  var args1 = message.content.toLowerCase().split(/ +/g); 
  let RU = ["ru", "русский", "russian"];
  let EN = ["en", "английский", "english"];
  let text = args.slice(1).join(" "); 
  if (!args[0]) return message.channel.send("Напиши с какого языка переводить (ru, en)");
  if(!text) return message.channel.send("Укажите текст для перевода!")
  if (args1.some(a => RU.find(word => word == a))) { 
    translate(text, { from: "ru", to: "en" }).then(text2 => { //Переводим с RU на EN
      message.channel.send(
      new MessageEmbed()
      .setColor(colors)
      .addField("Перевод с русского на английского:", text2)
      .setFooter("Переведено сервисом <Яндекс.Переводчик>: http://translate.yandex.ru")
      )
    });
    return
  }
  if (args1.some(a => EN.find(word => word == a))) {
    translate(text, { from: "en", to: "ru" }).then(text => { //Тоже самое, но наоборот.
      message.channel.send(
      new MessageEmbed()
      .setColor(colors)
      .addField("Перевод с английского на русский:", text)
      .setFooter("Переведено сервисом <Яндекс.Переводчик>: http://translate.yandex.ru")
      )
    });
    return
  }
  message.channel.send("Я не понял команду!")
};