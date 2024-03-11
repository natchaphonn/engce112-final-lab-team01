const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const port = 3080;

// place holder for the data
const users = [
  {
    firstName: "Supanat",
    lastName: "Palee",
    email: "supanat_pa64@live.rmutl.ac.th",
    position: "Team Leader"
  },
  {
    firstName: "Danuson",
    lastName: "Suwannaprasit",
    email: "danuson_su64@live.rmutl.ac.th",
    position: "System Analyst"
  },
  {
    firstName: "์Natchaphon",
    lastName: "Panasantikun",
    email: "natchaphon_pa64@gmail.com",
    position: "Developer"
  },
  {
    firstName: "Siwakorn",
    lastName: "Muangmala",
    email: "siwakorn_mu64@live.rmutl.ac.th",
    position: "Developer"
  },
  {
    firstName: "Atchariya",
    lastName: "Surintah",
    email: "atchariya_su64@live.rmutl.ac.th",
    position: "Tester"
  }
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});