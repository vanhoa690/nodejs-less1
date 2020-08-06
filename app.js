const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.render('Heelo');
});

app.listen(3000, () => console.log('Server started...'));
