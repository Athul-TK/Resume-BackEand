// 1. Import json-server
const jsonServer = require("json-server");

// 2. Create server
const RBServer = jsonServer.create();

// 3. Create middleware
const middleware = jsonServer.defaults();

// 4. Import db.json file (router)
const router = jsonServer.router("db.json");

// 5. Define port
const PORT = 3000;

// 6. Use middleware
RBServer.use(middleware);

// 7. Use router
RBServer.use(router);

// 8. Start server
RBServer.listen(PORT, () => {
  console.log(`Resume Builder Started at port number ${PORT}`);
});