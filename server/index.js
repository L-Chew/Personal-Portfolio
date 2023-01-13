const express = require('express');
const app = express();
const PORT = 8888;

app.use(express.static('client/dist'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is listening of post: ${PORT}`)
})