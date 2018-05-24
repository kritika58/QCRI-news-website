const express = require("express");
const mysql = require("mysql");

const app=express();

const SELECT_ALL_NAMES_QUERY='SELECT * FROM trial';
//Create connection
const db= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database: 'reactapp'
});

//Connect
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('MySQL Connected');
});



//Create DB
/*app.get('/createdb',(req,res)=>{
    let sql= 'CREATE DATABASE reactapp';
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Database Created');
    });
});*/
//create table
/*app.get('/createpoststable',(req,res)=>{
    let sql ='CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id) )';
    db.query(sql,(err,result)=>{
        if(err) 
        throw err;
        console.log(result);
        res.send('Post table Created');
    });
});*/
app.get('/',(req,res) => {
    res.send('go to views names of news sources')
});
//select names from trial in reactapp
app.get('/getnames',(req,res)=> {
    let sql= 'SELECT * from trial';
    let query=db.query(sql,(err, results) =>{
        if(err){
            //throw err;
        console.log(results);
        }
        else {
            //res.send('Names fetched');
            return res.json({
            data: results
        })
        }        
    });
});

app.listen('3000',()=> {
    console.log('Server started on port 3000');
});