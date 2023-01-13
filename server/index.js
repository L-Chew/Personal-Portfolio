const express = require('express');
const PORT = 8888;
const app = express();

app.use(express.static('client/dist'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})