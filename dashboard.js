const app = require("express")();
const bp = require("body-parser");
app.use(bp.urlencoded({ extended: true}));
app.set("view engine","ejs");
app.get("/",(req,res) => {
  res.render("index", {bot: global.client});
})


app.post("/server_edit", (req,res) => {
  try{
  let token = req.body.server_access.split(":");
  let server = global.servers.get(token[0]);
  
  if(server.access_token == token[1]){
    
    res.render("panel", {db: server, guild: global.getServer(token[0])})
  
  }else{ res.render("index", {error: "Неправильный токен"})}
  }catch(e) {res.render("index", {error: "Неправильный токен"})}
});

app.post("/server_save/:id", (req,res) => {
  const db = global.servers.get(req.params.id);
  db.prefix = req.body.prefix;
  db.toggle_hi = req.body.toggle_hi;
  db.hi_channel = req.body.hi_channel;
  db.hi_text = req.body.hi_text;
  global.servers.set(req.params.id,db);
  res.render("panel", {db: global.servers.get(req.params.id),guild: global.getServer(req.params.id) })
} )


app.get("/panel_auth", (req,res) => {
  res.render("panel_auth");
});

app.listen(8080);
// ладно делай
// не выходит
// 404