const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const { HTTP_PORT } = process.env;

const app = express();

app.listen(HTTP_PORT, ()=>{
    console.log(`Server running on http://localhost:${HTTP_PORT}`);
})