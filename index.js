const express = require('express');
const dotenv = require('dotenv');
const router = require('./src/routes/index.routes');

dotenv.config();

const { HTTP_PORT } = process.env;

const app = express();

app.use(router);

app.listen(HTTP_PORT, ()=>{
    console.log(`Server running on http://localhost:${HTTP_PORT}`);
})