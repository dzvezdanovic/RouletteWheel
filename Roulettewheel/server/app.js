const express = require('express');
const body = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(body.urlencoded({ extended: true }));
app.use(body.json());

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));