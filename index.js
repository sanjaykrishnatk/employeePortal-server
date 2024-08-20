const jsonServer = require("json-server");
const middleware = jsonServer.defaults();
const router = jsonServer.router("./db.json");
const mainServer = jsonServer.create();
mainServer.use(middleware);
mainServer.use(router);
const PORT = 4000 || process.env.PORT;
mainServer.listen(PORT, () => {
  console.log(`server running succesfully at port ${PORT}`);
});
