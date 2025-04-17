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
      <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f9;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      section {
        text-align: center;
        padding: 20px;
        border: 2px solid #ccc;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      }

      h2 {
        color: #2c3e50;
        font-size: 24px;
        margin: 10px 0;
      }

      h2:first-of-type {
        text-decoration: underline;
        color: #2980b9;
      }
    </style>
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
