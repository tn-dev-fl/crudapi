const express = require('express')
const router = express.Router()
const mysql= require('mysql')
var mysqlconnection = mysql.createConnection(
{   
    host:'localhost',
    user:'',
    password:'',
    database:''
});
router.get('/',(req,res)=>
{   let select='SELECT * FROM `telegram` WHERE telegram.id=?'
    let query =mysql.format(select,[req.body.id])
    mysqlconnection.query(query ,(err,rows,fields)=>
    {try {res.send(rows)} catch (error) {console.log('wrong  hwid')}});

  
});
router.post('/id',(req,res)=>
{   let select='INSERT INTO `telegram`(`id`, `token`, `phone`, `code`) VALUES (?,?,?,?)'
    let query =mysql.format(select,[req.body.id,req.body.token,req.body.phone,req.body.code])
    mysqlconnection.query(query ,(err,rows,fields)=>
    {try {res.send(rows)} catch (error) {console.log('wrong  hwid')}});

  
});
module.exports= router;
