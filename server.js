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


//-----------------------------------------------------------------------------------------------------
app.post('/student',(req,res)=>{
    const {Id,password}=req.body;
    let query = "SELECT * FROM login WHERE ID='" + Id+"'"
    connection.query(query,(error,rows,fields)=>{
        var user = rows[0]  
        if(rows.length === 0)
            res.send('wrong password')
        else if(user.Password===password){
        var profile = `SELECT * FROM profile WHERE ID='${user.ID}' `
        connection.query(profile,(error,rows,fields)=>{
            var profile = rows[0]
            return res.json(profile).status(200)
        })
        }
        else{ res.send('wrong password')        }
    })
})

//----------------------------------------------------------------------------------------------------------------------
app.post('/teacher',(req,res)=>{
    const {Id,password}=req.body;
    let query = "SELECT * FROM teacher_login WHERE tid='" + Id+"'"
    connection.query(query,(error,rows,fields)=>{

        var user = rows[0]   
        if(rows.length === 0)
            res.send('wrong id')
        else if(user.tpassword===password){
            var profile = `SELECT * FROM teacher_profile WHERE tid='${user.tid}' `
            connection.query(profile,(error,rows,fields)=>{
                var profile = rows[0]
                return res.json(profile).status(200)
            })
        }
        else{ res.send('wrong password') }
    })
})

//-----------------------------------------------------------------------------------------------------------------
app.get('/:Id', (req, res) => {
    var Id = req.params.Id
    let query = `SELECT * FROM profile WHERE ID = '${Id}'`
    connection.query(query, (error, rows, fields) => {
        var user = rows[0]
        console.log(user)
        return res.json(user).status(201)
    })
})
 
//------------------------------------------------------------------------------------------------------------------

app.get('/teacher/:Id', (req, res) => {
    var Id = req.params.Id
    let query = `SELECT * FROM teacher_profile WHERE tid = '${Id}'`
    connection.query(query, (error, rows, fields) => {
        var user = rows[0]
        console.log(user)
        return res.json(user).status(201)
    })   
}) 

//-------------------------------------------------------------------------------------------------------------------
// app.get('/Attendance/:sub/:Id', (req, res) => {
//     const Id = req.param.Id
//     const sub = req.param.sub
//     let query = `SELECT * FROM ${sub} WHERE id = '${Id}'` 
//     connection.query(query, (error, rows, fields) => {
//         var user = rows[0]
//         console.log(user)
//         return res.json(user).status(200)
//     })
// }) 
  
app.get('/Attendance/adbms/:Id', (req, res) => {
    var Id = req.params.Id
     
    let query = `SELECT * FROM adbms WHERE id = '${Id}'` 
    connection.query(query, (error, rows, fields) => {
        var user = rows[0]
        console.log(user)
        return res.json(user).status(201)
    })
}) 

app.get('/Attendance/adms/:Id', (req, res) => {
    var Id = req.params.Id
     
    let query = `SELECT * FROM adms WHERE id = '${Id}'` 
    connection.query(query, (error, rows, fields) => {
        var user = rows[0]
        console.log(user)
        return res.json(user).status(201)
    })
}) 

app.get('/Attendance/aoops/:Id', (req, res) => {
    var Id = req.params.Id
     
    let query = `SELECT * FROM aoops WHERE id = '${Id}'` 
    connection.query(query, (error, rows, fields) => {
        var user = rows[0]
        console.log(user)
        return res.json(user).status(201)
    })
}) 


app.get('/Attendance/apython/:Id', (req, res) => {
    var Id = req.params.Id
     
    let query = `SELECT * FROM apython WHERE id = '${Id}'` 
    connection.query(query, (error, rows, fields) => {
        var user = rows[0]
        console.log(user)
        return res.json(user).status(201)
    })
}) 


app.get('/Attendance/ampmc/:Id', (req, res) => {
    var Id = req.params.Id
     
    let query = `SELECT * FROM ampmc WHERE id = '${Id}'` 
    connection.query(query, (error, rows, fields) => {
        var user = rows[0]
        console.log(user)
        return res.json(user).status(201)
    })
}) 

