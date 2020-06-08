module.exports.run = (bot, message,args) => {
  let name = args[0];
  let query = args.slice(1).join("+");
  let url = "http://google.gik-team.com/?q=" + query;
  
  message.channel.send(`Так как ${name} лень гуглить, то я решила сделать это за него. Вот ссылка: ${url}`);
  
}