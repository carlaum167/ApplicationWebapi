
global.db = require('./db');
const express = require('express');
const app = express();
const port = 3000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Is working!'}));
app.use('/', router);

app.listen(port);
console.log('API working!');