app.get('/Attendance/aeco/:Id', (req, res) => {
    const Id = req.params.Id
     
    let query = `SELECT * FROM aeco WHERE id = '${Id}'` 
    connection.query(query, (error, rows, fields) => {
        let user = rows[0]
        console.log(user)
        return res.json(user).status(201)
    })
}) 
//----------------------------------------------------------------------------------------------------------------------
app.get('/performance/:Id', (req, res) => {
    const Id = req.params.Id
     
    let query = `SELECT * FROM performance WHERE ID = '${Id}'` 
    connection.query(query, (error, rows, fields) => {
        let user = rows[0]
        console.log(user)
        return res.json(user).status(200)
    })
}) 
app.get('/performance/max/:Id', (req, res) => {
    const Id = req.params.Id
     
    let query = `SELECT MAX(DMS),MAX(OOPS),MAX(DBMS),MAX(PYTHON),MAX(MPMC),MAX(ECO)
                 FROM performance` 
    connection.query(query, (error, rows, fields) => {
        let user = rows[0]
        console.log(user)
        return res.json(user).status(200)
    })
})
//------------------------------------------- --------------------------------------------------------------------------

app.get('/Fees/:Id', (req, res) => {
    var Id = req.params.Id
    let query = `SELECT * FROM fees WHERE id = '${Id}'` 
    connection.query(query, (error, rows, fields) => {
        var user = rows
        console.log(user)
        return res.json(user).status(201)
    })
}) 
//-------------------------------------------------------------------------------------------------------------------
app.get('/teacher/:Id',(req,res) =>{
    var Id = req.params.Id
    let query = `SELECT * FROM `
})

//------------------------------------------------------------------------------------------------------------------
app.get('/salary/:id', (req, res) => {
    var Id  = req.params.Id
    let query = `SELECT * FROM salary` 
    connection.query(query, (error, rows, fields) => {
        var user = rows
        console.log(user)
        return res.json(user).status(201)
    })
}) 

//------------------------------------------------------------------------------------------------------------------
app.get('/teacher/attendance/:id', (req, res) => {
    var Id  = req.params.id
    let query = `SELECT subject FROM subjects WHERE tid = ${Id}` 
    connection.query(query, (error, rows, fields) => {
        var subTable = 'a'+rows[0].subject.toLowerCase()
        connection.query(`SELECT * FROM ${subTable}`,( err,rows,fields) => {
            let attendance = rows
            console.log(attendance)
            return res.json(attendance).status(201)
        })
        
    })
}) 
//-------------------------------------------------------------------------------------------------------------------

app.get('/teacher/performance/:id', (req, res) => {
    var Id  = req.params.id
    let query = `SELECT subject FROM subjects WHERE tid = ${Id}` 
    connection.query(query, (error, rows, fields) => {
        var subTable = rows[0].subject
        connection.query(`SELECT ID,${subTable}  FROM performance`,( err,rows,fields) => {
            let performance = rows
            console.log(performance)
            return res.json(performance).status(201)
        })
        
    })
}) 

app.post('/teacher/performance/new/:id', (req, res) => {
    var Id  = req.params.id
    let query = `SELECT subject FROM subjects WHERE tid = ${Id}` 
    connection.query(query, (error, rows, fields) => {
        const {ID,marks} = req.body
        var subTable = rows[0].subject
        connection.query(`INSERT INTO  performance(ID,${subTable}) VALUES('${ID}','${marks}')`,( err,rows,fields) => {
            if(error) throw error;
            res.send(JSON.stringify(rows));
        })
        
    })
}) 

app.post('/teacher/performance/update/:id', (req, res) => {
    var Id  = req.params.id
    let query = `SELECT subject FROM subjects WHERE tid = ${Id}` 
    connection.query(query, (error, rows, fields) => {
        const {ID,marks} = req.body
        var subTable = rows[0].subject
        connection.query(`UPDATE  performance SET ${subTable} = '${marks}' WHERE ID = '${ID}'`,( err,rows,fields) => {
            if(error) throw error;
            res.send(JSON.stringify(rows));
        })
        
    })
})   
//---------------------------------------------------------------------------------------------------------------------
app.post('/teacher/attendance/new/:id', (req, res) => {
    var Id  = req.params.id
    let query = `SELECT subject FROM subjects WHERE tid = ${Id}` 
    connection.query(query, (error, rows, fields) => {
        var subTable = 'a'+rows[0].subject.toLowerCase()
        const {id,July,August,September,October,November,December} = req.body
        
        connection.query(`INSERT INTO  ${subTable}(id,July,August,September,October,November,December) 
                            VALUES('${id}','${July}','${August}','${September}','${October}','${November}','${December}')`,( err,rows,fields) => {
            if(error) throw error;
            res.send(JSON.stringify(rows));
        })
        
    })
})  

//-------------------------------------------------------------------------------------------------------------------
app.use('/',express.static(__dirname+'/assests/'));

app.listen(PORT, () => {
    console.log('Example app listening on port port!');
});

//Run app, then load http://localhost:port in a browser to see the output.