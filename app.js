const cluster = require("cluster");

if (cluster.isMaster) {
  cluster.fork();
} else {
  const express = require("express");

  const app = express();

  app.get("/", (req, res) => {
    res.send({ hello: "World" });
  });

  app.listen(3000, () => console.log(`server started on port 3000`));
}
