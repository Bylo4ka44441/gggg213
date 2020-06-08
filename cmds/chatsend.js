const request = require ("request");
module.exports.run = async(bot, message,args) => {
  
  const params = {
    author: message.author.username,
    message: args.join(" ")
  }
  
 await request.post("http://great-chat.glitch.me/api/send", {form: {method:"send",params: params}})
  
  message.channel.send("Сообщение успешно отправлено");
  }