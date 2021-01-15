const express = require("express");
const app = express();
const path = require("path");

const indexRouter = require("./routes/indexRoute");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`[server] - running on port ${PORT}`));
