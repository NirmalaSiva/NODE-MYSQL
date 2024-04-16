const mysql = require("mysql");


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});



exports.register = (req,res)=>{
   //console.log(req.body);

   const {name, member1, member2, phone, email, password, passwordConfirm} = req.body;
    console.log(password)
db.query('SELECT * FROM user',
 async (error,results)=>{ if(error) throw error; console.log(results)});
db.query('SELECT email FROM user WHERE email = ?', [email], async (error, results)=>{
    if(error){

        console.log(error);
    }
    if(results.length > 0){
        return res.render('register', {
            message: 'That email has been taken'
        })
    }
    
     else {
        res.send("Form Submitted");
     }
 
   db.query('INSERT INTO user SET ?' , {name : name, member1 :member1, member2 : member2, phone : phone}, (error, results)=>{
   if(error){
    console.log("error");
   }
   else if(results){
    console.log("done");
    return res.render('register', {
        message: 'User Registered'
    }); 
   }
    
   })

}); 
}