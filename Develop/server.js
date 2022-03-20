const express = require("express");
const routes = require(".//routes/routes");
const app = express();
const PORT = process.env.PORT || 3000;
const htmlroutes = require(".//routes/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", routes);

app.use(routes);
app.use(htmlroutes);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
