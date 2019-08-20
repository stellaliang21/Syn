const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();

const { createUser, 
        createOauth, 
        createIBAccount, 
        addFund 
      } 
      = require('./controller/controller.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/api/user', createUser);

app.get('/api/oauth/:user_id/:refresh_token', createOauth);

app.post('/api/user/:user_id', createIBAccount);

app.post('/api/addFund/:user_id', addFund);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
