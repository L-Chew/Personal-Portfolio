const express = require('express');
const app = express();
const PORT = 8001 || process.env.PORT;
const cors = require('cors');

app.use(cors());
app.use(express.static('client/dist'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})