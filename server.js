const express = require('express');
const session = require('express-session')
const mysql = require('mysql');
const BodyParser = require('body-parser')
var cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(BodyParser.json())
app.use(cors());
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

const PORT = process.env.PORT || 4000;

var connection = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "erp"
})  

connection.connect(err=>{ 
    if(err){
        console.log(err)
    }else{
        console.log("DB Connected")
    }
})

app.get('/', (req, res) => {
    connection.query("SELECT * FROM profile",(error,rows,fields)=>{
        if(error){
            res.sendStatus(403)
        }
        return res.send({profile:rows}).sendStatus(200)
    })
});
app.get('/student',(req,res) =>{
    res.send('welcome')
})

app.post('/student',(req,res)=>{
    const {Id,password}=req.body;
    let query = "SELECT * FROM login WHERE ID='" + Id+"'"
    connection.query(query,(error,rows,fields)=>{
        var user = rows[0]
        if(user.Password===password){
        var profile = `SELECT * FROM profile WHERE ID='${user.ID}' `
        connection.query(profile,(error,rows,fields)=>{
            var profile = rows[0]
            return res.json(profile).status(200)
        })
        }
        else{ res.send('wrong password')        }
    })
})
app.get('/:Id', (req, res) => {
    var Id = req.params.Id
    let query = `SELECT * FROM profile WHERE ID = '${Id}'`
    connection.query(query, (error, rows, fields) => {
        var user = rows[0]
        console.log(user)
        return res.json(user).status(201)
    })
})



app.use('/',express.static(__dirname+'/assests/'));

app.listen(PORT, () => {
    console.log('Example app listening on port port!');
});

//Run app, then load http://localhost:port in a browser to see the output.