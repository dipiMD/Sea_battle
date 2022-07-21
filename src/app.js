const { application } = require('express');
const express = require('express');
const router = require('./API/routes');
const PORT = process.env.PORT || 3000;
const app = express();
app.listen(PORT);

app.use(express.json())
app.use('/api', router);