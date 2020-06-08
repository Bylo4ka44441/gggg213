const weather = require('weather-js');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
        if (err) message.reply("`!weather <Локация>`");
        if (result === 0) {
            message.reply('Неверная локация!')
            return; 
        }
        var current = result[0].current;
        var location = result[0].location;
        const embed = new Discord.MessageEmbed()
            .setDescription(`${current.skytext}`)
            .setTitle(`🌥️ Погода в ${current.observationpoint} 🌥️`)
            .setThumbnail(current.imageUrl)
            .setColor("RANDOM")
            .addField('⏲️ **Зона:**',`UTC${location.timezone}`, true)
            .addField('📍 **Степень Типа:**',location.degreetype, true)
            .addField('🌬️ **Ветер:**',current.winddisplay, true)
            .addField('💧 **Влажность:**', `${current.humidity}%`, true)
            message.channel.send(embed);
});
}