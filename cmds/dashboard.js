module.exports.run = (bot, message) => {
  if(message.member != message.guild.owner) return;
  const access_gen = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","","0","1","2","3","4","5","6","7","8","9"];
  let token = "";
    for (let i = 0; i<20; i++){
    token = token + access_gen[Math.floor(Math.random() * access_gen.length + 0 - 0)];
    }
  let b = global.servers.get(message.guild.id);
  b.access_token = token;
  global.servers.set(message.guild.id,b);
  
  message.author.send(message.guild.id + ":" + token);
}