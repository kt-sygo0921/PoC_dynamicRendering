const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('view'));
app.use(express.static('public'));

// app.get('/', ({res}) => {
//     res.sendFile('./index.html');
// });

app.listen(3000);