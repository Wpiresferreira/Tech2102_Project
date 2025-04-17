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
  res.sendFile(
    "index.html",
    {
      root: path.join(__dirname),
    },
    function (err) {
      if (err) {
        console.error("Error sending file:", err);
      }
    }
  );
});

app.listen(80);
