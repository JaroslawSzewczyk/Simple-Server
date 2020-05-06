const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

app.use('/users/',(req, res, next) => {
  res.sendFile(path.join(__dirname, `/views/users/forbidden.html`));
});

app.get('/',(req, res) => {
  res.show('index.html');
})

app.get('/about',(req, res) => {
  res.show('about.html');
})

app.get('/users/panel',(req, res) => {
  res.show('/users/panel.html');
})

app.get('/users/settings',(req, res) => {
  res.show('/users/settings.html');
})

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname,'/public/pnf.png'));
})

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
