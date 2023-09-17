import express, { Router } from 'express';
import router from '../Server/routes/routes.js'
import DBConnection from '../Server/database/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
// const express = require()    

dotenv.config();
const app = express();

//use middlewares
app.use(cors()); //use this beginning to avoid cors error in browser
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //help manage json data
app.use('/', router);

DBConnection();

app.listen(8000, () => {
    console.log("Server is running on port 8000");
})