import express from 'express';
// const express = require()    

const app = express();

app.get('/',(req,res) => {
    app.send("Hello world!");
});

app.listen(8000,() => {
    console.log("Server is running on port 8000");
})