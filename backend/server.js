const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

//middlewares

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'aridb',
    database:'management',
     timezone: '+00:00'  //Temp for date
})

// app.get('/',(req,res)=>{
//     console.log("Working! No worries...");
    
//     return res.json("Working! No worries...")
// })

app.post('/newemp',async (req,res)=>{
    try{
        const {emp_id,name,email,phone,dept,d_join,role} = req.body;

        const qrCheck = "SELECT * FROM employee WHERE emp_id = ? OR email = ?;"

        const data = [emp_id,email];

        console.log(data);
        

        db.query(qrCheck,data,(err,result)=>{
            if(err){
                return res.status(500).json({"Error while Checking":err});
            }
            if(result.length >0){
                const duplicate = [];
                
                result.forEach(element => {
                    if(element.emp_id === emp_id){
                        duplicate.push("Employee ID ");
                    }
                    if(element.email == email){
                        duplicate.push("Email")
                    }
                });
                return res.status(409).json({
                    error:`${duplicate.join("and ")} already exist!`
                });
            }
        })

        const qr = "INSERT INTO employee (emp_id,name,email,phone,dept,d_join,role) VALUES(?,?,?,?,?,?,?);"
        const values = [emp_id,name,email,phone,dept,d_join,role];
    
        db.query(qr,values,(err,result)=>{
            if(err){
                console.error("DB insert error...",err);
                return res.status(500).json({error: "Insert failed!"})
            }
            console.log(res);
            
            return res.status(201).json("Register Successfully!");
        })
    }catch(err){
        console.log(err);
        
    }
});

app.get("/",async (req,res)=>{
    try{
        const qr = "SELECT * FROM employee;"

        db.query(qr,(err,result)=>{
            if(err){
                return res.status(500).json({"Error while get data":err});
            }
            console.log(result);
            
            return res.status(201).json(result);
        })
    }catch(err){
        console.error(err);
    }
})

app.delete('/:id',async (req,res)=>{
    try{    

        const empid = req.params.id;
        const qr = "DELETE FROM employee where emp_id = ?;"  
        db.query(qr,empid,(err,result)=>{
            if(err){
                return res.status(500).json({"Can't able to delete!":err});
            }
            console.log(result);
            return res.status(200).json({"Deleted successfully":result});
        })  

    }catch(err){
        console.error(err);
        
    }
  
})

app.listen(8800,()=>{
    console.log("Server connected! Let's rock.....");
})