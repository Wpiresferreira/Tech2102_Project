



import express from 'express';

const bodyParser = require('body-parser');
 
const app = express();

 
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
 
app.use(express.static('public'));
 
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>Hello Tech2102 Final Project!</h2>
        </section>
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>Message</label>
            <input type="text" name="goal">
          </div>
          <button>Send Message</button>
        </form>
      </body>
    </html>
  `);
});
 
 
app.listen(3000);

