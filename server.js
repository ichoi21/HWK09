const express = require("express");
const routes = require("./routes/index");
const api = require("./routes/api-routes");

const app = express();

const PORT = process.env.PORT || 5088;

app.use("/", routes);
app.use("/api/", api);

app.listen(PORT, () => console.log("Listening on :" + PORT));
