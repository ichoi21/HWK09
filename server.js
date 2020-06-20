const express = require("express");
const app = express();

const PORT = process.env.PORT || 5088;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

const routes = require("./routes/client-routes");
app.use("/", routes);

const api = require("./routes/api-routes");
app.use("/api/", api);

app.listen(PORT, () => console.log("Listening on : http://localhost:" + PORT));
