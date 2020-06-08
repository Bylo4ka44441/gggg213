const ms = require('ms');

module.exports.run = (bot,message,args) => {
             let role = message.member.hasPermission('MANAGE_MESSAGES')
    if(!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.reply("Sorry, you don't have permissions to use this! please have MANAGE_MESSAGES perm");
  if (!args[0]) return message.channel.send('Please send an amount of messages to delete!')
            message.channel.bulkDelete(args[0]);
            message.channel.send(args[0] + ' messages have been deleted!')
}