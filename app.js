//our main file entry point .

const express = require('express');
const bodyparser=require('body-parser');
//bodyparser : to parse request as json.
require('dotenv').config('mysql')
//mysql so we can use mysql
var mysql = require('mysql');
const app =express();
app.use(express.json());
app.use(bodyparser.json());
//this is routes : tokens and sadge
const route =require('./routes/tokens');
const pop=require('./routes/sadge');
app.use('/tokens',route);
app.use('/users',pop);
// to connect to mysql 
var mysqlconnection = mysql.createConnection(
    {   
      host:'localhost',
      user:'pepecszq_popa',
      password:'',
      database:''   });
     mysqlconnection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });







// the port 
app.listen(5000,()=> console.log("it's working"));

