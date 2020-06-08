global.getServer = (id) => {
  return global.client.guilds.cache.get(id);
}
global.setLvL = (id,lvl) => {
  let db = global.players.get(id);
  db.lvl = lvl;
  global.players.set(id,db);
  return db;
}
global.setEps = (id,eps) => {
  let db = global.players.get(id);
  db.eps = eps;
  global.players.set(id,db);
  return db;
}
global.makeSub = (id) => {
  let db = global.players.get(id);
  db.sub = true;
  global.players.set(id,db);
  const ofg = global.client.guilds.cache.get("707546929676157018");
  const subrole = ofg.roles.cache.get("714147471281881138");
  const submember = ofg.members.cache.get(id);
  submember.roles.add(subrole);
  return `${submember.displayName} успешно стал подписчиком 💛`
}