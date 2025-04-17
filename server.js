import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>Hello Tech2102 Final Project!</h2>
          <br>
          <h2>CHANGE again!</h2>
          <h3>Grop Members:</h3>
<p>Aryan Kumar</p>
<p>Kailan Bates</p>
<p>Marie Angelika Maglinte</p>
<p>Wagner Pires Ferreira</p>
        </section>
      </body>
    </html>
  `);
});

app.listen(80);
