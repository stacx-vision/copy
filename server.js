const express = require("express");
const app = express();
app.use(express.static("public"));
const path = require("path");
app.use("style.css",express.static(path.resolve(__dirname + `style.css`)));
app.use("app.js",express.static(path.resolve(__dirname + `app.js`)));

 const templateDir = path.resolve(__dirname + `/`);

  app.locals.domain = process.env.PROJECT_DOMAIN;
  app.engine("html", require("ejs").renderFile);
  app.set("view engine", "ejs");

  var bodyParser = require("body-parser");
  app.use(bodyParser.json());

  const renderTemplate = (res, req, template, data = {}) => {
    const baseData = {
      path: req.path
    };
    res.render(
      path.resolve(`${templateDir}${path.sep}${template}`),
      Object.assign(baseData, data)
    );
  };

  app.get("/", (req, res) => {
        renderTemplate(res, req, "index");
  });
  app.get("/*", (req, res) => {
        renderTemplate(res, req, "404");
  });


const listener = app.listen(process.env.PORT, () => {
  console.log("starting " + listener.address().port);
});
