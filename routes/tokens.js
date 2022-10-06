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
{
    let select='SELECT * FROM ?? WHERE ?? LIKE ? AND ?? LIKE ? '
    let query =mysql.format(select,["token","token",req.body.token,"hwid",req.body.hwid])
    mysqlconnection.query(query ,(err,rows,fields)=>
    {try {res.send(rows)} catch (error) {res.send("nice try ")}})});
router.put('/',(req,res)=>
{   let select="UPDATE ?? SET ?? = ?, ?? = ?? WHERE ?? = ?"; 
    let query =mysql.format(select,["token","ip",req.body.ip,"hwid",req.body.hwid,"token.token",req.body.token])
    mysqlconnection.query(query ,(err,rows,fields)=>
    {
    try {
       
        res.send(rows)
        
        
    } catch (error) {
        res.send(error)
    }




    }
    
    
    
    )


}
);

router.post('/',(req,res)=>
{   let select="INSERT INTO `token` (`token`) VALUES (?)"; 
    let query =mysql.format(select,[req.body.token])
    mysqlconnection.query(query ,(err,rows,fields)=>
    {
    try {
       
        res.send(rows)
        
        
    } catch (error) {
        res.send(error)
    }




    }
    
    
    
    )


}
);
module.exports= router
